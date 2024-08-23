const express = require('express');
const router = express.Router();
const Person = require('./../models/person.js');

router.post('/',async (req,res)=>{
    try {
        
        console.log('postapi called');
        const data = req.body;
        console.log('data received rea.body',data)

        const newPerson = new Person(data);
        
        console.log('new person ',newPerson)

        const response = await  newPerson.save();
        

        console.log('data saved');
        res.status(200).json(response)
    } 
    catch (error) {
        console.log(error);
            res.status(500).json({error:'internal server error'})
    }
    
})

//Get method to get the person
router.get('/',async (req,res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched');
        console.log('data form get')
        res.status(200).json({data});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'})
    }
    })

    router.get('/:workType',async(req,res)=>{
        try {
            const workType = req.params.workType; //Extract the work type from the URL parameter
            if(workType =='chef'|| workType == 'manager' || workType =='waiter'){
                const response = await Person.find({work:workType});
                console.log('response fetched');
                res.status(200).json(response)
    
    
            }else{
                res.status(404).json({error:'invalid work type'});
            }
            
        } catch (error) {
            console.log(error)
        }
       
    })
module.exports = router;
    
