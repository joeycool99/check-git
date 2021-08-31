// var prm = (url) => {
//     return new Promise((response, reject) => {
//         setTimeout(() => {
//             response()
//         }, 1000);
//     })

// }

// prm("wwwbooks/book")
//     .then(() => {
//         console.log("done")
// //     })
// var a = function (number) {
//     for (var i = 0; i <= number.length - 1; i++) {
//         var isPrime = true;

//         if (number[i] === 1) {
//             console.log("1 is neither prime nor composite number.");
//         }
//         else if (number[i] > 1) {

//             for (let j = 2; j < number[i]; j++) {
//                 if (number[i] % i == 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if (isPrime) {
//                 console.log(`${number[i]} is a prime number`);
//             } else {
//                 console.log(`${number[i]} is a not prime number`);
//             }
//         }
//     }
// }
// a([5, 6, 4, 2, 1])


// function check_palindrome(str) {
//     let j = str.length - 1;
//     for (let i = 0; i < j / 2; i++) {
//         let x = str[i];
//         let y = str[j - i];
//         if (x != y) {
//             return false;
//         }
//     }
//     return true;
// }


// v




// function arr(ar) {
//     for (var i = 0; i <= ar.length - 1; i++) {
//         var k = ar[i].length - 1
//         for (var j = 0; j <= k / 2; j++) {
//             if (ar[i][j] == ar[i][k]) {
//                 return flase
//             }
//         }
//         return true
//     }
// }


// var array=["x","w","d","w","x"];  
// function filterDuplicates(new_array){  
// return new_array.filter((value,index) =>new_array.indexOf(value)===index);  
// }  
// console.log(filterDuplicates(array));  

// const arr = [1, 3, 2, 5, 10];
// const isPrime = num => {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return num !== 1;
// };
// let odds = arr.filter(element => isPrime(element));
// console.log(odds)


function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;

}

Color.prototype.rgb = function () {
    const { r, g, b } = this
    return (`rgb(${r},${g},${b})`)
}

const color1 = new Color(255, 6, 87)