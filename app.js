// let input = prompt('enter your nicknames in the social world')


// let result = input.split('')
// let words = ['a','b','s','d','e','f','g','j','k','l','m','n','p','q','r','s','t','u','v','g','h','j','l','m','n','k','o','p','q','r','t','u',]

// function name (){
//     words.forEach((word)=>{
//         return word
//     })
// }
// function word (){
//     result.forEach((e)=>{
//         return e
//     })
// }

// function test (){

//     let ops = name()== word()
//     if(ops !== true){
//         console.log('er');
        
//     } else {
//         console.log('u r not right');
        
//     }
// }

// test ()



// result.forEach((smth)=>{
// switch (name()) {
//     case name():
//         console.log('loose');
//         break;
//     case name():
//         console.log('try');
//         break;
//     case name():
//         console.log('not now');
//         break;
//     default:
//         break;
// }

// })




let nickNames = prompt('enter your nicknames')

function checkGender(usersName){
    let checker = new Set(usersName);
    if(checker.size% 2 ===0){
        console.log('she is a girl, u can talk easly with her, be careful:) ');
    } else {
        console.log('without any doubt he is he, try to lie us, cmon blocked piece of shit');
        
    }
}
    checkGender(nickNames)


