var m1 = 90,m2=90,m3=80,m4=90,m5=60,total,avg,grade
total = m1+m2+m3+m4
avg = total/5
grade = avg>=90 & avg<100?"A":avg>=80 & avg<90?"B":avg>=70 & avg<80?"C":"failed";
console.log(`average is ${avg} and grade is ${grade}`);
