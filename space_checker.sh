#!/bin/bash

# Check for spaces in file and folder names inside public and src directories

# Define directories to check
directories_to_check="public src"

# Check files
files_with_spaces=$(find $directories_to_check -type f -name "* *")
if [ -n "$files_with_spaces" ]; then
  echo "Error: The following files contain spaces in their names:"
  echo "$files_with_spaces"
  exit 1
fi

# Check folders
folders_with_spaces=$(find $directories_to_check -type d -name "* *")
if [ -n "$folders_with_spaces" ]; then
  echo "Error: The following folders contain spaces in their names:"
  echo "$folders_with_spaces"
  exit 1
fi

echo "No spaces found in file and folder names inside public and src directories. You can proceed with pushing your changes."
exit 0