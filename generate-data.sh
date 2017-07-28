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


echo "# App Statistics" > STATS.md

echo "" >> STATS.md

echo "Total number of apps: `ls $APPS/* | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "Cloudant: `ls $APPS/$CLOUDANT | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "DashDB: `ls $APPS/$DASHDB | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "DB2: `ls $APPS/$DB2 | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "MSSQL: `ls $APPS/$MSSQL | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "MySQL: `ls $APPS/$MYSQL | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "Postgresql: `ls $APPS/$POSTGRESQL | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "MongoDB: `ls $APPS/$MONGODB | wc -l`" >> STATS.md

echo "" >> STATS.md

echo "Juggler: `ls $APPS/$JUGGLER | wc -l`" >> STATS.md

echo "" >> STATS.md