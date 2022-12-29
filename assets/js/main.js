
let allEvents = [].concat(data.events)
let pastEvents = []
let upcomingEvents = []
let foodEvents = []
let museumEvents = []
let costumeEvents = []
let musicEvents = []
let raceEvents = []
let bookEvents = []
let cinemaEvents = []

/*   FILTER BY DATE*/
function filterEventsDate(eventObj) {
    for (let event of eventObj.events) {
        if (event.date <= eventObj.currentDate) {
            upcomingEvents.push(event)
        } else {
            pastEvents.push(event)
        }
    }
    console.log(pastEvents)
    console.log(upcomingEvents)
}

/*    FOOD FAIR   */
function filterEventsFood(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Food Fair") {
            foodEvents.push(event)
        }
    } console.log(foodEvents)
}

/* MUSEUM */
function filterEventsMuseum(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Museum") {
            museumEvents.push(event)
        }
    }
}

/* COSTUME */
function filterEventsCostume(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Costume Party") {
            costumeEvents.push(event)
        }
    }
}

/* MUSIC */
function filterEventsMusic(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Music Concert") {
            musicEvents.push(event)
        }
    }
}

/* RACE */
function filterEventsRace(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Race") {
            raceEvents.push(event)
        }
    }
}

/* BOOK */
function filterEventsBook(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Book Exchange") {
            bookEvents.push(event)
        }
    }
}

/* CINEMA */
function filterEventsCinema(eventObj) {
    for (let event of eventObj.events) {
        if (event.category == "Cinema") {
            cinemaEvents.push(event)
        }
    }
}



filterEventsFood(data)

let sectionCards = document.getElementById("aevents")

console.log(document.location.pathname)


/*    TEMPLATE    */ 
let template = ''
function generateTemplate(eventObj){   
    for (let event of eventObj) {
        template += ` 
                <div class=" col-12 col-md-6 col-xl-4 cardsTopBot">
                    <div class="card w-100">
                        <img src="${event.image}" class="img-card" alt="${event.category}">
                        <div class="card-body">
                        <h4 class="card-title">${event.name}</h4>
                        <p class="card-text">${event.description}</p>
                                <div class="price-btn">
                                    <p> Price: $${event.price}</p>
                                    <a href="./details.html" class="btn btn-primary">Details</a>
                                </div>
                        </div>
                    </div>
                </div>           
    `
    } 
}

/* GENERATE CARDS ACCORDING TO PAGE */ 

filterEventsDate(data)

function generateCards(eventObj, place) {
    if(document.location.pathname =="/home.html"){
        eventObj=allEvents
    }else if(document.location.pathname =="/past_events.html"){
        eventObj=pastEvents
    }else if(document.location.pathname =="/upcoming_events.html"){
        eventObj=upcomingEvents
    }
   generateTemplate(eventObj)
    place.innerHTML = template
}
generateCards(allEvents, sectionCards)








