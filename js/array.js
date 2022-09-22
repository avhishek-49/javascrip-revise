// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const awesome  = fruits.toString();

// console.log(awesome);




// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const awesome  = fruits.reverse()

// console.log(awesome);

// const here = Math.random();
// console.log(here);


const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  
  
  console.log(points);

