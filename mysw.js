let input_ia = document.getElementById("inputAnswerHere");
let submit = document.getElementById("quote-button");



// input_ia.addEventListener("blur",checkData);

// function getInputData(){
//     let data = [];
//     data.push(input_ia.value);
//     console.log(data);
// }

function checkData(){
    if(this.value === ""){
        this.input.add("alert");
        this.placeholder = "Required";
        console.log("empty!")
    }
    console.log(this.value);
    
}

// function buildingStarWars(){
//     let result = [];
//     let videos = JSON.items;
//        for(let i = 0; i < videos.length; i++){
//           let clip = videos[i];
//           result.push('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + clip.id.videoId + '_D0ZQPqeJkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
          
          
        
    //       }
    //       return result;
    //    }
