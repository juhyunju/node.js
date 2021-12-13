const string = 'abc'
const number = 1
const boolean = true
const obj = {
  outside:{
    inside:{
      key:'value'
    }
  }
}

console.time('전체 시간')

console.log("콘솔 하나입니다")
console.log(string,number,boolean)

console.error('에러메시지')

console.timeEnd('전체 시간')

console.table([
  {name:'제로',birth:1994,favorite:'떡볶이'},
  {name:'제로2',birth:19914,favorite:'소주'}])


  console.dir(obj,{colors:true,depth:1})
  console.dir(obj,{colors:false,depth:2})

  console.time('시간 측정')    // time , timeend 짝이여
  for(let i = 0 ; i< 1; i++){}
  console.timeEnd('시간 측정')

  function b() {
    console.trace('위치 추적')
  }
  function a() {
    b()
  }
  a()





