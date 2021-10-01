/* 
In this javascript file is where we:
- grab the values to calculate (from html)
- get the result of the operation (using WASM)
- show the result on the page (to html)
*/



// declare variables to use for calculations
var add1, add2, sub1, sub2, div1, div2, mul1, mul2;

// declare variables for result values
let add, sub, mul, div;


// next 4 functions work the same
// they just perform the different operations!
// I have comments for the add operation :)


// the function is called when button in html file is pressed
function addResult(){
    console.log("add function executing");

    // the 2 variables are given values from html
    // using jQuery, we get the value from respective input tags
    add1=$('#a1').val();
    add2=$('#a2').val();

    // here we fetch the file, main.wasm
    // and then make an instance of it to work with

    fetch('main.wasm').then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes)).then(results => {
      instance = results.instance;

      // we then make the variable equal to the result of what the function would return
      // in this case, the add function is just:
      // float add(float x, float y) { return x+y; }
      // which would be the sum here.
      add=instance.exports.add(add1,add2);
      console.log("Result: " + add);

      // here we set just make the result show on the webpage
      // using javascript this time, because why not
      document.getElementById('addResult').innerHTML=add;
    })
    // make sure to catch the errors in case there are any
    .catch(console.error);    
}


// Remember these other functions work the same way!
function subResult(){
    console.log("sub function executing");
    sub1=$('#s1').val();
    sub2=$('#s2').val();

    fetch('main.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
      instance = results.instance;
      sub=instance.exports.sub(sub1,sub2);
      console.log("Result: " + sub);
      document.getElementById('subResult').innerHTML=sub;
    }).catch(console.error);    
}

function divResult(){
    console.log("div function executing");
    div1=$('#d1').val();
    div2=$('#d2').val();

    fetch('main.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
      instance = results.instance;
      div=instance.exports.div(div1,div2);
      console.log("Result: " + div);
      document.getElementById('divResult').innerHTML=div;
    }).catch(console.error);    
}

function mulResult(){
    console.log("mul function executing");
    mul1=$('#m1').val();
    mul2=$('#m2').val();

    fetch('main.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
      instance = results.instance;
      mul=instance.exports.mul(mul1,mul2);
      console.log("Result: " + mul);
      document.getElementById('mulResult').innerHTML=mul;
    }).catch(console.error);    
}