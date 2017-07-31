#!bin/bash

APPS="apps"

CLOUDANT="cloudant"
DASHDB="dashdb"
DB2="db2"

MSSQL="mssql"
MYSQL="mysql"
POSTGRESQL="postgresql"
MONGODB="mongodb"
JUGGLER="juggler"

echo "" >> README.md

echo "# App Statistics" >> README.md

echo "" >> README.md

echo "Total number of apps: `ls $APPS/* | wc -l`" >> README.md

echo "" >> README.md

echo "Cloudant: `ls $APPS/$CLOUDANT | wc -l`" >> README.md

echo "" >> README.md

echo "DashDB: `ls $APPS/$DASHDB | wc -l`" >> README.md

echo "" >> README.md

echo "DB2: `ls $APPS/$DB2 | wc -l`" >> README.md

echo "" >> README.md

echo "MSSQL: `ls $APPS/$MSSQL | wc -l`" >> README.md

echo "" >> README.md

echo "MySQL: `ls $APPS/$MYSQL | wc -l`" >> README.md

echo "" >> README.md

echo "Postgresql: `ls $APPS/$POSTGRESQL | wc -l`" >> README.md

echo "" >> README.md

echo "MongoDB: `ls $APPS/$MONGODB | wc -l`" >> README.md

echo "" >> README.md

echo "Juggler: `ls $APPS/$JUGGLER | wc -l`" >> README.md

echo "" >> README.md