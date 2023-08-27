//Frist Method
const screen = document.getElementById("screen");

//function to get the value of button
function valueButton (e)
{
  screen.value += e;
}
// function for backspacing the value
 function backspace()
 {
  screen.value = screen.value.slice(0,-1);
 }
//  function for allclear screen
 function clearScreen (){
  screen.value = null;
 }
//function for answer
 function calculate()
 {
  //try and catch using for error handling
  try{
    screen.value= eval(screen.value);
  }
  catch{
    screen.value= 'ERROR';
  }
 }

 
////////////////////////////////////////////////////////////.////////////////

// //Second Method

// var screen=document.getElementById("screen");
// var button=document.querySelectorAll('button');
// for (const item of button) {
//   item.addEventListener('click',(e)=>{
//     if (e.target.innerHTML== 'x') {
//            screen.value +='*';      
//     } 
//     else if (e.target.innerHTML== 'AC') {
//       screen.value=null;
//     } 
//     else if (e.target.innerHTML== '=') {
//       screen.value=eval(screen.value)
//     }
//     else{
//       screen.value+=e.target.innerHTML;
//     }
//   })
// }
// function backspace()
//  {
//   screen.value = screen.value.slice(0,-1);
//  }