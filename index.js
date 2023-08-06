const props = ["Snake" , "Water" , "Gun"]
const harry = props[Math.floor(Math.random() * props.length)]
const input = prompt("Enter Your Choice")
  
  while (input != harry){
  if(input == props[0]){
    if(harry == props[1]){
      alert("Computer Loose You Win")
      break
    }
    else if(harry == props[2]){
      alert("You Loose Computer Win")
      break
    }
  }else if (input == props[1]){
    if(harry == props[0]){
      alert("You Loose Computer Win")
      break
    }
    else if(harry == props[2]){
      alert("Computer Loose You Win")
      break
    }
  }
  else if (input == props[2]){
    if(harry == props[0]){
      alert("Computer Loose You Win")
      break
    }
    else if(harry == props[1]){
      alert("You Loose Computer Win")
      break
    }
  }
  alert("You Choose "+input+" And Computer Choose "+ harry)
}
