

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);

    var country = data.filter((el) => el.population < 200000).map(ell => ell.capital)
    var dollor = data.map((elle) => elle.currencies).filter((elle1) => {
        if (elle1.symbol == "$")
            return elle1.name
    })
    var dollor1 = data.filter((elle) => {
        for (var i in elle.currencies) {
            if (elle.currencies[i].code === "USD") {
                return true
            }
        }
    })

    var sumofpop = data.map((elle) => elle.population).reduce((acc, ecc) => acc + ecc)
    console.log(country)
    console.log(dollor)
    console.log(dollor1)
    console.log(sumofpop)
}


