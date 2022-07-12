let getData = new Promise((resolve, reject) => {
  fetch("http://www.fawvietnam.xyz:3000/api/tutorials/getalldata").then(
    (data) => {
      resolve(data.json());
    }
  );
});



getData.then((data) => {
  var time_begin_mining = 12 // thoi gian bat dau
  var time_fissih_mining = "6"

  var data_mining = data.filter(obj => obj.data.time.dd == "21"
    && (obj.data.time.h == String(time_begin_mining)
      || obj.data.time.h == String(time_begin_mining - 1)
      || obj.data.time.h == String(time_begin_mining - 2)
      || obj.data.time.h == String(time_begin_mining - 3)
      || obj.data.time.h == String(time_begin_mining - 4)
      || obj.data.time.h == String(time_begin_mining - 5)
      || obj.data.time.h == String(time_begin_mining - 6)
    ));
  // console.log(data_mining);

  var labels = data.map(function (e) {
    return e.id;
  });

  var value_hum = data_mining.map(function (e) {
    return e.data.humidity;
  });

  console.log(value_hum);
  var value_tem = data.map(function (e) {
    return e.data.tem;
  });;



  new Chart(document.getElementById("chart1"), {
    type: 'line',
    data: {
      // for(let i = 0; i < value.length; i++){

      // }
      labels: [time_begin_mining - 6,
      time_begin_mining - 5,
      time_begin_mining - 4,
      time_begin_mining - 3,
      time_begin_mining - 2,
      time_begin_mining - 1,
        time_begin_mining],
      datasets: [{
        data: value_hum,
        label: "hum",
        borderColor: "#3e95cd",
        fill: false
      },
      ]
    },
    options: {

      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'hour'
          }
        }],
        yAxes: [{

          scaleLabel: {
            display: true,
            labelString: 'humidity'
          }
        }]
      },
      title: {
        display: true,
        text: 'Humidity display chart hourly'
      }
    }
  });//

  // new Chart(document.getElementById("chart2"), {
  //   type: 'line',
  //   data: {
  //     labels: [4,5,6,7,8],
  //     datasets: [{
  //         data: value_pest,
  //         label: "pests",
  //         borderColor: "#0FC460",
  //         fill: false
  //       },humidity
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'hour'
  //         }
  //       }],
  //       yAxes: [{
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'pest'
  //         }
  //       }]
  //     },
  //     title: {
  //       display: true,
  //       text: 'Bieu do hien thi so sau theo gio'
  //     }
  //   }
  // });


  new Chart(document.getElementById("chart3"), {
    type: 'line',
    data: {
      labels: [time_begin_mining - 6,
      time_begin_mining - 5,
      time_begin_mining - 4,
      time_begin_mining - 3,
      time_begin_mining - 2,
      time_begin_mining - 1,
        time_begin_mining],
      datasets: [{
        data: value_tem,
        label: "tem",
        borderColor: "#DF1919",
        fill: false
      },
      ]
    },
    options: {

      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'hour'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'temperature'
          }
        }]
      },

      title: {
        display: true,
        text: 'Temperature display chart hourly'
      }
    }
  });//


});//




new Chart(document.getElementById("chart2"), {
  type: 'line',
  data: {
    labels: [4, 5, 6, 7, 8],
    datasets: [{
      data: [1, 0, 2, 2, 3, 3],
      label: "pests",
      borderColor: "#0FC460",
      fill: false
    },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bieu do hien thi so sau theo gio'
    }
  }
});






////////////////////////////////////////////////////////////////////////////
// var margin  = {top: 20, right: 20, bottom: 100, left: 60},
// width   = 600 - margin.left - margin.right,
// height  = 400 - margin.top - margin.bottom,
// x       = d3.scale.ordinal().rangeRoundBands([0,width], 0.5),
// y       = d3.scale.linear().range([height,0]);

// //draw axis
// var xAxis   = d3.svg.axis()
// .scale(x)
// .orient("bottom");
// var yAxis   = d3.svg.axis()
// .scale(y)
// .orient("left")
// .ticks(5)
// .innerTickSize(-width)
// .outerTickSize(0)
// .tickPadding(10);

// var svg1 = d3.select("#chart1")
// .append("svg")
// .attr("width", width + margin.left + margin.right)
// .attr("height", height + margin.top + margin.bottom)
// .append("g")
// .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.json("http://localhost:3000/api/tutorials", function (data)
// {
//   console.log(data);
// x.domain(data.map(function (d)
// {
//     return d.bug;
// }));

// y.domain([0, d3.max(data, function (d)
// {
//     return d.hum;
// })]);

// svg1.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0, " + height + ")")
//     .call(xAxis)
//     .selectAll("text")
//     .style("text-anchor", "middle")
//     .attr("dx", "-0.5em")
//     .attr("dy", "-.55em")
//     .attr("y", 30)
//     .attr("transform", "rotate(0)" );

