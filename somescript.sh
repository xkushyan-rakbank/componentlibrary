#!/bin/bash

# Define the new author name and email
NEW_AUTHOR_NAME="raja0sama"
NEW_AUTHOR_EMAIL="rajaosama.me@gmail.com"

# Start an interactive rebase for the last 4 commits
git rebase -i HEAD~4

# Loop through the last 4 commits and change the author name
for ((i=1; i<=4; i++)); do
    # Amend the commit with the new author name and email
    git commit --amend --author="$NEW_AUTHOR_NAME <$NEW_AUTHOR_EMAIL>" --no-edit

    # Continue the rebase process
    git rebase --continue
done

# Push the changes to the remote repository
git push --force
pick a810261 Adding jest support
pick db2748f Adding jest support
pick 41bc21d Husky Setup
pick 71aa9b0 Husky Setup