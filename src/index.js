const express = require('express')

express()
  .get('/', (req, res) => res.json({ hello: 'world' }))
  .listen(process.env.PORT)
