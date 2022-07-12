const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.users = require("./users.model.js")(mongoose);
db.pfs = require("./pf.model.js")(mongoose)
db.controls = require("./control.model.js")(mongoose)
db.createcol = require("./addcol.js")

module.exports = db;