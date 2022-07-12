// setTimeout()
const get_Data_pf = new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/tutorials/getnewmess").then(
      (data) => {
        resolve(data.json());
      }
    );
  });

  get_Data_pf.then((data) => {

    console.log(data[0]["data"]);
    document.getElementById("co2_value").innerHTML = data[0]["data"]["co2"];
    document.getElementById("nh3_value").innerHTML = data[0]["data"]["nh3"];
    document.getElementById("ch4_value").innerHTML = data[0]["data"]["ch4"];
    document.getElementById("no2_value").innerHTML = data[0]["data"]["no2"];
    var co2 =  document.getElementById("co2");
    var nh3 =  document.getElementById("nh3");
    var ch4 =  document.getElementById("ch4");
    var no2 =  document.getElementById("no2");
    
    if( parseInt(data[0]["data"]["co2"]) >= 1000){
      console.log("co2");
      co2.style.backgroundColor = "var(--cui-info, #f6960b)";
      co2.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #f0dc2a) 0%, var(--cui-warning-stop, #f38e01 100%))";
    }

    if( parseInt(data[0]["data"]["co2"]) < 1000 && parseInt(data[0]["data"]["co2"]) >= 0){
      console.log("co2");
      co2.style.backgroundColor = "var(--cui-info, #17a2b8)";
      co2.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #17a2b8) 0%, var(--cui-warning-stop, #17a2b8 100%))";
    }
    
    if( parseInt(data[0]["data"]["nh3"]) >= 700){
      console.log("nh3");
      nh3.style.backgroundColor = "var(--cui-info, #f6960b)";
      nh3.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #f0dc2a) 0%, var(--cui-warning-stop, #f38e01 100%))";
    }

    if( parseInt(data[0]["data"]["nh3"]) < 700 && parseInt(data[0]["data"]["co2"]) >= 0){
      console.log("nh3");
      nh3.style.backgroundColor = "var(--cui-info, #17a2b8)";
      nh3.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #17a2b8) 0%, var(--cui-warning-stop, #17a2b8 100%))";
    }
    

    if( parseInt(data[0]["data"]["ch4"]) >= 700){
      console.log("ch4");
      ch4.style.backgroundColor = "var(--cui-info, #f6960b)";
      ch4.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #f0dc2a) 0%, var(--cui-warning-stop, #f38e01 100%))";
    }

    if( parseInt(data[0]["data"]["ch4"]) < 700 && parseInt(data[0]["data"]["co2"]) >= 0){
      console.log("ch4");
      ch4.style.backgroundColor = "var(--cui-info, #17a2b8)";
      ch4.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #17a2b8) 0%, var(--cui-warning-stop, #17a2b8 100%))";
    }
    

    if( parseInt(data[0]["data"]["no2"]) >= 700){
      console.log("no2");
      no2.style.backgroundColor = "var(--cui-info, #f6960b)";
      no2.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #f0dc2a) 0%, var(--cui-warning-stop, #f38e01 100%))";
    }

    if( parseInt(data[0]["data"]["no2"]) < 700 && parseInt(data[0]["data"]["co2"]) >= 0){
      console.log("no2");
      no2.style.backgroundColor = "var(--cui-info, #17a2b8)";
      no2.style.backgroundImage =  "linear-gradient(45deg, var(--cui-warning-start, #17a2b8) 0%, var(--cui-warning-stop, #17a2b8 100%))";
    }
    
  
    
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
