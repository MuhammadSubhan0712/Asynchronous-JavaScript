

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

const div = document.querySelector('#div');


axios('https://jsonplaceholder.typicode.com/users')
.then((res) =>{
    console.log(res.data);
    res.data.map((items) =>{
        div.innerHTML +=
        ` 
        <div id ="card-container" class="card mt-4 p-2" style="width: 18rem;">
          <div class="card-body">
          <h4 class="card-title">Name: ${items.name}</h4>
            <h5 class="card-title">Id: ${items.id}</h5>
            <h5 class="card-text">Username: ${items.username}</h5>
            <p class="card-text">Phone: ${items.phone}</p>
            <p class="card-text">Company: ${items.company.name}</p>
            <p class="card-subtitle mb-2 text-body-secondary">Address: ${items.address.street}</p>
            <a href="#" class="card-link"> ${items.email} <br/></a>
            <a href="#" class="card-link">${items.website}</a>
          </div>
        </div>
        `
    })
})
.catch((err) =>{ 
    console.log(err);
    })



