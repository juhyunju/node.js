let i = 0
setInterval(() => {
  if(i ===5){
    console.log('끝')
    process.exit()
  }
  i++
  console.log(i)
})