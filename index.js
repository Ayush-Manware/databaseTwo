const express = require("express");
const { connection, databaseName } = require("./config/dataBase");
const app = express();
const collectionName = "employee";


app.get("/taskOne", async (req, res) => {
  await connection();
  const create = databaseName.collection(collectionName);
  res.send(create);
});

app.get("/taskTwo", async (req, res) => {
  await connection();
  const listEmploye = async (req, res) => {
    const result = await collectionName.find({});
    return res.send(result);
  };
  res.send(listEmploye);
});

app.get("/taskThree", async (req, res) => {
  await connection();
  const listThrity = async (req, res) => {
    const result = await collectionName.find({ salary: { $gt: 30000 } });
    return res.send(result);
  };
  res.send(listThrity);
});

app.get("/taskFour", async (req, res) => {
  await connection();
  const listThrity = async (req, res) => {
    const result = await collectionName.find({ overallExp: { $gt: 2 } });
    return res.send(result);
  };
  res.send(listThrity);
});

app.get("/taskFive", async (req, res) => {
  await connection();
  const listThrity = async (req, res) => {
    const result = await collectionName.find({
      overallExp: { $gt: 1 },
      yearGrad: { $gt: 2015 },
    });
    return res.send(result);
  };
  res.send(listThrity);
});

app.get("/taskSix", async (req, res) => {
  await connection();
  const listThrity = async (req, res) => {
    const result = await collectionName.deleteMany({"lastCompany": 'y'});
    return res.send(result);
  };
  res.send(listThrity);
});



app.listen(2200, () => {
  try {
    connection();
    console.log("Server Started");
  } catch (err) {
    console.log(err);
  }
});
