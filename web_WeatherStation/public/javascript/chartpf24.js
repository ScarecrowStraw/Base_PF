
let getData = new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/tutorials/getalldata").then(
      (data) => {
        resolve(data.json());
        // fix height/width canvas
        autoResizeCanvas();
      }
    );
  });

  $(window).on('resize', function() {
    autoResizeCanvas();
});

function autoResizeCanvas(){
  var heightCanvas = $(document).height() - 200 - $(document).height()/4;

  console.log(heightCanvas);

  $('#chart2').css({"maxHeight":heightCanvas+"px"});
}

  getData.then((data) => {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let day = d.getDate();
    // console.log(getPreviousDay(new Date()));

    console.log(day,hour, minutes);
    var time_hour = hour // thoi gian bat dau   
    var time_minute = minutes;
    var time_day = day;
  

    var data_mining = data.filter( obj => (
        (parseInt(obj.data.time.dd) == time_day) 
        && ((parseInt(obj.data.time.h) < time_hour)
        || ((parseInt(obj.data.time.h) == time_hour)
        && (parseInt(obj.data.time.m) < time_minute)))    
    )
        ||
        (
            (parseInt(obj.data.time.dd) == time_day -1) 
            && ((parseInt(obj.data.time.h) > time_hour)
            || ((parseInt(obj.data.time.h) == time_hour)
            && (parseInt(obj.data.time.m) > time_minute)))    
    )
    );

    // var data_mining = data.filter( obj => obj.data.time.dd == String(day)
    // && ( 
    //     ((parseInt(obj.data.time.h) == time_hour) 
    //     &&  (parseInt(obj.data.time.m) <= time_minute))
    
    // || (parseInt(obj.data.time.h) == time_hour-1)
    // || 
    //     ((parseInt(obj.data.time.h) == time_hour-2)
    //     && (parseInt(obj.data.time.m) >= time_minute))
    
    // )pointRadius
    console.log(data_mining);

    var hour_one = data_mining.filter( obj => obj.data.time.h == String(time_hour))
    var hour_two = data_mining.filter( obj => obj.data.time.h == String(time_hour-1))
    var hour_three = data_mining.filter( obj => obj.data.time.h == String(time_hour-2))
    // console.log(hour_one);
    // console.log(minute_hour_two);
    // console.log(minute_hour_three);
    var minute_hour_one = data_mining.map(function(e) {
        return e.data.time.h;  
        });

    var minute_hour_two = hour_two.map(function(e) {
        return e.data.time.m;  
        });
    
    var minute_hour_three = hour_three.map(function(e) {
        return e.data.time.m;  
        });

    console.log(minute_hour_one);

    var value_co2 = data_mining.map(function(e) {
        return e.data.co2;  
        });

    let label = [];
    for(let i = 1 ; i <=24 ; i+=1){
            label.push(i );
        }

    // for(let i = 0 ; i < minute_hour_three.length ; i++){
    //     label.push(String(String(time_hour-2) + ":" + minute_hour_three[i]) );
    // }

    // for(let i = 0 ; i < minute_hour_two.length ; i++){
    //     label.push(String(String(time_hour-1) + ":" + minute_hour_two[i]) );
    // }
    // for(let i = 0 ; i < minute_hour_one.length ; i++){
    //     label.push(String(String(time_hour) + ":" + minute_hour_one[i]) );
    // }

    console.log(label);
   ;


  console.log(value_co2)

  
      new Chart(document.getElementById("chart2"), {
        type: 'line',
        data: {
          // for(let i = 0; i < value.length; i++){
  
          // }
          labels: label,
          datasets: [{
              data: value_co2,
              label: "Value CO2",
              borderColor: "#3e95cd",
              fill: false,
              pointRadius :0.1
            },
          ]
        },
        options: {
          scales: {
            // xAxes:[{
            //     type: 'time',
            //     time: {
            //       format: "HH:mm",
            //       unit: 'hour',
            //       unitStepSize: 1,
            //       displayFormats: {
            //         'minute': 'HH:mm', 
            //         'hour': 'HH:mm', 
            //         min: '00:00',
            //         max: '23:59'
            //       },
            //   }}]
            xAxes: [{
              scaleLabel: {
                fontColor: "#1182D2",
                fontSize: 16,
                display: false,
                labelString: 'Time'
              }
            }],
            yAxes: [{
              scaleLabel: {
                fontColor: "#1182D2",
                fontSize: 16,
                display: true,
                labelString: 'CO2 Concentration'
              }
            }]
          },
          title: {
            display: true,
            color: "#1182D2",
            font : 16,
            text: 'CO2 concentration display chart hourly'
            
          }
        }
      }); 
  

  });//
  
  
  
  
  
  
  
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
//   var margin = {top: 30, right: 30, bottom: 30, left: 50},
//       width = 460 - margin.left - margin.right,
//       height = 400 - margin.top - margin.bottom;
  
