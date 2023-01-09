const router = require('express').Router();
const fs = require('fs');

router.post('/', async (req, res) => {
  const create = fs.writeFile(
    './views/easteregg.handlebars',
    `<div><script src="https://cdn.htmlgames.com/embed.js?game=SoldierAttack3&amp;bgcolor=white"></script></div>`,
    (err) =>
      err
        ? console.log(err)
        : console.log('You Found It!')
  );

  res.status(200).json(create);
});

module.exports = router;
