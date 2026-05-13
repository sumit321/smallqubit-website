#!/bin/bash
# ─────────────────────────────────────────────
# Small Qubit Labs — One-click deploy script
# Usage: ./deploy.sh "your commit message"
# If no message given, uses a timestamp.
# ─────────────────────────────────────────────

set -e  # Stop on any error

# Colour output for readability
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No colour

echo -e "${BLUE}▸ Small Qubit Labs — deploying...${NC}"
echo ""

# Use provided commit message or generate a timestamp one
MESSAGE="${1:-"update: $(date '+%Y-%m-%d %H:%M')"}"

# Show what's changed
echo -e "${YELLOW}Changed files:${NC}"
git status --short
echo ""

# Stage everything
git add .

# Commit
git commit -m "$MESSAGE" || {
  echo -e "${YELLOW}Nothing to commit — already up to date.${NC}"
  exit 0
}

# Push
echo ""
echo -e "${BLUE}▸ Pushing to GitHub...${NC}"
git push

echo ""
echo -e "${GREEN}✓ Done. Vercel is building your site now.${NC}"
echo -e "${GREEN}  Live at: https://www.smallqubit.com${NC}"
echo -e "${GREEN}  Build log: https://vercel.com/dashboard${NC}"
