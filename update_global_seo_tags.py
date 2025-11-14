#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Bulk-update canonical, Open Graph, and Twitter meta tags for static HTML files."""

from __future__ import annotations

import re
from pathlib import Path

BASE_URL = "https://msg1000.com/"
DEFAULT_OG_IMAGE = "https://via.placeholder.com/1200x630?text=마사지천국"
HTML_DIR = Path("public")

TITLE_PATTERN = re.compile(r"<title>(?P<title>.*?)</title>", re.IGNORECASE | re.DOTALL)
DESCRIPTION_PATTERN = re.compile(
    r"<meta\s+name=\"description\"\s+content=\"(?P<desc>[^\"]*)\"\s*/?>",
    re.IGNORECASE,
)


def canonical_url(file_path: Path) -> str:
    if file_path.name == "index.html":
        return BASE_URL.rstrip("/")
    return BASE_URL + file_path.name


def extract_title(content: str) -> str:
    match = TITLE_PATTERN.search(content)
    if not match:
        return "마사지천국"
    raw = match.group("title")
    collapsed = " ".join(raw.split())
    return collapsed or "마사지천국"


def extract_description(content: str) -> str:
    match = DESCRIPTION_PATTERN.search(content)
    if not match:
        return "마사지천국에서 지역별 마사지 정보를 확인하세요."
    return match.group("desc").strip() or "마사지천국에서 지역별 마사지 정보를 확인하세요."


def ensure_canonical(content: str, canonical: str) -> str:
    content = re.sub(
        r"\s*<link\s+rel=\"canonical\"[^>]*>\s*\n?",
        "",
        content,
        flags=re.IGNORECASE,
    )

    patterns = [
        re.compile(r'(?P<indent>[ \t]*)<meta\s+name="author"', re.IGNORECASE),
        re.compile(r'(?P<indent>[ \t]*)<link\s+rel="stylesheet"', re.IGNORECASE),
        re.compile(r'(?P<indent>[ \t]*)</head>', re.IGNORECASE),
    ]

    canonical_template = '<link rel="canonical" href="{canonical}" />\n'
    for pattern in patterns:
        match = pattern.search(content)
        if match:
            indent = match.group('indent')
            canonical_line = f"{indent}{canonical_template.format(canonical=canonical)}"
            insert_pos = match.start()
            updated = content[:insert_pos] + canonical_line + content[insert_pos:]
            updated = re.sub(
                r'(?m)^(<meta\s+name="author"[^>]*>)',
                r'    \1',
                updated,
            )
            updated = re.sub(
                r'(?<=/>)\s*<link\s+rel="canonical"',
                '\n' + indent + '<link rel="canonical"',
                updated,
                count=1,
                flags=re.IGNORECASE,
            )
            updated = re.sub(
                r'(?m)^<link\s+rel="canonical"',
                '    <link rel="canonical"',
                updated,
                count=1,
                flags=re.IGNORECASE,
            )
            return updated

    # Fallback: prepend to content
    updated = canonical_template.format(canonical=canonical) + content
    updated = re.sub(
        r'(?m)^(<meta\s+name="author"[^>]*>)',
        r'    \1',
        updated,
    )
    updated = re.sub(
        r'(?<=/>)\s*<link\s+rel="canonical"',
        '\n    <link rel="canonical"',
        updated,
        count=1,
        flags=re.IGNORECASE,
    )
    updated = re.sub(
        r'(?m)^<link\s+rel="canonical"',
        '    <link rel="canonical"',
        updated,
        count=1,
        flags=re.IGNORECASE,
    )
    return updated


def ensure_open_graph(content: str, title: str, description: str, canonical: str) -> str:
    if 'property="og:title"' in content:
        return content
    og_block = (
        "    <!-- Open Graph Meta Tags -->\n"
        "    <meta property=\"og:type\" content=\"website\" />\n"
        f"    <meta property=\"og:title\" content=\"{title}\" />\n"
        f"    <meta property=\"og:description\" content=\"{description}\" />\n"
        f"    <meta property=\"og:image\" content=\"{DEFAULT_OG_IMAGE}\" />\n"
        f"    <meta property=\"og:url\" content=\"{canonical}\" />\n"
        "    <meta property=\"og:site_name\" content=\"마사지천국\" />\n"
        "    <meta property=\"og:locale\" content=\"ko_KR\" />\n"
    )

    return insert_before_closing_head(content, og_block)


def ensure_twitter_card(content: str, title: str, description: str) -> str:
    if 'name="twitter:card"' in content:
        return content
    twitter_block = (
        "    <!-- Twitter Card Meta Tags -->\n"
        "    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n"
        f"    <meta name=\"twitter:title\" content=\"{title}\" />\n"
        f"    <meta name=\"twitter:description\" content=\"{description}\" />\n"
        f"    <meta name=\"twitter:image\" content=\"{DEFAULT_OG_IMAGE}\" />\n"
    )

    return insert_before_closing_head(content, twitter_block)


def insert_before_closing_head(content: str, block: str) -> str:
    head_close = content.find("</head>")
    block = block.rstrip() + "\n"
    if head_close == -1:
        return content.rstrip() + "\n" + block

    before = content[:head_close]
    after = content[head_close:]

    if not before.endswith("\n"):
        block = "\n" + block

    return before + block + after


def process_file(file_path: Path) -> bool:
    original = file_path.read_text(encoding="utf-8")
    modified = original

    canonical = canonical_url(file_path)
    title = extract_title(original)
    description = extract_description(original)

    modified = ensure_canonical(modified, canonical)
    modified = ensure_open_graph(modified, title, description, canonical)
    modified = ensure_twitter_card(modified, title, description)

    if modified != original:
        file_path.write_text(modified, encoding="utf-8")
        print(f"[UPDATED] {file_path.name}")
        return True

    print(f"[SKIP] {file_path.name}")
    return False


def main() -> None:
    if not HTML_DIR.exists():
        raise FileNotFoundError("public directory not found")

    html_files = sorted(HTML_DIR.glob("*.html"))
    updated_count = sum(process_file(path) for path in html_files)
    print(f"\nDone. Updated {updated_count} files out of {len(html_files)}.")


if __name__ == "__main__":
    main()
