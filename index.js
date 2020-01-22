/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timestr){
  let hours = parseInt(timestr.split(":"));
  let msg='';
  if(hours <12){
    msg = "Good Morning"
    return msg;
    }
    else if(hours==12 || hours < 17 ){
      msg="Good Afternoon";
      return msg;
    }
    else{
        msg="Good Evening";
        return msg;
    }
}
function displayMessage(message){
 // let val = document.getElementById('greeting');
 // document.getElementById("greeting").innerHTML = message;
    document.getElementById("greeting").innerText = message;
}