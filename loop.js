
car = ['Lambhorghini','Ferrari','BMW','Audi','Bugati','Tata','Mahindra'];


// for (let i=0;i<car.length;i++){
//     console.log("I Love: "+car[i]);
// }

// let i=0
// for (;i<car.length;i++){
//         console.log("I Love: "+car[i]);
//     }
    

// for (let i=0,size = car.length;i<size;i++){
//         console.log("I Love: "+car[i]);
//     }    

person = ['Deepak','Prachi','Neha','Rajashree','Arpita','Ria','Nisha']

// in operator will return the index value
for (let i in car){  
    // console.log(person[i]+" Likes "+car[i]);
    console.log(`${person[i]} Likes ${car[i]}`);
}    
console.log('\n');

// of operator will return the value of iterator
for (let i of car){  
    console.log(`I Love ${i}`);
}    
console.log('\n');


person.forEach((value,index,array) => {
    // console.log(index,value,array);      //value = value of container, index=  index of value, array = container itself
    console.log(index,value);
});
console.log('\n');

var i = 0;
while(i<10){
    
    i++;  
    if (i===5){
        continue
    }
    console.log(i);
    
}

console.log('\n');
let x = 1;
do{
    // do while loop execute atleast once
    if (x==5){
        break;
    }
    console.log(x);
    x++;
}while(x<10)
