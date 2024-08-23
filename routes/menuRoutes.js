const express = require('express');

const router = express.Router();

const MenuItem = require('./../models/menu.js')



router.post('/',async (req,res)=>{
    try {
        const data = req.body;

        console.log(data)

        const newMenuItem = new MenuItem(data);

        const response = await  newMenuItem.save();

        console.log('data saved');
        res.status(200).json(response)
    } 
    catch (error) {
        console.log(error);
            res.status(500).json({error:'internal server error'})
    }
    
})

//Get method to get the menuitem
router.get('/',async (req,res)=>{
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json({data});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'})
    }
    })

    router.get('/:taste',async(req,res)=>{
        try {
            const taste = req.params.taste;
            if(taste =='sour'||taste =='sweet'||taste=='spicy'){
                const response = await MenuItem.find({taste:taste});
                console.log('response fetched');
                res.status(200).json({response})
            }else{
                res.status(404).json({error:'invalid taste type'});
            }
        } catch (error) {
            console.log(error)
        }
    })

    module.exports = router;