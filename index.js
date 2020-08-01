// Code your solutions in this file


function writeCards(name){
   let result = []
    for (let i = 0; i < name.length; i++){
        result.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return result;
}
function countDown(num){
    for (let i = num; i >= 0; i--){
        console.log(i);
    }
}