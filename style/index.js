// function main(){
// console.log(fetch('https://swapi.dev/api/people'))
// }
 //let arr = []

elementRow = document.getElementById('rowitem')
fetch('https://swapi.dev/api/people')
.then(res=> res.json())

.then(data => {

   //console.log(data)
    let apiresult = data['results']
    for(let i=0; i < apiresult.length; i++){
        //console.log(apiresult[i])
        elementRow.innerHTML += 
            `
             <div class="col-sm-4 designe">
             <div class="card" style="margin-top:20px;">
             <img src="image/${i+1}.jpeg" alt="No image">
                    <div class="card-body">
                        <h4 style="text-align:center;" class="card-title">${apiresult[i]['name']}</h4>
                        <p class="card-text"></p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                        Preview  
                      </button>
                      </div>
                    </div>
                    </div> 
                </div>

                    


                
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content" style="height: 500px;" >
                            <div class="modal-header">
                              <h5 class="modal-title line-1 anim-typewriter" id="exampleModalLabel">Meet The star war⭐</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body house">
                                 
                              <div class="row">
                                  <div class="col-sm-6">
                                    <div class="card">
                                      <div class="card-body house hmmm">
                                      <img src="image/${i+1}.jpeg" alt="No image">
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="card">
                                     <div class="card-body">
                                      <p class="mani">Full Name: ${apiresult[i]['name']}</p>
                                      <p class="mani">Gender: ${apiresult[i]['gender']}</p>
                                      <p class="mani">Height: ${apiresult[i]['height']}</p>
                                       
                                    </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-12">
                                  <div class="card">
                                    <div class="card-body house">
                                          <div class="favs">
                                          <h3 class="social"> Follow on:</h3>
                                          <a><i class="fab fa-linkedin-in fa-5x"></i></a>
                                          <a><i class="fab fa-facebook fa-5x"></i></a>
                                          <a><i class="fab fa-twitter fa-5x"></i></a>
                                       </div>
                                    </div>
                                  </div>
                                </div>
                                </div>




                                 
                            </div>
                            <div class="modal-footer">
                              <button type="button"  style="background-color:#1877f2;" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                                   
            `

    
    }

});

// module.exports = {main}