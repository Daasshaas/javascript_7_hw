const numbers = [5, 6, 7];
numbers[1] = 10;
console.log(numbers);

const string = ['Apple', 'Banana', 'Orange'];
string[3] = 'Kiwi';
console.log(string);

const prices = [10, 20, 30, 5];
const sum = prices[0];
for (const i = 0; i < prices[i].length; i += 1){
    sum += prices[i];}
console.log(sum);

const numbers2 = [1, 2, 3, 4, 5];
for (const i = 0; i < numbers2[i].length; i += 1);   
console.log(numbers2);

const food = [
    'Borshc',
    'Pasta', 
    'Cola', 
    'Jam', 
    'Meat',
];
for (const i = 0; i < food.length; i+= 1) {
if (food[i].length > 5){
    console.log(food[i]);
    }
}

const list = [50, 8, 36, 1, 9, 78, 42, 16, 22];
const maxNumberList = list[0];
for (let i = 1; i < list.length; i++) {
    if (list[i] > maxNumberList) {
      maxNumberList = list[i];
    }
  }
console.log(maxNumberList);

    
