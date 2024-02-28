// Find all users with masters Degree.

function problem3(data){
    let user=[]
    for(let element in data){
    if(data[element].qualification==='Masters'){
         user.push(element)
        
    }}
    return user
}
 module.exports=problem3