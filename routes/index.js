const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  res.render('hello', {
    name: "Liebe",
    dog: req.query.dog,
    title: `Here's the title!`
  });
});

router.get('/reverse/:name', (req, res) => {
  // if(req.params.name){
  //   let name = (req.params.name).reverse();
  //   res.send(name);
  // }
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
