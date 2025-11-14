#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate sitemap.xml for all static HTML files under public/."""

from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path
import xml.etree.ElementTree as ET

BASE_URL = "https://msg1000.com"
PUBLIC_DIR = Path("public")
OUTPUT_FILE = PUBLIC_DIR / "sitemap.xml"


def build_url_entry(urlset: ET.Element, loc: str, lastmod: datetime, *, priority: float, changefreq: str) -> None:
    url = ET.SubElement(urlset, "url")
    ET.SubElement(url, "loc").text = loc
    ET.SubElement(url, "lastmod").text = lastmod.strftime("%Y-%m-%d")
    ET.SubElement(url, "changefreq").text = changefreq
    ET.SubElement(url, "priority").text = f"{priority:.1f}"


def compute_priority(filename: str) -> float:
    if filename == "index.html":
        return 1.0
    if "-" not in filename:
        return 0.9
    return 0.7


def canonical_url_for(path: Path) -> str:
    if path.name == "index.html":
        return BASE_URL
    return f"{BASE_URL}/{path.name}"


def iter_html_files() -> list[Path]:
    files = sorted(PUBLIC_DIR.glob("*.html"))
    files.sort(key=lambda path: (path.name != "index.html", path.name))
    return files


def generate_sitemap() -> ET.ElementTree:
    urlset = ET.Element("urlset", attrib={"xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"})

    for html_file in iter_html_files():
        stat = html_file.stat()
        last_modified = datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc)
        loc = canonical_url_for(html_file)
        priority = compute_priority(html_file.name)
        changefreq = "daily" if html_file.name == "index.html" else "weekly"
        build_url_entry(urlset, loc, last_modified, priority=priority, changefreq=changefreq)

    return ET.ElementTree(urlset)


def indent(element: ET.Element, level: int = 0) -> None:
    indent_str = "\n" + "  " * level
    if len(element):
        if not element.text or not element.text.strip():
            element.text = indent_str + "  "
        for child in element:
            indent(child, level + 1)
            if not child.tail or not child.tail.strip():
                child.tail = indent_str + "  "
        if not element[-1].tail or not element[-1].tail.strip():
            element[-1].tail = indent_str
    else:
        if level and (not element.tail or not element.tail.strip()):
            element.tail = indent_str


def write_sitemap(tree: ET.ElementTree) -> None:
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    indent(tree.getroot())
    tree.write(OUTPUT_FILE, encoding="utf-8", xml_declaration=True)


def main() -> None:
    if not PUBLIC_DIR.exists():
        raise FileNotFoundError("public directory not found")

    tree = generate_sitemap()
    write_sitemap(tree)
    print(f"Sitemap generated with {len(list(iter_html_files()))} entries at {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
