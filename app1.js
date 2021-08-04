var prm = (url) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response()
        }, 1000);
    })

}

prm("wwwbooks/book")
    .then(() => {
        console.log("done")
    })

