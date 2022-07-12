function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            // link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


// const get_Data = new Promise((resolve, reject) => {
//     fetch("http://localhost:3000/api/tutorials/getOne").then(
//       (data) => {
//         resolve(data.json());
//       }
//     );
//   });

function test(){
    fetch("http://www.fawvietnam.xyz:3000/api/tutorials/getalldata").then(
        (data) => {
        return data.json();
        }
      )
      .then(data=> {
        console.log(data);
        download(data);
      });
}


  function download(data){
    var headers = {
        id: 'id', // remove commas to avoid errors
        name_gate: "name_gate",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        tem: "tem",
        pressusre: "pressusre",
        co2 : "co2",
        nh3 : "nh3",
        ch4 : "ch4",
        no2 : "no2",
        humidity: "humidity"
    };
    var itemsFormatted = [];

    // console.log(data[0]);
    // format the data
    data.forEach((item) => {
        itemsFormatted.push({
            id: item.id, // remove commas to avoid errors,
            name_gate: item.name_gate,
            month: item.data.time.mm,
            day: item.data.time.dd,
            hour: item.data.time.h,
            minute: item.data.time.m,
            tem: item.data.tem,
            pressusre: item.data.pressusre,
            co2 : item.data.co2,
            nh3 : item.data.nh3,
            ch4 : item.data.ch4,
            no2 : item.data.no2,
            humidity: item.data.humidity
           
        });
    });

    var fileTitle = 'data'; // or 'my-unique-title'

    exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}