// svg1.append("g")
//     .attr("class", "y axis")
//     .call(yAxis)
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 5)
//     .attr("dy", "0.8em")
//     .attr("text-anchor", "end")
//     .text("Word Count");

// svg1.selectAll("bar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .style("fill", "orange")
//     .attr("x", function(d)
//     {
//         return x(d.bug);
//     })
//     .attr("width", x.rangeBand())
//     .attr("y", function (d)
//     {
//         return y(d.hum);
//     })
//     .attr("height", function (d)
//     {
//         return height - y(d.hum);
//     });

// })




// set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 20, left: 50},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg1 = d3.select("#chart1")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// // Parse the Data
// d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv", function(data) {

//   // List of subgroups = header of the csv files = soil condition here
//   var subgroups = data.columns.slice(1)

//   // List of groups = species here = value of the first column called group -> I show them on the X axis
//   var groups = d3.map(data, function(d){return(d.group)}).keys()

//   // Add X axis
//   var x = d3.scaleBand()
//       .domain(groups)
//       .range([0, width])
//       .padding([0.2])
//   svg1.append("g")
//     .attr("transform", "translheight
//   // Add Y axis
//   var y = d3.scaleLinear()
//     .domain([0, 40])
//     .range([ height, 0 ]);
//   svg1.append("g")
//     .call(d3.axisLeft(y));

//   // Another scale for subgroup position?
//   var xSubgroup = d3.scaleBand()
//     .domain(subgroups)
//     .range([0, x.bandwidth()])
//     .padding([0.05])

//   // color palette = one color per subgroup
//   var color = d3.scaleOrdinal()
//     .domain(subgroups)
//     .range(['#e41a1c','#377eb8','#4daf4a'])

//   // Show the bars
//   svg1.append("g")
//     .selectAll("g")
//     // Enter in data = loop group per group
//     .data(data)
//     .enter()
//     .append("g")
//       .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
//     .selectAll("rect")
//     .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
//     .enter().append("rect")
//       .attr("x", function(d) { return xSubgroup(d.key); })
//       .attr("y", function(d) { return y(d.value); })
//       .attr("width", xSubgroup.bandwidth())
//       .attr("height", function(d) { return height - y(d.value); })
//       .attr("fill", function(d) { return color(d.key); });

// })



///////////////////////////////
// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 30, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
  // When reading the csv, I must format variables:
  function (d) {
    return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
  },
  // Now I can use this dataset:
  function (data) {
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function (d) { return d.date; }))
      .range([0, width]);
    svg2.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([8000, 9200])
      .range([height, 0]);
    svg2.append("g")
      .call(d3.axisLeft(y));
    // Add the line
    svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FFAF0F")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function (d) { return x(d.date) })
        .y(function (d) { return y(d.value) })
      )
    // Add the points
    svg2
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return x(d.date) })
      .attr("cy", function (d) { return y(d.value) })
      .attr("r", 5)
      .attr("fill", "#69b3a2")

    svg2.append('text')
      .attr('class', 'title')
      .attr('x', width / 2)
      .attr('y', margin.top / 2)
      .attr('text-anchor', 'middle')
      .style("font-size", "16px")
      .style('fill', 'darkOrange')
      .text('Biểu đồ hiển thị số Sâu theo giờ');
  })





// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 30, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg3 = d3.select("#chart3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");


// get the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function (data) {

  // add the x Axis
  var x = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, width]);
  svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // add the y Axis
  var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 0.01]);
  svg3.append("g")
    .call(d3.axisLeft(y));

  // Compute kernel density estimation
  var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))
  var density = kde(data.map(function (d) { return d.price; }))

  // Plot the area
  svg3.append("path")
    .attr("class", "mypath")
    .datum(density)
    .attr("fill", "#E52813")
    .attr("opacity", ".8")
    .attr("stroke", "#000")
    .attr("stroke-width", 1)
    .attr("stroke-linejoin", "round")
    .attr("d", d3.line()
      .curve(d3.curveBasis)
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return y(d[1]); })
    );

  svg3.append('text')
    .attr('class', 'title')
    .attr('x', width / 2)
    .attr('y', margin.top / 2)
    .attr('text-anchor', 'middle')
    .style("font-size", "16px")
    .style('fill', 'darkOrange')
    .text('Biểu đồ hiển thị Nhiệt Độ theo ngày');

});


// Function to compute density
function kernelDensityEstimator(kernel, X) {
  return function (V) {
    return X.map(function (x) {
      return [x, d3.mean(V, function (v) { return kernel(x - v); })];
    });
  };
}
function kernelEpanechnikov(k) {
  return function (v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}

