//Q4 Group users based on their Programming language mentioned in their designation.


function problem4(obj){
  let usersDesignation=[];
  for(let user in obj){
      for(let key in obj[user]){
          if (key==="desgination"){
              usersDesignation[user]=obj[user][key];
          }
      }
  }

  return usersDesignation;
}

module.exports=problem4;
