// //Write your pseduo code first! 
// const btn = document.querySelector("#check")

// btn.addEventListener("click", converCtoF);

// function converCtoF(){
//     // const result = document.querySelector("#result")
//     // let celsius = document.querySelector("#celsius").value
//     // result.innerText = "Result: "
//     // celsius = celsius*(9/5)+32
//     // result.innerText += celsius
//     console.log('working')
// }






const convert = document.querySelector("#check")
convert.addEventListener("click", click=>{
    document.querySelector("#result").innerText = `Result: `
    document.querySelector("#result").innerText += document.querySelector("#celsius").value *(9/5) +32
   
})