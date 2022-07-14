var numbers = [6,1,2,3,4,6,9,9,6,4,2,3,6,5];

console.log('array of numbers',numbers);

number_set = new Set(numbers);

console.log('set of numbers',number_set);

//adding value to set
number_set.add(8);
console.log('set of numbers',number_set);
console.log('\n');
for (i of number_set){
    console.log(i);
}
console.log('\n');

const fruits = new Map([['Apple',10],['Grapes',15],['Mango',50],['Banana',20]])

fruits.forEach((value,index)=>{
    console.log(index,value);
})
fruits.set("oranges", 200);

console.log(fruits.get("oranges"));
console.log(fruits.size);
console.log(fruits.delete("Apple"));
console.log(fruits.has("Apple"));