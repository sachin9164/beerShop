var addedItems= 0
var x= ''
document.getElementById("button-addon2").addEventListener("click",()=>{
    

    
    var query = document.getElementById('input').value
    console.log(query)
  

    function Get(yourUrl){
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    }
    var json_obj = JSON.parse(Get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+query));
    console.log(json_obj.drinks[0]);

    var date = new Date().getHours() + " : " + new Date().getMinutes()
    for (let i = 0; i <10; i++) {
        document.getElementById('card').insertAdjacentHTML('afterend','<div  class="card text-white bg-dark mb-3" style="max-width: 640px;"> <div class="row no-gutters"> <div class="col-md-4"> <img src="'+json_obj.drinks[i].strDrinkThumb+'" class="card-img" alt="...">  </div> <div class="col-md-8"> <div class="card-body"> <h5 class="card-title">'+json_obj.drinks[i].strDrink+'</h5>  <p class="card-text">'+json_obj.drinks[i].strInstructions+'</p> <button type="button" id="btn" class="btn btn-success">Add to Cart</button><br/> <p class="card-text"><small class="text-muted">Last updated '+date+' ago</small></p> </div> </div> </div></div>')
        console.log(json_obj.drinks[0]);  
   }
   
   var btnArray =  document.querySelectorAll("#btn")
   btnArray.forEach(button=>{
  
       button.addEventListener('click',increment)
   })


})

function increment(e) {
   
    var parentNode = e.currentTarget.parentNode
   console.log( parentNode.innerHTML)
    
    addedItems++;
    document.getElementById("item").innerHTML = addedItems;
    }
