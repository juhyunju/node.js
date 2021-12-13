const {odd,even} = require('./variable')

const checkOddOrEven = (num) =>{


  if(num %2 ===0 ){
    return even
  }else{
    return odd
  }
}

module.exports = checkOddOrEven