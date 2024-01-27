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

