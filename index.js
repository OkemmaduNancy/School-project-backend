const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./app/routes')
const cors = require('cors')

//create express app
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json())

app.use(cors())
//define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Wellcome to Project app" });
});

app.use('/v1', routes)

const port = process.env.PORT || 5000

// listen for requests
app.listen(port, () => {
  console.log("Server has successfully start");
  
})
   
