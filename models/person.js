
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//define the person schema

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type:Number
    }, 
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique: true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    }

})

personSchema.pre('save',async function(next){
    const person = this;

    //hash the pwd only if it has been modified(or is new)
if(!person.isModified('password'))return next();
    try{
        //hash passoword generation
    const salt = await bcrypt.genSalt(10);
    // hash pwd
      console.log("salt added here",salt)
    const hashedPassword = await bcrypt.hash(person.password,salt);
    console.log('hashed pass', hashedPassword)
    
    //override the plain password with the hased one

    person.password = hashedPassword;

        next();

    }catch(err){
        return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

//create Person model

const Person = mongoose.model('Person',personSchema);

module.exports = Person;