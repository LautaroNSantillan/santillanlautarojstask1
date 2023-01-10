function stats() {
    let allEvents = [].concat(data.events);
    let pastEvents = [];
    let upcomingEvents = [];

    const stats1 = document.getElementById("eStats1")
    const stats2 = document.getElementById("eStats2")
    const stats3 = document.getElementById("eStats3")

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

    function assistanceOrEstimate(e) {
        let show = e.assistance ? e.assistance : 0
        return show
    }

    function createRowStats1(place) {
        let template = ''
        template += ` 
        <tr>
        <td> ${highestAttendance()} </td>
         <td> ${lowestAttendance()} </td>
          <td> ${largestCap()} </td></tr>
    `
        place.innerHTML += template
    } createRowStats1(stats1)

    function highestAttendance() {
        const pastEventArr = data.events.filter(e => assistanceOrEstimate(e)).map(({ name, capacity, assistance }) => ({ name, capacity, assistance }))
        pastEventArr.forEach((e) => {
            e.attendance = e.assistance * 100 / e.capacity
        })
        const eventAttendance = pastEventArr.map(e => e.attendance)
        const minAttendance = Math.min(...eventAttendance)
        const objMinAtt = pastEventArr.find(e => e.attendance === minAttendance)
        return objMinAtt.name + "" + " Attendance: " + Math.round(objMinAtt.attendance) + "%"
    }

    function lowestAttendance() {
        const pastEventArr = data.events.filter(e => assistanceOrEstimate(e)).map(({ name, capacity, assistance }) => ({ name, capacity, assistance }))
        pastEventArr.forEach((e) => {
            e.attendance = e.assistance * 100 / e.capacity
        })
        const eventAttendance = pastEventArr.map(e => e.attendance)
        const maxAttendance = Math.max(...eventAttendance)
        const objMaxAtt = pastEventArr.find(e => e.attendance === maxAttendance)
        return objMaxAtt.name + "" + " Attendance: " + Math.round(objMaxAtt.attendance) + "%"
    }

    function largestCap() {
        const eventArr = data.events.map(({ name, capacity }) => ({ name, capacity }))
        const eventCapacity = eventArr.map(e => e.capacity)
        const maxCapacity = Math.max(...eventCapacity)
        const objMaxCap = eventArr.find(e => e.capacity === maxCapacity)
        return objMaxCap.name + " " + "Capacity: " + objMaxCap.capacity
    }

    function createRowStats2(eventArr, place) {
        let template = '';
        let usedArr = [];
        if (eventArr[0].estimate) {
            usedArr = eventArr.map(({ name, capacity, estimate, price, category }) => ({ name, capacity, estimate, price, category }))
            usedArr.forEach((e) => {
                e.revenue = e.price * e.estimate;
                e.attendance = e.estimate * 100 / e.capacity;
                return usedArr
            })
        } else {
            usedArr = eventArr.map(({ name, capacity, assistance, price, category }) => ({ name, capacity, assistance, price, category }))
            usedArr.forEach((e) => {
                e.revenue = e.price * e.assistance;
                e.attendance = e.assistance * 100 / e.capacity;
                return usedArr
            })
        }

        const objFromArr = usedArr.reduce((acc, cv) => {
            let category = cv.category
            if (acc[category] == null) {
                acc[category] = []
                acc[category].push(cv)
                acc[category].counter = 1
            }
            else if (cv.category === acc[category][0].category) {
                acc[category][0].attendance += cv.attendance
                acc[category][0].revenue += cv.revenue
                acc[category].counter += 1
            }
            return acc
        }, {});
       
        function renderStats() {

            for (let k in objFromArr) {
                for (let e of objFromArr[k]) {
                    
                    template += ` 
            <tr>
            <td> ${e.category} </td> 
            <td> $${e.revenue}</td> 
            <td> ${Math.round(e.attendance / objFromArr[k].counter)}% </td>
            </tr>
        `
                }
            } return template
        }
        place.innerHTML += renderStats()
    }
    createRowStats2(upcomingEvents, stats2)
    createRowStats2(pastEvents, stats3)


}  
