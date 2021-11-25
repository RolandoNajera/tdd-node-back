const express = require('express');
const userService = require('./service');
const router = express.Router();

router.post('/api/1.0/users', async (req, res) => {
  const user = req.body;
  if (!user.username) {
    return res.status(400).send({
      validationErrors: {
        username: 'Username parameter is required.',
      },
    });
  }
  await userService.save(req.body);
  return res.status(200).send({ message: 'User created.' });
});

module.exports = router;
