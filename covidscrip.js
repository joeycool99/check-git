var request = new XMLHttpRequest();
request.open("GET", "https://api.covid19api.com/summary", true)
request.send()
request.onload = function () {
    var data = JSON.parse(this.response)

    var newconfiremed = data.Global.NewConfirmed
    var TotalConfirmed = data.Global.TotalConfirmed
    console.log(`The new confirmed cases are ${newconfiremed}`)
    console.log(`The total confirmed cases are ${TotalConfirmed}`)
}