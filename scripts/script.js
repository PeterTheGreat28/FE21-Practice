var movieList = JSON.parse(movies);
console.log(movieList);

function movieGeneration(movieList){

    let cards = "";

    for (let i = 0; i < movieList.length; i++){
    
        
        cards += `
        
            <div class="card m-4 bg-dark text-white" style="max-width: 540px;">
                <div class="row">
                    <div class="col-md-4">
                    <img src="${movieList[i].image}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body height">
                            <h3 class="card-title">${movieList[i].movieName}</h3>
                            <p class="card-text">${movieList[i].description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-secondary">Length: ${movieList[i].length}</li>
                                <li class="list-group-item bg-secondary">Genre(s): ${movieList[i].genre}</li>
                                <li class="list-group-item bg-secondary">Release: ${movieList[i].release}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-btm d-flex justify-content-evenly">
                        <div  id="btn">
                            <button  class="btn-own text-success" style="background-color: transparent;">
                                <i class="fas fa-thumbs-up"></i>Like 
                            </button>  
                        </div>
                        <span id="counter" class="badge likes text-success bg-light">${movieList[i].likes}</span>
                    </div>
                </div>
            </div>
        `
      }
    return cards 
}

document.getElementById("entry").innerHTML += movieGeneration(movieList);

// --------Like Button and Live Counter----------

let likeBtn = document.querySelectorAll("#btn");

likeBtn.forEach(function(currentBtn){

    currentBtn.addEventListener("click", function(){

        let like = this.parentNode.querySelector("#counter").innerHTML;

        like = parseInt(like);
        
        this.parentNode.querySelector("#counter").innerHTML = like + 1;
    })
})