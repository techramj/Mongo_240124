db.emp.insertMany([
    {_id:1, name:100,salary:2000,did:10}, //error
    {_id:2, name:'John'},
    {_id:3, name:'Jessica',salary:8000,did:20},
    {_id:4, name:'Sam',salary:9000}
]);

db.createCollection('emp',{
    validator:{
        $jsonSchema :{
            bsonType:"object",
            required: ['name','salary','age'],
            properties: {
                name:{
                    bsonType:'string',
                    description:'required and must be string'
                },
                salary:{
                    bsonType:'number',
                    description:'required and must be number'
                },
                age:{
                    bsonType:'number',
                    description:'required and must be number'
                }
            }
        }
    }
});