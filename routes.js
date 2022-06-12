const express = require('express');
const route = express.Router()
const Data = require('./model')
 

//READ ALL
route.get('/',async (req,res)=>{
    try {
        const data = await Data.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


//CREATE
route.post('/',async (req,res)=>{
   //creating post
    const post = new Data({
        name: req.body.name,
        email: req.body.email
    });
    //saving
    try {
        const savepost = await post.save()
        res.send(savepost)    
    } catch (error) {
        res.send(error)
    }
});


//Specific data
route.get('/getone/:id',async(req,res)=>{
  try {
    const fetch = await Data.findById(req.params.id);
    res.send(fetch)
  } catch (error) {
      console.log(error)
  }
});

//UPDATE

route.patch('/:id',async(req,res)=>{
    try {
        const update = await Data.updateOne({_id:req.params.id},{$set:{name:req.body.name,email:req.body.email}});
        res.send(update)
    } catch (error) {
        console.log(error)
    }
})

//Delete
route.post('/:id',async(req,res)=>{
    try {
        const del = await Data.findByIdAndRemove(req.body.params);
        res.send('Deleted')
    } catch (error) {
        console.log(error)
    }
});


module.exports = route