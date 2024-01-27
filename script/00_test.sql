desc emp;
select * from emp;
insert into emp values (3,'Jessica', 3000);
commit;
select * from emp;

update emp set salary = salary + 500;
commit;
select * from emp;

-- to execut the script
-- @ <absoulte_path>/file_name


db.inventory.insertMany([
    {_id:1, item:{name:'ab', code:'123'},qty:10, tags:['A','B','C']},
    {_id:2, item:{name:'cd', code:'123'},qty:11, tags:['D','E','F']},
    {_id:3, item:{name:'ef', code:'456'},qty:10, tags:['A','X','Y']},
    {_id:4, item:{name:'gh', code:'456'},qty:12, tags:['X','B','Z']},
    {_id:5, item:{name:'ij', code:'444'},qty:9, tags:['A','P','Q']},
    {_id:6, item:{name:'ij', code:'555'},qty:13, tags:['A']},
    {_id:7, item:{name:'ab', code:'666'},qty:14, tags:[['A','B'],'D']},
    {_id:8, item:{name:'xy', code:'777'},qty:8, tags:['A','B']},
]);