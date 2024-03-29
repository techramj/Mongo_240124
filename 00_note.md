# NoSQL (Not only SQL)


## SQL vs NoSql
### SQL
1. RDBMS => data stored in table which have rows and columns
2. db have fixed or static or predefined schema

     Emp
     id     name       salary

3. DB are best suited for complex queries and need transaction
4. verically scalable
5. Follow ACID property

        Atomicity
        Consistency
        Isolation
        Durability
### NoSql 
1. Non -relation or distributed database system
2. Dynamic Schema
3. DB are not good for complex queries and need transaction
4. Horizontally scalable
5. Follow Base property
    
        BA Basically Available
        Soft State
        Eventual consistency


## Type of NoSQL
### Key-value
        redis, riak

### Graph Database
        Neo4j, HyperGraph DB


### Document Oriented
        MongoDB, CouchDB


### Column Family
        Cassandra, Hbase


## MongoDB
        MongoDb is an open source, document-oriented db.
        Data is stroe in JSON-like documents with dynamic schemas.
         
         {"_id":1,
           "name":"Jack",
           "salalry": 5000,
           "dept" : {"did":10, 
                 "dname":"HR",
                 "city":"Pune"
                 }   
         }

         {"_id":2,
           "name":"Jackson",
           "salalry": 5000
         }

## Pointer
1. max size of document(row) = 16MB
2. 



#  Install MongoDB
## step 1: download mongodb msi installer
    https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.7-signed.msi

click to the installer
![pic1](./img/one.png)

click on the complete
![pic2](./img/two.png)

![pic3](./img/three.png)


![pic3](./img/04.png)


## Step no 2: set the path in system environment variable
1. Open cmd and execute mongod, first time user will get the error message as below

        'mongod' is not recognized as an internal or external command,
operable program or batch file.

2. set the path

        copy the path of mongodb/bin
        eg: C:\Program Files\MongoDB\Server\6.0\bin

![pic3](./img/05.png)

![pic3](./img/06.png)

click on the environment variable and set the path of bin folder in Path variable as in diagram.

![pic3](./img/07.png)

![pic3](./img/08.png)

![pic3](./img/09.png)


Apply the changes.
close the env window and cmd.


## step 3: download mongo shell
https://downloads.mongodb.com/compass/mongosh-2.1.1-win32-x64.zip

unzip the zip file and open the bin folder.

copy the mongosh.exe and paste in the bin folder of mongodb
eg: C:\Program Files\MongoDB\Server\6.0\bin

##  Component:
1. Atlas:
2. Mongo
3. MongoD
4. Compass


## start the DB

        execute command mongosh in cmd.

![pic3](./img/10.png)



        Note: mongosh is a shell script written in JS

## execute the script in CMD
        mongosh <database_name> absolute_path


## import json file
1. download json-tool

        https://www.mongodb.com/try/download/database-tools
        or
        https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.9.4.zip

2. extract the zip file and copy mongoimport tool to the bin folder of mongodb

3. execute the below command to import the json file

        cd <path of the json file>
        mongoimport <json-file name> -d <database name> -c <collection-name> --jsonArray
        mongoimport movie.json -d hr -c movie --jsonArray
