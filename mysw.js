let input_ia = document.getElementById("inputAnswerHere");
let generate = document.getElementById("generate-button");
// input_ia.addEventListener("blur",checkData);

function getInputData(){
    let data = [];
    data.push(input_ia.value);
    console.log(data);
}

function checkData(){
    if(this.value === ""){
        this.classList.add("alert");
        this.placeholder = "Required";
        console.log("empty!")
    }
    console.log(this.value);
}
