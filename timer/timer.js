const timeout = setTimeout(() =>{
  console.log("1초후 타이머")
},1000)
clearTimeout(timeout)


const interval =setInterval(() => {
  console.log("1초 반복 타이머")
},1000)
clearInterval(interval)


const immediate = setImmediate(() => {
  console.log("즉시 실행")
})
clearimmediate(immediate)


