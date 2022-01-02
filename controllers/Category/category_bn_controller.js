//  Author: Mashrur Hossain Khan
//  Create Date: 11/12/2021
//  Modify Date: 11/12/2021
//  Description: User controller file for rest api project for Akij Motors

// Model import
const models = require("../../models");
const  Category_bn = models.Category_bn;

//create create_Category_en
exports.create_Category_bn = async function (req, res) {
  let body = req.body;
  try {
      await Category_bn.create({
        Category_bn: body.Category_bn,
      })      
      .then((category_en) => {
        //console.log("user created");
        res.status(200).json("created successfully");
        res.json(category_en)
      })
      .catch((err) => {
        return res.status(500).json("Something error there " + err);
      });
    //exports.authenticate(req, res);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};

// Create cause paragraph
/*
exports.createBuy = async function (req, res) {
    let body = req.body;
  
    try {
        await Buy.create({
            currency: body.currency,
            totalAmount: body.totalAmount,
            token: body.token,

            bscWaltetAddress: body.bscWaltetAddress,
            transactionHashNumber: body.transactionHashNumber,
            telegramHandle: body.telegramHandle
        })
        .then((user) => {
          //console.log("user created");
          res.status(200).json("created successfully");
          res.json(user)
        })
        .catch((err) => {
          return res.status(500).json("Something error there " + err);
        });
      //exports.authenticate(req, res);
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  };

  // Get all Buy
exports.getAllBuy = async function (req, res) {
  try {
    await Buy.findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

//edit Buy
module.exports.updateBuyById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Buy.update( { 
        currency: body.currency,
        totalAmount: body.totalAmount,
        token: body.token,

        bscWaltetAddress: body.bscWaltetAddress,
        transactionHashNumber: body.transactionHashNumber,
        telegramHandle: body.telegramHandle
      
    }, 
      {where : { id: id}}
      )
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
 
}

//edit Buy
module.exports.getBuyById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Buy.findByPk(id)
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
 
}

module.exports.deleteBuyById =  async(req, res) => {
  await Buy.destroy({
    where:{
      id: req.params.id
    }
  })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}*/