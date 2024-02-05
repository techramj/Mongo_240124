# Aggregation

## match
    db.person.aggregate([
        {$match: {gender:'Male'}}
    ]);


## match => sort by id

    db.person.aggregate([
        {$match: {gender:'Male'}},
        {$sort: {_id:1}} 
    ]);


##  match => sort by id => project (id,name = inital + first + last seperated by space)
    db.person.aggregate([
        { $match: { gender: 'Male' } },
        { $sort: { _id: 1 } }, //1 for ascending  and  -1 for desending
        {
            $project: {
                fullname: { $concat: ['$name.intial', ' ', '$name.firstName', ' ', '$name.lastName'] },
                location: 1,
                age: 1,
                gender: 1
            }
        }
    ]);


##  match => sort by id => project (id,name = inital + first + last seperated by space)


##  match => sort by id => project (id,name = inital + first + last seperated by space) => group by city
db.person.aggregate([
    { $match: { gender: 'Male' } },
    { $sort: { _id: 1 } },
    {
        $project: {
            fullname: { $concat: ['$name.intial', ' ', '$name.firstName', ' ', '$name.lastName'] },
            location: 1,
            age: 1,
            gender: 1
        }
    },
    {$group: {
        _id:{city:'$location.city'},
        totalPerson: {$sum:1}
    }}
]);



## $lookup 
    is equilvalent to left outer Join
    syntax:
    ---------
    db.collection.aggregate([
        {
            $lookup:{
                from: 'foreign collection',
                localField: 'localFiled',
                foreignField:'foreignField',
                as :'outputArray'
            }
        }
    ]);
			

db.emp.drop();
db.dept.insertMany([
    {dept_id:10, dname:'HR'},
    {dept_id:20, dname:'IT'},
    {dept_id:30, dname:'Account'},
]);

db.emp.insertMany([
    {_id:1, name:'Jack',did:10},
    {_id:2, name:'John',did:10},
    {_id:3, name:'Jessica',did:20},
    {_id:4, name:'Sam'}
]);


db.emp.aggregate([
    {
        $lookup:{
            from: 'dept',
            localField: 'did',
            foreignField:'dept_id',
            as :'department'
        }
    }
]);


db.dept.aggregate([
    {
        $lookup:{
            from: 'emp',
            localField: 'dept_id',
            foreignField:'did',
            as :'employees'
        }
    }
]);




## join
    
### Inner Join


## Outer Join
    left outer join
      inner join + all the column of left table
    right outer join
        inner join + all the column of right table
    full outer join
        inner join + all the column of both the table

## equi  vs non equi

## self join

## natural join
