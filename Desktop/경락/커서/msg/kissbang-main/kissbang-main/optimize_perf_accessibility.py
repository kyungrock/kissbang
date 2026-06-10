#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Optimize static HTML files for better performance and accessibility."""

from __future__ import annotations

import re
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
HTML_DIR = BASE_DIR / "public"
STYLE_LINK_PATTERN = re.compile(
    r'(?P<indent>\s*)<link\s+rel="stylesheet"\s+href="(?P<href>style\.css[^"]*)"\s*/?>',
    re.IGNORECASE,
)
SCRIPT_PATTERN = re.compile(
    r'(<script\s+[^>]*src="[^"]*(?:common-components|script)\.js[^"]*"[^>]*>)(</script>)',
    re.IGNORECASE,
)
IMG_PATTERN = re.compile(r"<img(?P<attrs>[^>]*)>", re.IGNORECASE)
MAIN_TAG_PATTERN = re.compile(r"<main[^>]*>", re.IGNORECASE)


def ensure_main_wrapper(content: str) -> str:
    """Guarantee there is a main landmark accessible via #main-content."""
    lower = content.lower()
    if 'id="main-content"' in lower:
        return content

    def inject_wrapper(text: str) -> str:
        marker = '<div id="header-container"></div>'
        if marker not in text:
            return text
        wrapped = text.replace(
            marker,
            marker + '\n\n    <main id="main-content" tabindex="-1">',
            1,
        )
        return wrapped.replace("</body>", "    </main>\n  </body>", 1)

    match = MAIN_TAG_PATTERN.search(content)
    if match:
        tag = match.group(0)
        updated_tag = tag

        needs_id = 'id="main-content"' not in tag.lower()
        needs_tabindex = "tabindex" not in tag.lower()

        if needs_id:
            if re.search(r'id="[^"]+"', tag, re.IGNORECASE):
                updated_tag = re.sub(
                    r'id="[^"]+"',
                    'id="main-content"',
                    updated_tag,
                    count=1,
                    flags=re.IGNORECASE,
                )
            else:
                updated_tag = updated_tag.replace("<main", '<main id="main-content"', 1)

        if needs_tabindex:
            updated_tag = updated_tag.replace(
                "<main",
                '<main tabindex="-1"' if needs_id else '<main tabindex="-1"',
                1,
            )
        if updated_tag != tag:
            content = content.replace(tag, updated_tag, 1)
        return content

    return inject_wrapper(content)


def ensure_preload(content: str) -> str:
    """Preload the main stylesheet to shorten the critical rendering path."""
    if "style.css" not in content:
        return content

    def replacer(match: re.Match[str]) -> str:
        indent = match.group("indent")
        href = match.group("href")
        preload_line = f'{indent}<link rel="preload" href="{href}" as="style" />\n'
        if preload_line.strip() in content:
            return match.group(0)
        return preload_line + match.group(0)

    return STYLE_LINK_PATTERN.sub(replacer, content, count=1)


def ensure_defer(content: str) -> str:
    """Add defer attribute to heavy JS bundles."""
    def add_defer(match: re.Match[str]) -> str:
        tag = match.group(1)
        if "defer" in tag.lower():
            return match.group(0)
        new_tag = tag[:-1] + " defer>"
        return new_tag + match.group(2)

    return SCRIPT_PATTERN.sub(add_defer, content)


def ensure_lazy_images(content: str) -> str:
    """Ensure images lazy-load by default."""
    def add_lazy(match: re.Match[str]) -> str:
        attrs = match.group("attrs")
        if "loading=" in attrs.lower():
            return match.group(0)
        return f'<img loading="lazy"{attrs}>'

    return IMG_PATTERN.sub(add_lazy, content)


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = original

    updated = ensure_main_wrapper(updated)
    updated = ensure_preload(updated)
    updated = ensure_defer(updated)
    updated = ensure_lazy_images(updated)

    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = 0
    for html_file in HTML_DIR.glob("*.html"):
        if process_file(html_file):
            changed += 1
    print(f"Updated {changed} HTML files")


if __name__ == "__main__":
    main()