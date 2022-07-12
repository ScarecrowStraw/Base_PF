const express = require('express')
const mongoose = require('mongoose')
const port = 3000
const app = express()
const MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser')

var url = "mongodb://localhost:27017/";
// const con = require('./api/db')

// const products_routes = require('./api/routes')

// const data_test = require('./routes/record')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// require('dotenv').load()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())

const data_test = require("./routes/tutorial.routes")

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


require("./routes/tutorial.routes")(app);

app.use('/api/get', data_test)

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/download', function(req, res){
  res.render('download');
});

app.get('/admin', function(req, res) {
  res.render('admin');
});

app.get('/login', function(req, res) {
  res.render('login');
});



app.get('/planfactory', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");
    // var tmp = dbo.listCollections().toArray();
    // console.log(tmp);

    dbo.listCollections().toArray(function(err, names) {   
      if(!err) {
          // var arr = [];
          for( let i = 0; i< names.length; i++ ){
            // console.log(names[i].name);
            if(names[i].name == 'controls' || names[i].name == 'OpenWeatherMap' || names[i].name == 'users' ||names[i].name == 'tutorials' ||names[i].name == 'pfs' ||names[i].name == 'Cai bo xoi'){
              delete names[i]
            }
          }
          dbo.collection("Default").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            var object = result.name_gate;
            var name_pro = req.params.name_project;
           console.log("name_pro",name_pro);
          //  console.log("date_from", result.date_from);
            res.render('planf',  {name_pro: name_pro,names: names, object: object, result: result});
          });
          // console.log(names);
          // console.log(names.length);
      }
  });
})
});


app.get('/planfactory/dashboard/:name_project',  function(req, res){
  console.log(req.params.name_project);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");
    dbo.listCollections().toArray(function(err, names) {
      if(!err) {
          // var arr = [];
          // for( let i = 0; i< names.length; i++ ){
          //   arr.push(names[i].name);
          // }
          for( let i = 0; i< names.length; i++ ){
            // console.log(names[i].name);
            if(names[i].name == 'controls' || names[i].name == 'OpenWeatherMap' || names[i].name == 'users' ||names[i].name == 'tutorials' ||names[i].name == 'pfs' ||names[i].name == 'Cai bo xoi'){
              delete names[i]
            }
          }
          dbo.collection(req.params.name_project).findOne({}, function(err, result) {
            if (err) throw err;
            // console.log(result);
            var object = result.object;
            var name_pro = req.params.name_project;
            // console.log("date_from", result.date_from);
          //  console.log("name_pro",name_pro);
            res.render('planf',  {name_pro: name_pro,names: names, object: object,result: result  });
          });

          // res.redirect('./planfactory',{names: names}) ;
          // res.render('planf',  {name_pro: name_pro,names: names });
      }
  });
})
  // res.render('planf', {names: names});
});
app.get('/addproject', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");
    dbo.listCollections().toArray(function(err, names) { 
      if(!err) {
        for( let i = 0; i< names.length; i++ ){
          // console.log(names[i].name);
          if(names[i].name == 'controls' || names[i].name == 'OpenWeatherMap' || names[i].name == 'users' ||names[i].name == 'tutorials' ||names[i].name == 'pfs' ||names[i].name == 'Cai bo xoi'){
            delete names[i]
          }
        }
          // var arr = [];
          // for( let i = 0; i< names.length; i++ ){
          //   arr.push(names[i].name);
          // }
          // console.log(arr);
          res.render('addproject', {names: names});
      }
  });
})
});
app.get('/planfactory/addproject', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");
    dbo.listCollections().toArray(function(err, names) {   
      if(!err) {
        for( let i = 0; i< names.length; i++ ){
          // console.log(names[i].name);
          if(names[i].name == 'controls' || names[i].name == 'OpenWeatherMap' || names[i].name == 'users' ||names[i].name == 'tutorials' ||names[i].name == 'pfs' ||names[i].name == 'Cai bo xoi'){
            delete names[i]
          }
        }
          // var arr = [];
          // for( let i = 0; i< names.length; i++ ){
          //   arr.push(names[i].name);
          // }
          // console.log(arr);
          res.render('addproject', {names: names});
      }
  });
})
});
app.get('/delproject', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");
    dbo.listCollections().toArray(function(err, names) {   
      if(!err) {
        for( let i = 0; i< names.length; i++ ){
          // console.log(names[i].name);
          if(names[i].name == 'controls' || names[i].name == 'OpenWeatherMap' || names[i].name == 'users' ||names[i].name == 'tutorials' ||names[i].name == 'pfs' ||names[i].name == 'Cai bo xoi'){
            delete names[i]
          }
        }
          // var arr = [];
          // for( let i = 0; i< names.length; i++ ){
          //   arr.push(names[i].name);
          // }
          // console.log(arr);
          res.render('delproject', {names: names});
      }
  });
})


});

