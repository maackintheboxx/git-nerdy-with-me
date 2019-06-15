let input_ia = document.getElementById("inputAnswerHere");
let submit = document.getElementById("quote-button");

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
            console.log("this is the quote: ", quoteParts[0]);
            console.log("this is the source: ", quoteParts[1]);
    })
        .catch(function (error) {
        console.log("An error occurred");
    });
}


getQuote();