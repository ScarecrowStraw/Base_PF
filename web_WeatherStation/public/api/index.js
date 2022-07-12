const get_Data = new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/tutorials/getnewmess").then(
      (data) => {
        resolve(data.json());
      }
    );
  });
  get_Data.then((data) => {
    // console.log(data[0]["data"]);
    document.getElementById("humidity_value").innerHTML = data[0]["data"]["humidity"];
    document.getElementById("tem_value").innerHTML = data[0]["data"]["tem"];
    document.getElementById("pests_value").innerHTML = 0;
  });


  // var data
// fetch('http://127.0.0.1:5000/getAllUser')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(posts){
//         console.log(posts)
//         data = posts;
//     });
// console.log(data);

// async function getPestFarm1() {
//     var x = await fetch("http://127.0.0.1:5000/getPestFarm1").then(
//       (data) => {
//         return data.json();
//       }
//     );
//     var datatest = x;
//     return datatest;
//     // console.log(dataDemo);
//   }
// pest = getPestFarm1();
// console.log(pest);
