db.items.insertMany([
    {_id:1, code:'xyz', 
    tags:['school','bag', 'headphone','pc'],
    qty: [
        {size:"S", num:10, color:'blue'},
        {size:"M", num:20, color:'red'},
        {size:"L", num:40, color:'yellow'},
    ]
    },

    {_id:2, code:'abc', 
    tags:['school','book'],
    qty: [
        {size:"S", num:100, color:'blue'},
        {size:"M", num:30, color:'red'},
        {size:"L", num:60, color:'yellow'},
    ]
    },

    {_id:3, code:'pqr', 
    tags:['school','bag', 'headphone'],
    qty: [
        {size:"S", num:10, color:'pink'},
        {size:"M", num:40, color:'orange'},
        {size:"L", num:100, color:'yellow'},
    ]
    },

    {_id:4, code:'lmn', 
    tags:['bag', 'book','pc'],
    qty: [
        {size:"S", num:40, color:'blue'},
        {size:"M", num:20, color:'red'},
        {size:"L", num:20, color:'yellow'},
    ]
    },

    {_id:5, code:'xyz', 
    tags:['book','bag', 'headphone','pc'],
    qty: [
        {size:"S", num:20, color:'blue'},
        {size:"M", num:100, color:'red'},
        {size:"L", num:40, color:'yellow'},
    ]
    },

]);