# dummy data
    db.doc1.insertMany([
        {_id:1, item:{name:'ab',code: '123'}, qty:15,last_modified:''},
        {_id:2, item:{name:'cd',code: '456'}, qty:10,last_modified:''},
        {_id:3, item:{name:'ef',code: '111'}, qty:9,},
    ]);

    db.doc1.insertOne({_id:3, item:{name:'ef',code: '111'}, qty:9})

## $currentDate
    db.doc1.updateOne({_id:3}, {$currentDate:{last_modified:true}});
    //TODO: siginficant of boolean in currentDate


## $inc operator
    db.doc1.updateMany({}, {$inc:{qty:2}})

## $min 
    db.doc2.insertMany([
        {_id:1, high:800, low:150},
        {_id:2, high:500, low:120},
        {_id:3, high:850, low:200},
        {_id:4, high:60, low:160},
    ]);
    db.doc2.updateOne({_id:3}, {$min:{low:190}}); //data will updated
    db.doc2.updateOne({_id:3}, {$min:{low:210}}); //data will not be updated

## $mul
 db.doc2.updateMany({}, {$mul:{lowscore:2}})
    
## $rename (rename the column name)
    db.doc2.updateMany({}, {$rename:{'low':'lowscore'}})

## $set
  db.doc2.updateOne({_id:1}, {$set:{lowscore:400}});


## delete the document
    db.<collection_name>.deleteOne({filter});
    db.<collection_name>.deleteMany({filter});