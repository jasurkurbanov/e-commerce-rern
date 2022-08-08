const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const url = "mongodb://localhost:27017";

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      return console.log(err);
    }

    // // Specify database you want to access
    const productsCollection = client.db("e-commerce").collection("products");

    console.log(`MongoDB Connected: ${url}`);

    app.get("/products", (req, res) => {
      productsCollection.find().toArray((err, results) => {
        res.send(results);
      });
    });

    app.post("/add-product", (req, res) => {
      productsCollection
        .insertOne(req.body)
        .then((result) => {
          res.send("success");
        })
        .catch((error) => console.error(error));
    });

    app.put("/update-product", (req, res) => {
      productsCollection
        .findOneAndUpdate(req.body)
        .then((result) => {
          res.send("success");
        })
        .catch((error) => console.error(error));
    });

    app.listen(3000, function () {
      console.log("listening on 3000");
    });
  }
);
