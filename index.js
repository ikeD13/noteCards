const express = require('express')
const app = express()
const env = process.env.NODE_ENV || "development";
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);


app.get('/', (req, res, next) => {
    knex('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))