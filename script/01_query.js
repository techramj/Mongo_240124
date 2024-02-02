db.emp.insertMany([
    {name: 'Elizabeth6', salary:6000},
    {name: 'Elizabeth7', salary:7000},
    {name: 'Elizabeth8', salary:8000},
    {name: 'Elizabeth9', salary:9000},
    {name: 'Elizabeth10', salary:10000},
    {name: 'Elizabeth11', salary:11000},
    {name: 'Elizabeth12', salary:12000},
    {name: 'Elizabeth13', salary:13000},
    {name: 'Elizabeth14', salary:14000},
    {name: 'Elizabeth15', salary:15000},
    {name: 'Elizabeth16', salary:16000},
    {name: 'Elizabeth17', salary:17000},
    {name: 'Elizabeth18', salary:18000},
    {name: 'Elizabeth19', salary:19000},
    {name: 'Elizabeth20', salary:20000},
    {name: 'Elizabeth21', salary:22000},
]);

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