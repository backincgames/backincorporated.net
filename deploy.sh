#!/bin/bash

# Check if VERCEL_GIT_COMMIT_REF is either "main", "canary", or "beta"
if [ "$VERCEL_GIT_COMMIT_REF" = "main" ] || [ "$VERCEL_GIT_COMMIT_REF" = "canary" ] || [ "$VERCEL_GIT_COMMIT_REF" = "beta" ]; then
  echo "Deployment started"
  exit 1
else
  echo "No deployment required"
  exit 0
fi
