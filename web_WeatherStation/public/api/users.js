let getData = new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/tutorials/getallusers").then(
      (data) => {
        resolve(data.json());
      }
    );
  });
  getData.then((data) => {
      console.log(data);
    if (data.length > 0) {

        var temp = "";
        data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.phone + "</td>";
            temp += "<td>" + itemData.permission + "</td>";
            temp += "<td>" + itemData.password + "</td>";
            temp += "<td class='text-end'>"
            temp += "<a href='' class='btn btn-outline-info btn-rounded'><i class='fas fa-pen'></i></a>"
            temp +=  "<a href='' class='btn btn-outline-danger btn-rounded'><i class='fas fa-trash'></i></a>"
            temp +=  " </td>"
            temp+= "</tr>";
        });
        document.getElementById('data_users').innerHTML = temp;
      }
  });
