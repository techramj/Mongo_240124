# one to one mapping
    employee - > address
    db.emp.insertOne({_id:1, name:'Jack', salary:2000});
    db.address.insertOne({_id:1, street:'Lane no 111', city:'Pune', pincode:123435});

    or

    db.emp.insertOne({_id:1, name:'Jack', salary:2000,
                    address: {treet:'Lane no 111', city:'Pune', pincode:123435}});

    note: when we have strong one to one relationship , then embedded document is the better option

# one to many/many to one mapping
  question -> Answers
  city -> citizen


    db.questions.insertOne({creator:'Priya', question:'Advantage of MongoDB', code:'q1'});
    db.answers.insertMany([
        {_id:'Q1A1', text:'Flexible dynamic schema'},
        {_id:'Q1A2', text:'Horizontal scalable'},
    ]);
    db.questions.updateOne({code:'q1'}, {$set:{answers: ['Q1A1', 'Q1A1']}});

 
    db.questions.deleteMany();
    db.answers.deleteMany({});

    or
    --
    db.questions.insertOne({creator:'Priya', question:'Advantage of MongoDB', code:'q1',
                              answers:[{text:'Flexible dynamic schema'},{text:'Horizontal scalable'}]});

    note: later one is better(i.e embedded one)

 
   City = > Citizen
   db.citizens.addMany[
        {_id:10001, name:'Jack',age:22,city:'Pune', cordinates:{lat:10, long:45}},
        {_id:10002, name:'Pranav',age:23,city:'Pune', cordinates:{lat:10, long:45}},
        {_id:10003, name:'Payal',age:22,city:'Pune', cordinates:{lat:10, long:45}},
        {_id:10004, name:'Priya',age:20,city:'Pune', cordinates:{lat:10, long:45}},
        {_id:10005, name:'Priayank',age:24,city:'Pune', cordinates:{lat:10, long:45}}
    ];

    db.cities.insertOne({name:'pune', citizens:[10001,10002,20003,10004,10005]});

    or
    --
    db.cities.insertOne({name:'pune', 
    citizens:[{_id:10001, name:'Jack',age:22,city:'Pune', cordinates:{lat:10, long:45}},
    {_id:10002, name:'Pranav',age:23,city:'Pune', cordinates:{lat:10, long:45}},
    {_id:10003, name:'Payal',age:22,city:'Pune', cordinates:{lat:10, long:45}},
    {_id:10004, name:'Priya',age:20,city:'Pune', cordinates:{lat:10, long:45}},
    {_id:10005, name:'Priayank',age:24,city:'Pune', cordinates:{lat:10, long:45}}]
    });


# many to many mapping

    order -> product
    In an order, we can purchase many prodcut,
    one prodcut can be ordered by many customer

    pranav => pen, pencil, notebook -> order no 1
    payal => notebook -> order no 2

    rdbms:
    product
    product_id   item  price
    100          pen    30
    101          Pencil 10
    102          Notebook 100

    customer
    cust_id   name     age   
    c0001     Pranav    22
    C0002     Payal     21
    C0003     Priya     20

    order
    order_id customer_id product_id qty
    1        c0001        100       5  20*5 =100
    1        c0001        101       15   150
    1        c0001        102       2    200
    2        C0002        102      5     500

    db.products.insertMany([
        {_id:100, item:'Pen', price:20},
        {_id:101, item:'Pencil', price:10},
        {_id:102, item:'Notebook', price:100},
        ]);

    db.customers.insertMany([
       {_id:'C0001',name:'Pranva',age:22}, 
       {_id:'C0002',name:'Payal',age:20}, 
       {_id:'C0003',name:'Priya',age:20}, 
    ]);

    db.orders.insertOne({order_id:1, customer_id:'C0001', product_id:100, qty:5}); //not good approach
   
    or

    db.orders.insertOne({order_id:1, customer_id:'C0001', 
         products:[{ item:'Pen', price:20, qty:5}, { item:'Pencil', price:10, qty:15}, { item:'Notebook', price:100, qty:2}], 
         qty:5});
