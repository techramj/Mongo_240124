# Assignment 01:
    create database hr
    create collection emp
    check the list of collections

# Assignment 02: 
    insert 21 rows in collection emp
    5 rows using insertOne
    display the collection
    16 rows using InsertMany
    display the collection

# Assignment 03
    drop the collection emp
    again create the collection with using db.createCollection() command
    insert 3 documents(rows).

# Assignment 04
    find the inventory with name != ij


# Assignment 05
   create 6 script, 2 each for mapping
   one_to_one.js
   one_to_one_embedded.js

   one_to_many.js
   one_to_many_embedded.js

   many_to_many.js
   many_to_many_embedded.js

# Assignment 06 : choose the correct option

## Which of the following is not a data type supported by MongoDB?
	Code
	ID
	Date
	String
	Object


## MongoDB Queries can return specific fields of documents which also include user-defined __________ functions.
	Javascript
	c
	c++
	All of the mentioned


## ____________ are operations that process data records and return computed results.
	ReplicaAgg
	SumCalculation
	Aggregations
	None of the above


## The most basic pipeline stages provide __________ that operate like queries.
	methods
	filters
	stored procedure
	none of the above


## MongoDB stores the documents in what are called _____________
	tables
	collections
	rows
	all of above


## MongoDB indexes use a ___ data structure.
	Hash
	Map
	B-tree
	all of above


## MongoDB also supports user-defined indexes on multiple fields called ___________
	compound
	composite
	candidate
	none of the above

## A _________ key is either an indexed field or an indexed compound field that exists in every document in the collection.
	cluster
	shard
	partition


## Which of the following does not come under the basic shell operations on MongoDB?
	update
	create
	delete
	write

## In mongodb row is called 
	document
	collection
	tuple
	shard



# Assignment 07: write a query for below collection
    db.emp.insertMany([
        {_id:1, name:'Jack', age:23, salary:2000},
        {_id:2, name:'John', salary:5000},
        {_id:3, name:'Sam', age:45, salary:9000},
        {_id:4, name:'Payal', age:20, salary:7000},
        {_id:5, name:'Priya', age:23, salary:2000},
        {_id:6, name:'Priayank', age:33, salary:'1000'},
    ]);

## WAQ to find the documents with age<30 and salary>3000

## WAQ to fetch 3 record

## WAQ to fetch 4,5,6, record

## WAQ to fetch the record or document which doesn't  contain age field

## WAQ to fetch the record having salary type as string

## WAQ to fetch the record having salary 4000, 1000, 6000

## project only name and salary 