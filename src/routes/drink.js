const { Router } = require('express');
const router = Router();

const drinks = require('../drinks.json');

router.get('/drinks', (req, res) =>{
  res.json(drinks);
  console.log('drinks');
});

router.post('/drink', (req, res) =>{
  const { drink, ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5, ingrediente6, ingrediente7, ingrediente8, ingrediente9, preparacion, vaso } = req.body;
  const idDrinks = drinks.length +1;
  const newDrink = {idDrinks, ...req.doby};
});

module.exports = router;
