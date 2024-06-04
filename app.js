// function Bakraeid(Rokra){
//  return new Promise((resolve , reject ) =>{
//     setTimeout(() => {
//         if (Rokra > 400000) {
//             console.log('Dada Cattle Se uthao');
//            resolve("ON SCENe :)");
//         }
//         else {
//             console.log('Dada KAtto Se uthao');
//             resolve('Off Scene :(');
//         }

// }, 1000)

//  })
// }

// Bakraeid(700000)
// .then((res) =>{
// console.log(res);
// })

// .catch((err) =>{
//     console.log(err);
//     })



const div = document.querySelector("#div");



// Using Asynchronous I call the fake API

function render() {
  

axios('http://fakestoreapi.com/products')

//Methods:
  .then((res) => {
    console.log(res.data);
    res.data.map((items) => {
      div.innerHTML += ` 
      <div id="card-container" class="card" style="width: 18rem;">
      <img src="${items.image}" class="card-img-top" alt="image">
      <div class="card-body">
        <h5 class="card-title">ID: ${items.id}</h5>
        <h5 class="card-title">CATEGORY: ${items.category}</h5>
        <h6 class="card-title">TITLE: ${items.title}</h6>
        <h6 class="card-text">RATE: ${items.rating.rate} COUNT: ${items.rating.count}</h6>
        <h6 class="card-text">Price: ${items.price}$</h6>
        <a id="card-btn" href="#" class="btn">Add to Cart</a>
      </div>
    </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });
}
render();


let filtereditems = (btn) =>{
console.log(btn);
div.innerHTML = "";
let filtered = 
}