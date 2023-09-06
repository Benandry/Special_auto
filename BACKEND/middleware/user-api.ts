import express from "express"
import { PrismaClient } from '@prisma/client';
const user = express.Router();
const prisma = new PrismaClient();
///////////////GET /////////////////
user.get("/users",async  (req, res) => {
    const user = await prisma.user.findMany();
    console.log('user', user)
    res.send("Hello World!");
});


///////////////POST /////////////////
user.post("/user/new", (req, res) => {
    console.log("Hello world")
    res.send("Hello World!");
});

///////////////PATCH /////////////////
user.patch("/user/new", (req, res) => {
    console.log("Hello world")
    res.send("Hello World!");
});

///////////////POST /////////////////
user.delete("/user/new", (req, res) => {
    console.log("Hello world")
    res.send("Hello World!");
});




export default  user;