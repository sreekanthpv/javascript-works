var arr1=[1,2,3,4]
var element=2,flag=0

for(let i of arr1){
       if(i==element){
            flag++;
            break

       }


}
console.log(flag==0?"not found":"found")