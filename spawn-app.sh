#!bin/bash

TEMPLATES="templates"
APPS="apps"
REPO=$1
ISSUE=$2

mkdir $APPS/$REPO/$REPO-$ISSUE

echo "Copying template over to make app: $REPO-$ISSUE ..." 

cp -r $TEMPLATES/$REPO-template/* $APPS/$REPO/$REPO-$ISSUE

if [[ "$REPO" == *"juggler"* ]]; then
	echo "Issue: https://github.com/strongloop/loopback-datasource-$REPO/issues/$ISSUE" > $APPS/$REPO/$REPO-$ISSUE/README.md
else
	echo "Issue: https://github.com/strongloop/loopback-connector-$REPO/issues/$ISSUE" > $APPS/$REPO/$REPO-$ISSUE/README.md
fi

echo "Copied app over to: $APPS/$REPO/$REPO-$ISSUE"
