 
 console.log('server file is running');


//  var add = function (a,b){
//     return a+b;

//  }




 //var add = (a,b) =>{return a+b};

 var add = (a,b) => a+b;

 var result = add(45,2)
 console.log(result);

 (function (){
    console.log('ifff function')
 })();

// function callback(){
//     console.log('this is callback functin definition');
// }

// var sum = function (a,b,cb){
//     console.log('sum is',a+b);
//     callback();
// }
//  sum(34,5,callback)

var sum = function (a,b,cb){
    console.log('sum is',a+b);
    cb();
}

// sum(4,5,function (){
//     console.log('callbck define in main function calling time');
// })

sum(4,67,()=>console.log('main function call and cb function is define in main fun without writing function keyword'));