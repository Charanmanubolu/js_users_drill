
//Q1 Find all users who are interested in playing video games.



function Problem1(data){
 
  
   let ppl=[];
  for(let element in data){
    let user = data[element];
    for(let key in user){
        if(user[key].toString().includes("Playing Video Games")){
          ppl.push(element)
  
   }
  }
  
  return ppl

}

}

module.exports=Problem1

