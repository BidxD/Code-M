const passwordBox = document.getElementById('password');
const length = document.getElementById('length')
let password = ''
console.log('we are here!')
console.log(passwordBox)
const Alphabets = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

const numbers = [
    0,1,2,3,4,5,6,7,8,9
]

function generateNum(){
    let numberIndex = Math.floor(Math.random()*numbers.length)
    password+= numberIndex
}
function generateAlpha(){
    let alphabetIndex = Math.floor(Math.random()*Alphabets.length )
    let anotherIndex = Math.floor(Math.random()*2)

    if (anotherIndex===1){
        password += (Alphabets[alphabetIndex]).toUpperCase()

    }else{
        password += (Alphabets[alphabetIndex])

    }

}

function generatePassword(reqLength){
    for(let i = 0;i<reqLength;i++){

        let decidingIndex = Math.floor(Math.random() * 2)
        if(decidingIndex === 1){
            generateAlpha()
        
        }else{
            generateNum()
        }
        
    }
    
    
    return password
}

const GenerateButton = document.getElementById('generate')
console.log(GenerateButton)
GenerateButton.onclick = function(){
    password = ""
   let passValue = generatePassword(length.value)
    passwordBox.value = passValue
}
