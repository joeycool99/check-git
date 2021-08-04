var todo = []
var userInput = prompt("enter what you want to do")
while (userInput != "quit") {
    if (userInput == "new") {

        var newval = prompt("enter you plan")
        while (newval != "quit") {
            todo.push(newval);
            var newval = prompt("enter you plan")
        }
    }
    if (userInput == "list") {
        for (i = 0; i < todo.length; i++) {
            console.log(`${i} ${todo[i]}`)
        }
    }
    if (userInput == "delete") {
        var index = parseInt(prompt("enter num to removr"))
        todo.splice(index, 1)
    }
    var userInput = prompt("enter what you want to do")
}

