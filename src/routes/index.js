const { Router } = require('express');
const router = Router();

router.get('/bebidas', (req, res) =>{
  const data = {
    "bebida": "Mojito",
    "ingredientes": "Vodka, limon, hielo",
    "preparacion": "como se prepara"
  }
  res.json(data);
});

module.exports = router;
