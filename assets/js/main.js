
let allEvents = [].concat(data.events)
let pastEvents = []
let upcomingEvents = []
let arrEvents = generateCards();

/*   FILTER BY DATE*/
function filterEventsDate(eventObj) {
    for (let event of eventObj.events) {
        if (event.date <= eventObj.currentDate) {
            pastEvents.push(event)
        } else {
            upcomingEvents.push(event)
        }
    }
}


/* GENERATE CARDS ACCORDING TO PAGE */
filterEventsDate(data)
function generateCards() {
    if (document.location.pathname == "/index.html") {
        return allEvents
    } else if (document.location.pathname == "/past_events.html") {
        return pastEvents
    } else if (document.location.pathname == "/upcoming_events.html") {
        return upcomingEvents

    }
}

let sectionCards = document.getElementById("aevents")
const searchBar = document.getElementById("search-bar")
const checkBoxDiv = document.getElementById("check-search")


checkBoxDiv.addEventListener('change', crossFilter)
searchBar.addEventListener('input', crossFilter)
document.addEventListener("DOMContentLoaded", function () {
    renderCards(generateCards(), sectionCards);
});


const noRepeatCategories = Array.from(new Set(data.events.map(e => e.category)))
checkBoxDiv.innerHTML = generateCheckbox(noRepeatCategories)


function textSearch(input) {
    let textFilter = arrEvents.filter(event => event.name.toLowerCase().includes(input.value.toLowerCase()))
    return textFilter
}

function checkSearch(arr) {
    let checkFilter;
    const checkBox = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    let arrCheckBox = checkBox.map(i => i.value)
    checkFilter = arr.filter(event => arrCheckBox.includes(event.category))
    return checkFilter
}


function crossFilter() {
    const checkBoxcross = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    if (searchBar.value !== "" && checkBoxcross.some(c => c.checked)) {
        let filteredSearch = textSearch(searchBar)
        let filteredCheck = checkSearch(filteredSearch)
        renderCards(filteredCheck, sectionCards)
        if (filteredCheck.length === 0) {
            let noRes = `<h2 class="alert">No results available :(   ...</h2>`
            generateNoResults(noRes)
        }
    } else if (searchBar.value !== "" && checkBoxcross.every(c => !c.checked)) {
        let filteredSearch = textSearch(searchBar)
        renderCards(filteredSearch, sectionCards)
        if (filteredSearch.length === 0) {
            let noRes = `<h2 class="alert">No results available :(   ...</h2>`
            generateNoResults(noRes)
        }
    } else if (searchBar.value === "" && checkBoxcross.some(c => c.checked)) {
        let filteredCheck = checkSearch(arrEvents)
        renderCards(filteredCheck, sectionCards)
        if (filteredCheck.length === 0) {
            let noRes = `<h2 class="alert">No results available :(   ...</h2>`
            generateNoResults(noRes)
        }
    }
    else {
        renderCards(arrEvents, sectionCards)
    }
}

function renderCards(arr, place) {
    place.innerHTML = generateTemplate(arr)
}

function renderCardsCheck(arr, place) {
    place.innerHTML += generateTemplate(arr)
}

function generateNoResults(msg) {
    sectionCards.innerHTML = msg
}

/*    TEMPLATES    */

function generateTemplate(eventObj) {
    let template = ''
    eventObj.forEach(event => {
        innertemplate = ` 
                <div class=" col-12 col-md-6 col-xl-4 cardsTopBot">
                    <div class="card w-100">
                        <img src="${event.image}" class="img-card" alt="${event.category}">
                        <div class="card-body">
                        <h4 class="card-title">${event.name}</h4>
                        <p class="card-text">${event.description}</p>
                                <div class="price-btn">
                                    <p> Price: $${event.price}</p>
                                    <a href="./details.html?id=${event._id} " class="btn btn-primary">Details</a>
                                </div>
                        </div>
                    </div>
                </div>           
    `
        template += innertemplate
    }); return template
}

function generateCheckbox(arr) {
    let templateCheck = ""
    arr.forEach(category => {
        templateCheck += `<div class="form-check d-flex ">   
        <label class="form-check-label">${category}
        <input class="form-check-input" type="checkbox" value="${category}">
        </label>
        </div>`
    })
    return templateCheck
}


