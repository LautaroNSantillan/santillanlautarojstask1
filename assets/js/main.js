function main() {

    let allEvents = [].concat(data.events);
    let pastEvents = [];
    let upcomingEvents = [];
    let arrEvents = generateCards();

    let sectionCards = document.getElementById("aevents")
    const searchBar = document.getElementById("search-bar")
    const checkBoxDiv = document.getElementById("check-search")

    checkBoxDiv.addEventListener('change', crossFilter)
    searchBar.addEventListener('input', crossFilter)


    filterEventsDate(data)
    function filterEventsDate(eventObj) {
        for (let event of eventObj.events) {
            if (event.date <= eventObj.currentDate) {
                pastEvents.push(event)
            } else {
                upcomingEvents.push(event)
            }
        }
    }


    function generateCards() {
        if (document.location.pathname == "/index.html") {
            return allEvents
        } else if (document.location.pathname == "/past_events.html") {
            return pastEvents
        } else if (document.location.pathname == "/upcoming_events.html") {
            return upcomingEvents
        } 
    }

    function textSearch(input) {
        let textFilter = arrEvents.filter(event => event.name.toLowerCase().includes(input.value.toLowerCase()))
        return textFilter
    }

    function checkSearch(arr) {
        let checkFilter;
        const checkBox = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
        let arrCheckBox = checkBox.map(i => i.value)

        if (checkBox.some(c => c.checked)) {
            checkFilter = arr.filter(event => arrCheckBox.includes(event.category))
            console.log("filtering")
        } else {
            checkFilter = arr
            console.log("NOTfiltering")

        } return checkFilter
    }

    function crossFilter() {
        const filterBySearch = textSearch(searchBar)
        const filterByCheck = checkSearch(filterBySearch)
        renderCards(filterByCheck, sectionCards)
        if (filterByCheck.length === 0) {
            let noRes = `<h2 class="alert">No results available :(   ...</h2>`
            generateNoResults(noRes)
        }
    }

    renderCards(generateCards(), sectionCards);
    function renderCards(arr, place) {
        place.innerHTML = generateTemplate(arr)
    }


    function generateNoResults(msg) {
        sectionCards.innerHTML = msg
    }


    const noRepeatCategories = Array.from(new Set(data.events.map(e => e.category)))
    checkBoxDiv.innerHTML = generateCheckbox(noRepeatCategories)

    function generateCheckbox(arr) {
        let templateCheck = ""
        arr.forEach(category => {
            templateCheck += `<div class="form-check d-flex form-switch">   
        <label class="form-check-label">${category}
        <input class="form-check-input" type="checkbox" value="${category}">
        </label>
        </div>`
        })
        return templateCheck
    }



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
}