app.post('/addproject', function(req, res) {
  console.log(req.body.name_project)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");

    dbo.createCollection(req.body.name_project, function(err, ress) {
      if (err) throw err;
      // alert('Project created!')
      console.log("Collection created!");
     
    });
    dbo.listCollections().toArray(function(err, names) {
      if(!err) {
          // var arr = [];
          // for( let i = 0; i< names.length; i++ ){
          //   arr.push(names[i].name);
          // }
          for( let i = 0; i< names.length; i++ ){
            // console.log(names[i].name);
            if(names[i].name == 'controls' || names[i].name == 'OpenWeatherMap' || names[i].name == 'users' ||names[i].name == 'tutorials' ||names[i].name == 'pfs' ||names[i].name == 'Cai bo xoi'){
              delete names[i]
            }
          }
          dbo.collection("Default").findOne({}, function(err, result) {
            if (err) throw err;
            // console.log(result);
            var object = result.object;
            var name_pro = req.params.name_project;
            // console.log("date_from", result.date_from);
          //  console.log("name_pro",name_pro);
            res.render('planf',  {name_pro: name_pro,names: names, object: object,result: result  });
          });

          // res.redirect('./planfactory',{names: names}) ;
          // res.render('planf',  {name_pro: name_pro,names: names });
      }
  });



    // dbo.listCollections().toArray(function(err, names) {   
    //   if(!err) {
    //     // console.log(names);
    //       res.render('./planf', {names: names});
    //   }
    // });
    console.log("input form: " ,req.body);
    var my_data = {
      name_project: req.body.name_project,
      object: req.body.Object,
      config: req.body.config,
      gd1:{
        date_from: req.body.gd1_from,
        date_to: req.body.gd1_to,
        value: req.body.gd1_muc
      },
      gd2:{
        date_from: req.body.gd2_from,
        date_to: req.body.gd2_to,
        value: req.body.gd2_muc
      },
      gd3:{
        date_from: req.body.gd3_from,
        date_to: req.body.gd3_to,
        value: req.body.gd3_muc
      }
    }
    
    dbo.collection(req.body.name_project).insertOne(my_data, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });

  });
 
  
  res.redirect('./planfactory' );
});


app.post('/planfactory/addproject', function(req, res) {
  console.log(req.body.name_project)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("WeatherStation");

    dbo.createCollection(req.body.name_project, function(err, ress) {
      if (err) throw err;
      // alert('Project created!')
      console.log("Collection created!");
     
    });

    // var dboo = db.db("WeatherStation");
    // console.log('n');
    dbo.listCollections().toArray(function(err, names) {   
      if(!err) {
        // console.log(names);
          res.render('./planf', {names: names});
      }
    });

    var my_data = {
      name_project: req.body.name_project,
      gd1:{
        date_from: req.body.gd1_from,
        date_to: req.body.gd1_to,
        value: req.body.gd1_muc
      },
      gd2:{
        date_from: req.body.gd2_from,
        date_to: req.body.gd2_to,
        value: req.body.gd2_muc
      },
      gd3:{
        date_from: req.body.gd3_from,
        date_to: req.body.gd3_to,
        value: req.body.gd3_muc
      }
    }
    
    dbo.collection(req.body.name_project).insertOne(my_data, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });

  });
 
  
  res.redirect('./planfactory' );
});


app.post('/auth', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  if(username == "NamBui" && password == "123"){
    res.render('admin');
  }
});

const users = require("./controllers/user.controller.js")

const controls = require("./controllers/control.controller.js")
app.post("/admin", users.create);

app.post("/planfactory", controls.create);


//counting_pest
app.get('/map', function(req, res) {
  res.render('map');
});

app.get('/hanoi', function(req, res) {
  res.render('hanoi');
});
//counting_pest


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})