let getData = new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:5000/getPestFarm1").then(
      (data) => {
        resolve(data.json());
      }
    );
  });
  getData.then((data) => {
    console.log(data["data"]["tempc"]);
    document.getElementById("Temperature").innerHTML = data["data"]["tempc"];
    document.getElementById("Humidity").innerHTML = data["data"]["humidity"];
    document.getElementById("Windspeed").innerHTML = data["data"]["windspeed"];
    document.getElementById("Pest").innerHTML = data["data"]["pest"];
  });