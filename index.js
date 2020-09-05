let DOM_node = document.getElementById("node")

DOM_node.style.height = '100px';
DOM_node.style.width = '100px';
DOM_node.style.background = 'red';
DOM_node.classList = 'new-node';



var newDiv = document.createElement("div");
newDiv.innerText = `<h1>Привет! ${newDiv} </h1>`
document.body.insertBefore(newDiv, DOM_node);
console.dir(newDiv)


alert('залезло сноружи и шивелится');
let number = 0;
let logic_Variable_true = true;
let logic_Variable_false = false;

console.log(true?true:false)
console.log(logic_Variable_true?`${number}`:false)
console.log(!logic_Variable_true?`${number}`:false)
console.log(`${number}`)

if(number){
  console.log(` Тут: let number = 1000;`)
}

if (!logic_Variable_true) {
  console.log(`И вправду: ${'let logic_Variable_true = true;'}`)
}
else {
  console.log('or any')
}


if(!logic_Variable_false){
  console.log('!')
}

if (!(true && false)) {
  console.log('!!!!')
}

if ((true || (false && (true && false)))) {
  console.log('!!!!')
}

if (false || true && false) {
  console.log('!!!!')
}





// Write a function "greet" that returns "hello world!"
// let hello = "hello world!";
// let her = ' idi na{} her';
// let arr_strings = [' idi na her', "hello world!"];
// let arr_variable =[hello, her ]
// console.log(arr_strings)
// console.log(arr_variable)

// console.log(arr_variable[0] + arr_variable[1])



// function letterInWords(str) {
//     let strLen = str.length
//     for (let index = 0 ; index < strLen; index+=1){
//         console.log(`${str[index]}         ${index} `);
//     }
//   return str;
  
// }

// letterInWords(arr_variable)

// let length_string_hello = hello.length

// for (let index = 0 ; index < length_string_hello; index+=1){
//     console.log(`${hello[index]}         ${index} `);
// }

// console.log(greet(hello));

// let bukva = `${hello[0]} first letter in string`
// console.log(bukva)

// for (let index = 0, index <  )