employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001, "ravi", 22500, "hr", 1989, 2005],
    [1002, "akhil", 55500, "developer", 2000, 2010],
    [1003, "nikhil", 16500, "developer", 2010, 2017],
    [1004, "ajesh", 15000, "mrkt", 1990, 2010],
    [1005, "tom", 16999, "ba", 1992, 2015],
    [1006, "jack", 13000, "ba", 2001, 2010],

]

// #names
// for(let i of employees){
//     console.log(i[1])   
// }


// developer deatils
// for(let detail of employees){
//     if(detail[3]=="developer"){
//         console.log(detail)
//     }
// }






//find highest salary
var salary=[]
for(let detail of employees){
    // console.log(detail[2])
    salary.push(detail[2])
}

var high=Math.max(...salary)
var low=Math.min(...salary)


// employee with high salary
for(let i of employees){
   if(high==i[2]){
       console.log("employee with high sal is :",i);
   }
}

// employee with low salary
for(let i of employees){
    if(low==i[2]){
        console.log("employee with low sal is :",i);
    }
}