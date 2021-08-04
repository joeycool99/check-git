

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    for (var i = 0; i < 250; i++) {
        try {


            var cname = data[i].name;
            var lang = data[i].latlng;
            if (lang.length === 0) throw new Error("long is not defined")
            weatherdata(cname, ...lang)
        }
        catch (e) {
            console.log("error has be handdled" + cname + " " + e.message)
        }
    }
}

function weatherdata(name, lat, lang) {
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=750580de96042e3c2d1b47415f32ca40`, true);
    request.send();
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(`${name} : ${data.main.temp} `);
    }
}