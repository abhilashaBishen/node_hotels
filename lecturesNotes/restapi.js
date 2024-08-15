//ultimately jsondata string me ek jagan se dusare jagan se string me pass hota hai
const jsonstring='{"name":"anny","age":34}';

const jsondata = {"name":"jsondatatype","age":33};
console.log(jsondata,typeof jsondata);
const jsonObject = JSON.parse(jsonstring);

console.log(jsonObject, jsonObject.name);

const objToConvert ={name:"abhi",city:'pryagraj',age:23};

const jsonStringified = JSON.stringify(objToConvert);

console.log(jsonStringified,typeof jsonStringified);