//   // append the svg object to the body of the page
//   var svg2= d3.select("#chart2")
//     .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//       .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");
  
//   //Read the data
//   d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
//     // When reading the csv, I must format variables:
//     function(d){
//       return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
//     },
//     // Now I can use this dataset:
//     function(data) {
//       // Add X axis --> it is a date format
//       var x = d3.scaleTime()
//         .domain(d3.extent(data, function(d) { return d.date; }))
//         .range([ 0, width ]);
//       svg2.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(x));
//       // Add Y axis
//       var y = d3.scaleLinear()
//         .domain([8000, 9200])
//         .range([ height, 0 ]);
//       svg2.append("g")
//         .call(d3.axisLeft(y));
//       // Add the line
//       svg2.append("path")
//         .datum(data)
//         .attr("fill", "none")
//         .attr("stroke", "#FFAF0F")
//         .attr("stroke-width", 1.5)
//         .attr("d", d3.line()
//           .x(function(d) { return x(d.date) })
//           .y(function(d) { return y(d.value) })
//           )
//       // Add the points
//       svg2
//         .append("g")
//         .selectAll("dot")
//         .data(data)
//         .enter()
//         .append("circle")
//           .attr("cx", function(d) { return x(d.date) } )
//           .attr("cy", function(d) { return y(d.value) } )
//           .attr("r", 5)
//           .attr("fill", "#69b3a2")
  
//       svg2.append('text')
//       .attr('class', 'title')
//       .attr('x', width / 2)
//       .attr('y', margin.top/2)
//       .attr('text-anchor', 'middle')
//       .style("font-size", "16px") 
//       .style('fill', 'darkOrange')
//       .text('Biểu đồ hiển thị số Sâu theo giờ');
//   })
  
  
  
  
  
//   // set the dimensions and margins of the graph
//   var margin = {top: 30, right: 30, bottom: 30, left: 50},
//       width = 460 - margin.left - margin.right,
//       height = 400 - margin.top - margin.bottom;
  
//   // append the svg object to the body of the page
//   var svg3 = d3.select("#chart3")
//     .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//       .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");
  
  
//   // get the data
//   d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function(data) {
  
//     // add the x Axis
//     var x = d3.scaleLinear()
//               .domain([0, 1000])
//               .range([0, width]);
//     svg3.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(x));
  
//     // add the y Axis
//     var y = d3.scaleLinear()
//               .range([height, 0])
//               .domain([0, 0.01]);
//     svg3.append("g")
//         .call(d3.axisLeft(y));
  
//     // Compute kernel density estimation
//     var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40))
//     var density =  kde( data.map(function(d){  return d.price; }) )
  
//     // Plot the area
//     svg3.append("path")
//         .attr("class", "mypath")
//         .datum(density)
//         .attr("fill", "#E52813")
//         .attr("opacity", ".8")
//         .attr("stroke", "#000")
//         .attr("stroke-width", 1)
//         .attr("stroke-linejoin", "round")
//         .attr("d",  d3.line()
//           .curve(d3.curveBasis)
//             .x(function(d) { return x(d[0]); })
//             .y(function(d) { return y(d[1]); })
//         );
    
//         svg3.append('text')
//         .attr('class', 'title')
//         .attr('x', width / 2)
//         .attr('y', margin.top/2)
//         .attr('text-anchor', 'middle')
//         .style("font-size", "16px") 
//         .style('fill', 'darkOrange')
//         .text('Biểu đồ hiển thị Nhiệt Độ theo ngày');
  
//   });
  
  
//   // Function to compute density
//   function kernelDensityEstimator(kernefontSizel, X) {
//     return function(V) {
//       return X.map(function(x) {
//         return [x, d3.mean(V, function(v) { return kernel(x - v); })];
//       });
//     };
//   }
//   function kernelEpanechnikov(k) {
//     return function(v) {
//       return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
//     };
//   }
  
  