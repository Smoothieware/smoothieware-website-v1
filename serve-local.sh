#!/bin/bash

# Local development server for Smoothieware documentation
# This script uses Docker to run a Jekyll server that mimics GitHub Pages

echo "Starting local Smoothieware documentation server..."
echo "This will be available at: http://localhost:4000/docs/"
echo "Press Ctrl+C to stop the server"
echo ""

# Stop any existing containers on port 4000
docker ps -q | xargs -r docker stop 2>/dev/null

# Run Jekyll server using GitHub Pages compatible Docker image
docker run --rm \
  --volume="$PWD:/usr/src/app" \
  --publish 4000:4000 \
  starefossen/github-pages
