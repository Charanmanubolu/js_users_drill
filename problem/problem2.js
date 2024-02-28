
//Q2 Find all users staying in Germany.


function problem2(data){
    let ppl=[]
   
        for(let element in data){
            if(data[element].nationality==='Germany'){
               
                 ppl.push(element)
            }
        }
       
    return ppl;
}

module.exports=problem2