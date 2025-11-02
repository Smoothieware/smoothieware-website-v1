#!/usr/bin/env python3
"""
Script to collect 3D printing software screenshots from various sources.
For each software, we need minimum 5 high-quality interface screenshots.
"""

import requests
import os
from urllib.parse import urljoin, urlparse
import time

# List of software and their screenshot sources
SOFTWARE_SCREENSOTS = {
    "cura": [
        "https://github.com/Ultimaker/Cura/raw/main/resources/images/cura-icon.png",
        # Add more URLs as we find them
    ],
    "prusaslicer": [
        "https://cdn.shopify.com/s/files/1/1408/6478/files/PrusaSlicer-interface.png",
        # Add more URLs
    ],
    "slic3r": [
        # URLs to be found
    ],
    "mattercontrol": [
        # URLs to be found
    ],
    "repetier-host": [
        # URLs to be found
    ],
    "pronterface": [
        # URLs to be found
    ],
    "octoprint": [
        # URLs to be found
    ],
    "makergear": [
        # URLs to be found
    ],
    "ideamaker": [
        # URLs to be found
    ],
    "kiri-moto": [
        # URLs to be found
    ],
    "superslicer": [
        # URLs to be found
    ],
    "icesl": [
        # URLs to be found
    ],
    "flashprint": [
        # URLs to be found
    ],
    "z-suite": [
        # URLs to be found
    ],
    "3dprinteros": [
        # URLs to be found
    ]
}

def download_image(url, filename):
    """Download an image from URL to filename."""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()

        # Check if it's actually an image
        content_type = response.headers.get('content-type', '')
        if not content_type.startswith('image/'):
            print(f"Warning: {url} doesn't appear to be an image (content-type: {content_type})")
            return False

        with open(filename, 'wb') as f:
            f.write(response.content)

        # Check if file has content
        if os.path.getsize(filename) > 0:
            print(f"Downloaded: {filename} ({os.path.getsize(filename)} bytes)")
            return True
        else:
            print(f"Failed: {filename} is empty")
            return False

    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def main():
    """Main function to collect screenshots."""
    print("Starting 3D printing software screenshot collection...")

    created_files = []

    for software, urls in SOFTWARE_SCREENSOTS.items():
        print(f"\nCollecting screenshots for {software}...")

        for i, url in enumerate(urls, 1):
            if not url or url.strip() == "# URLs to be found":
                continue

            # Create filename
            ext = os.path.splitext(urlparse(url).path)[1]
            if not ext:
                ext = '.png'
            filename = f"{software}-{i}{ext}"

            if download_image(url, filename):
                created_files.append(filename)

            # Be respectful with requests
            time.sleep(1)

    print(f"\nSummary: Created {len(created_files)} screenshot files:")
    for f in sorted(created_files):
        size = os.path.getsize(f)
        print(f"  {f} ({size} bytes)")

if __name__ == "__main__":
    main()