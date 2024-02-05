db.person.insertMany([
    {_id:4, 
        name:{firstName:'Jack', lastName:'Johnson', intial:'Mr'},
        location :{ city:'Pune', state:'MH', country:'India'},
        age:25,
        gender: 'Male'
    },
    {_id:2, 
        name:{firstName:'Adam', lastName:'Donald', intial:'Mr'},
        location :{ city:'Moscow', state:'Moscow', country:'Russia'},
        age:29,
        gender:'Male'
    },
    {_id:1, 
        name:{firstName:'Anuja', lastName:'Chavan', intial:'Mr'},
        location :{ city:'Mumbai', state:'MH', country:'India'},
        age:27, gender:'Female'
    },
    {_id:3, 
        name:{firstName:'Sameer', lastName:'Kanitkar', intial:'Mr'},
        location :{ city:'Nagpur', state:'MH', country:'India'},
        age:27, gender:'Male'
    }
]);


db.person.insertMany([
    {_id:5, 
        name:{firstName:'John', lastName:'Johnson', intial:'Mr'},
        location :{ city:'Pune', state:'MH', country:'India'},
        age:25,
        gender: 'Male'
    },
    {_id:6, 
        name:{firstName:'Adil', lastName:'Donald', intial:'Mr'},
        location :{ city:'Moscow', state:'Moscow', country:'Russia'},
        age:29,
        gender:'Male'
    },
    {_id:7, 
        name:{firstName:'Jessica', lastName:'Chavan', intial:'Mr'},
        location :{ city:'Mumbai', state:'MH', country:'India'},
        age:27, gender:'Female'
    },
    {_id:8, 
        name:{firstName:'Raj', lastName:'Kanitkar', intial:'Mr'},
        location :{ city:'Nagpur', state:'MH', country:'India'},
        age:27, gender:'Male'
    }
]);