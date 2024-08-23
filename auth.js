const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Person = require('./models/person');

passport.use(new LocalStrategy (async (username,password, done)=>{
    try {
        console.log('received crenditials:',username,password);
        
        const user = await Person.findOne({username})
        if(!user){

            return done(null,false,{message:"incorrect username"});
            
        }

        const isPasswordMatch = await user.comparePassword(password);

        if(isPasswordMatch){
            console.log('passorword match',user)
            return done(null,user);
        }else{
            return done (null, false, {message: 'incrooect password.'})
        }
    } catch (error) {
        return done(error);
    }
}));

module.exports = passport; //export configured passport