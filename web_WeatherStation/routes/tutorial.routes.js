module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const users = require("../controllers/user.controller.js")
    const pfs = require("../controllers/pf.controller.js")
    const controls = require("../controllers/control.controller")
    const df = require("../controllers/default.controller")

    var router = require("express").Router();

    router.get("/getalldata", pfs.findAll)
    
    router.get("/getalldatafinal", df.findAll)

    router.get("/getnewmessfinal", df.find_new_mess)

    router.get("/getnewmess", pfs.find_new_mess)
    
    router.get("/getone", pfs.findOne)

    router.get("/getallusers", users.findAll)

    router.get("/getstate", controls.find_new_mess)



    // Create a new user
    // router.post("/adduser", users.create);

    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);

    // router.get("/getOne", tutorials.find_new_mess);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);

    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);

    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);
  };