let name = {
    fname: 'Aayush',
    lname: 'Tyagi',
    'address': {
        city: "banglore",
        details:{
            Block: 'D',
            FLatNo: 99,
        }
    }
}

// All different approaches

// Deep copy using JSON.parse(JSON.stringify(object))

let nameClone1 = JSON.parse(JSON.stringify(name))
nameClone1.address.city = "dehradun"
nameClone1.address.details.FLatNo =100
console.log(nameClone1)
console.log(name)


// Using Ramda
console.log("Using Ramda")
import {clone} from 'ramda'
let nameClone2 = clone(name)
nameClone2.address.city = "dehradun"
nameClone2.address.details.FLatNo =100
console.log(nameClone2)
console.log(name)


// Using lodash
console.log("Using lodash")
import _ from "lodash"
let nameClone3 = _.cloneDeep(name)
nameClone3.address.city = "dehradun"
nameClone3.address.details.FLatNo =100
console.log(nameClone3)
console.log(name)

//Usign Custom Function
console.log("Custom Function")


const nestedObjectCopy = (givenObject) => {
  
    let copyObject = Array.isArray(givenObject) ? [] : {}; 
    let key;
    let value;
  
    if (givenObject === null || typeof givenObject !== "object" ) {
      return givenObject;
    }
  
    for (key in givenObject) {
      value = givenObject[key];
      copyObject[key] = nestedObjectCopy(value); 
     // Recursively copy for nested objects, including arrays
    }
    return copyObject;
  }

let nameClone4 = nestedObjectCopy(name);
nameClone4.address.city = "dehradun"
nameClone4.address.details.FLatNo =100
console.log(nameClone4)
console.log(name)
