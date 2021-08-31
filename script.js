

// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// request.send();
// request.onload = function () {
//     var data = JSON.parse(this.response);
//     console.log(data);
//     for (var i = 0; i < 250; i++) {
//         try {


//             var cname = data[i].name;
//             var lang = data[i].latlng;
//             if (lang.length === 0) throw new Error("long is not defined")
//             weatherdata(cname, ...lang)
//         }
//         catch (e) {
//             console.log("error has be handdled" + cname + " " + e.message)
//         }
//     }
// }

// function weatherdata(name, lat, lang) {
//     var request = new XMLHttpRequest();
//     request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=750580de96042e3c2d1b47415f32ca40`, true);
//     request.send();
//     request.onload = function () {
//         var data = JSON.parse(this.response);
//         console.log(`${name} : ${data.main.temp} `);
//     }
// }



// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// request.send();
// request.onload = function () {
//     var data = JSON.parse(this.response);

// var but = document.querySelector("button")
// var ul = document.querySelector("ul")
// var req = async () => {
//     var config = {
//         headers: { Accept: "application/json" }
//     }
//     var res = await axios.get('https://icanhazdadjoke.com/', config)
//     var li = document.createElement("li")
//     li.innerText = (res.data.joke);
//     ul.append(li)
// }
// but.addEventListener("click", () => req())




const form = document.querySelector("form")
form.addEventListener("submit", async function (e) {

    e.preventDefault()
    var search = form.elements.query.value
    var data = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
    newimg(data.data)
    form.elements.query.value = ""

})

var newimg = (show) => {
    for (var img of show) {
        if (img.show.image) {
            var image = document.createElement("IMG")
            image.src = img.show.image.medium
            document.body.append(image)
        }
    }
}

String.prototype.yell = function () {
    console.log(this.toUpperCase())
}


Array.prototype.pop = function () {
    console.log("i love you")
}