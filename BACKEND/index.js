const { PrismaClient } = require('@prisma/client');
const express = require('express');
var cors = require('cors')
const app = express()
const port = 4000;

app.use(cors());
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 

// Prisma

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

// GET ALL USER
app.get('/users/',cors(corsOptions), async function (req, res, next) {
  const users = await prisma.user.findMany();
  res.json({users : users})
})

app.post('/user/new',cors(corsOptions), async function (req, res, next) {
 
  console.log('req.body', req.body)
  // const newUsers = await prisma.user.create({
  //   data : req.body
  // });

  // res.json(newUsers);

})

app.patch('/user/:id',cors(corsOptions), async function (req, res, next) {
  const users = await prisma.user.findMany();
  res.json({users : users})
});

app.delete('/user/:id',cors(corsOptions), async function (req, res, next) {
  const users = await prisma.user.findMany();
  res.json({users : users})
})




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})