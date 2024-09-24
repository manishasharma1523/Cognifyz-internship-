/*function for calculator..........................*/
const colors = ['lightblue','lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink', 'lightsalmon'];
let colorIndex = 0;
function changeColor(){
    const btn = document.getElementById("colorBtn");
    colorIndex = (colorIndex + 1) % colors.length;
    btn.style.backgroundColor = colors[colorIndex];

}
/* function for greeting..............................................*/
function displayGreeting(){
    const hours = new Date().getHours();
    let greeting;
    if(hours <12){
        greeting = 'Good Morning';
    }else if (hours <18) {
        greeting = "Good Afternoon";
    }else{
        greeting = "Good Evening";
    }
    alert(greeting);
}


/*function for calculator....................................*/
function calculateSum(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if(!isNaN(num1)&& !isNaN(num2)){
        const sum = num1 + num2;
        document.getElementById("result").innerText = "Result:" +sum;
    }else {
         document.getElementById("result").innerText = "Please enter valid numbers.";
    }
}