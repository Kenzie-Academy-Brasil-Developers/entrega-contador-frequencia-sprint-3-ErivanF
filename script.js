const button =document.getElementById("countButton")
const textBox = document.getElementById("textInput")
const lettersBox = document.getElementById("lettersDiv")
const wordBox = document.getElementById("wordsDiv")

button.addEventListener("click",count)

function count() {
    let text = textBox.value
    const wordCount = {}
    const lettersCount = {}
    text=text.toLowerCase()  
    text=text.replace(/[^a-z'\s]+/g,"")
    for(let i=0;i<text.length;i++){
        if(lettersCount[text[i]]===undefined){
            lettersCount[text[i]]=1
        }else{
            lettersCount[text[i]]++
        }
    }
    
    const words = text.split(/\s/)
    for(let i=0;i<words.length;i++){
        if(wordCount[words[i]]===undefined){
            wordCount[words[i]]=1
        }else{
            wordCount[words[i]]++
        }
    }
    displayObject(lettersCount,lettersBox)
    displayObject(wordCount,wordBox)
}
function displayObject(obj,target){
    target.innerHTML=""
    for(let x in obj){
        const span = document.createElement("span")
        span.innerText = `${x}: ${obj[x]}; `
        target.appendChild(span)
    }
}