function loader() {
    window.addEventListener("load", () => {
        const loader = document.querySelector("#loader")
        loader.classList.add("loader-hidden", "loader");
        loader.addEventListener("transitionend", () => {
            loader.remove()
        })
    }
    )
}


let data;
async function getdata() {
    loader()
    const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    const dataAE = await response.json()
    data = dataAE
}


async function loadAPI() {
    await getdata()
  
    stats()
    console.log("dataapi", data)
    
}


loadAPI()