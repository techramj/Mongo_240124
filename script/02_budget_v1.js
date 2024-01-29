db.createCollection('budgets');
db.budgets.insertMany([
    {_id:1, category:'food', budget:400, spent:450},
    {_id:2, category:'drinks', budget:200, spent:800},
    {_id:3, category:'movie', budget:200, spent:100},
    {_id:4, category:'medicine', budget:500, spent:200},
    {_id:5, category:'education', budget:400, spent:400},
    {_id:6, category:'misc', budget:200, spent:200},
]);