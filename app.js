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
axios("https://jsonplaceholder.typicode.com/users")
//Methods:
  .then((res) => {
    console.log(res.data);
    res.data.map((items) => {
      div.innerHTML += ` 
        <div id ="card-container" class="card mt-4 p-2" style="width: 18rem;">
          <div class="card-body">
          <h4 class="card-title">Name: ${items.name}</h4>
            <h5 class="card-title">Id: ${items.id}</h5>
            <h5 class="card-text">Username: ${items.username}</h5>
            <h6 class="card-text">Phone: ${items.phone}</h6>
            <h6 class="card-text">Company: ${items.company.name} <br/>  ${items.company.catchPhrase} <br/>  ${items.company.bs}</h6>
            <p class="card-subtitle mb-2 text-body-secondary"><br/>Address: ${items.address.city} <br/> ${items.address.street}<br/>${items.address.suite}<br/>${items.address.zipcode} <br/> ${items.address.geo.lng} </p>
            <a href="#" class="card-link"> ${items.email} <br/></a>
            <a href="#" class="card-link">${items.website}</a>
          </div>
        </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });
