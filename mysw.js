let newQuote = document.getElementById("newQuote");
let submit = document.getElementById("submittedAnswer");
let answer = ""

function checkData(){
    if(this.value === ""){
        this.input.add("alert");
        this.placeholder = "Required";
        console.log("empty!")
    }
    console.log(this.value);
}

function getQuote() {
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
        .then((resp) => resp.json())
        .then(function(data) {
            let quoteParts = data.starWarsQuote.split(' — ', 2);
            document.getElementById("quote").innerHTML = quoteParts[0];
            answer = quoteParts[1];
    })
        .catch(function (error) {
        console.log("An error occurred");
    });
}

function assessAnswer() {
    console.log("this is the source: ", answer);
}

newQuote.addEventListener("click", getQuote);
submit.addEventListener("click", assessAnswer)