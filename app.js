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


  
let api = axios('http://fakestoreapi.com/products')

//Methods:
  .then((res) => {
    let items = res.data;
    console.log(items);
    items.map((item) => {
    function display() {
      div.innerHTML += ` 
      <div id="card-container" class="card" style="width: 18rem;">
      <img src="${item.image}" class="card-img-top" alt="image">
      <div class="card-body">
        <h5 class="card-title">ID: ${item.id}</h5>
        <h5 class="card-title">CATEGORY: ${item.category}</h5>
        <h6 class="card-title">TITLE: ${item.title}</h6>
        <h6 class="card-text">RATE: ${item.rating.rate} COUNT: ${item.rating.count}</h6>
        <h6 class="card-text">PRICE: ${item.price}$</h6>
        <a id="card-btn" href="#" class="btn">Add to Cart</a>
      </div>
    </div>
        `};
        display();
    });
  })
  .catch((err) => {
    console.log(err);
  });



let filtereditems = (btn) =>{
console.log(btn);
div.innerHTML = " ";
let filtered  = items.filter((item) =>{
  return item.category === btn.innerHTML;
}).map((item) =>{
display();
})
}