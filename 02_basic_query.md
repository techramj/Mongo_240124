## commands 
                SQL		        MongoDB	
                ----------------------------------
                Database		Database	
                Table		        Collection	
                Row		        Document	
                Column		        Field	


### display database list
        > show dbs

### create database
        > use <database_name>
        create and move inside the db
        or if db exists then move inside the db

### drop database
        > db.dropDatabase();

                seed> db.dropDatabase();
                { ok: 1, dropped: 'seed' }

### create collecton / table
        > db.createCollection(<collection_name>)
        eg: db.createCollection('student');

### display the list of collections
        > show collections

### display the content in the collection
        > db.<collection_name>.find();

### insert the row(s) in the collection
        >db.<collection_name>.insert({object}); //insert is deprecated
![pic3](./img/11.png)

        >db.<collection_name>.insertOne({object});
        db.<collection_name>.insertMany([{object1}, {object2}, {object3},...]);

        object mean key,value pair as we write in js

        eg: db.emp.insertOne({name:'Jackson', salary:5000});
        eg: db.emp.insertMany([{name:'Jessica',job:'HR'},{name:'San', age:22}]);

![pic3](./img/12.png)


## drop the collection
    db.<collection_name>.drop();


## project or selection
    db.<collection_name>.find({filter}, {projection});

### display id,item and qty (inventory collection)
    db.inventory.find({}, {item:1, qty:1});

## operator

### equal operator ($eq)
1. fetch the document with qty = 10

            db.inventory.find({qty:10});
            db.inventory.find({qty: {$eq:10}});



2.  waq to find the record with name = 'ij';

        db.inventory.find({'item.name': {$eq:'ij'}});


### $ne
    db.inventory.find({qty: {$ne:10}});
    db.inventory.find({qty: {$ne:10}}, {qty:1}); //select only _id and qty


### $gt (greater than operator)
    db.inventory.find({qty: {$gt:13}}, {qty:1});

### $gte (greater than equal operator)
    db.inventory.find({qty: {$gte:13}}, {qty:1});

### $lt (less than operator)
    db.inventory.find({qty: {$lt:10}}, {qty:1});

### $lte (less than equal operator)
    db.inventory.find({qty: {$lte:10}}, {qty:1});

### $in
    db.inventory.find({qty: {$in:[8,11,14]}}, {qty:1, item:1});

### $nin
    db.inventory.find({qty: {$nin:[8,11,14,10]}}, {qty:1, item:1});

## Logical Operator
### $and
    #fetch the record with qty =10 and tags with 'B'
    //db.inventory.find({qty: {$eq:10}});
    //db.inventory.find({tags: {$eq:'A'}});
    db.inventory.find({$and: [{qty:{$eq:10}}, {tags:{$eq:'B'}}]});


### $or
    #fetch the record with qty =10 or tags with 'X'
    db.inventory.find({$or: [{qty:{$eq:9}}, {tags:{$eq:'X'}}]});

### $not
    db.inventory.find({qty: {$not: {$gt:9}}})


## Element operator

### $exists (to check whether the field are present or not)
    db.emp.find({age: {$exists:false}});
    
## Evaluation


## Operator for Array
