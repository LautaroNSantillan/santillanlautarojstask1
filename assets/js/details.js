function details(){

const detailsDiv= document.getElementById("details-div")
let urlParam = location.search//str
let params = new URLSearchParams(urlParam)//obj
let id = params.get("id")
let foundId= data.events.find(e=>e._id==id)
console.log(foundId)

function assistanceOrEstimate(e){
    let show= e.assistance? `Assistance: ${e.assistance}` : `Estimate: ${e.estimate}`
    return show
}

function createDetails(e,place){
    
    let div = document.createElement("div")
    div.innerHTML=` 
    <div class="details-div">
    <img src="${e.image} "  alt="EVENT">
    <div class="p-h3">
        <h3> ${e.name}</h3>
        <p>${e.description}</p>
        <p>Category: ${e.category}</p>
        <p>Place: ${e.place}</p>
        <p>Capacity: ${e.capacity}</p>
        <p>${assistanceOrEstimate(e)}</p>
        <p>Price: ${e.price}</p>
        <p>Date: ${e.date}</p>
    </div>
</div>      
`
place.appendChild(div)
}

createDetails(foundId, detailsDiv)
 }