function Large() {
    var first=Number(document.getElementById("number1").value);
    var second=Number(document.getElementById("number2").value);
    var third=Number(document.getElementById("number3").value);
    var large;
    if (first>=second && first>=third) {
        large=first
        
    }
    else if(second>=third && second>=first){
        large =second;
    }
    else if(third>=first&& third>=second){
        large=third;
    }
    else{
        large=noone;
    }
    document.getElementById("lg").innerHTML="large no is:"+large;
}
function Large1() {
    var first=Number(document.getElementById("num1").value);
    var second=Number(document.getElementById("num2").value);
    var large;
    if(first>=second){
        large=first;
    }
    else{
        large=second;
    }
    document.getElementById("lg1").innerHTML="large no is:"+large;
    
}
function Loop() {
    var first=Number(document.getElementById("numb1".value));
    var second=Number(document.getElementById("numb2").value);
    var number="";
    while(first<=second){
       number+=first+"<br>";
        first+=1;
    }
    document.getElementById("click").innerHTML="print all natural number"+number;
    
}
//Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
function Loop2() {
    var first=Number(document.getElementById("numb3").value);
    var second =Number(document.getElementById("numb4").value);
    var number="";
    while(first>=second){
        number+=first+"<br>";
        first-=1;
    }
    document.getElementById("click2").innerHTML="inverse of n number:"+number;
    
}
// Write a js program to print all alphabets from a to z. - using while loop
// function Loop3() {
//     var first=charCode(document.getElementById("char").value.charCodeAt(0));
//     var charcode=65
//     var second=charCode1(document.getElementById("char1").value.charCode1At(0));
//     var charCode1=90;
//     var charCode2="";
//     if (charCode<=charCode1) {
//         while (charCode<=charCode1) {
//             charCode2+=String.fromCharCode(charCode)+"<br>";
//             charCode+=1
            
//         }
//         document.getElementById("click3").innerHTML="print the alphbet"+charCode2;
//     }
//     else{
//         document.getElementById("click3").innerHTML="the char1 should not is equal to the char2"
//     }
    
    
   
// }







//Write a js program to print all even numbers between 1 to 100. - using while loop
function Loop4() {
    var first=Number(document.getElementById("numb5").value);
var second=Number(document.getElementById("numb6").value);
var result="";
if (first%2!==0) {
    first+=1;
    
}
while (first<=second) {
    console.log(first)
   result+=first+"<br>";
    first+=2;
    
}
document.getElementById("click4").innerHTML="print all even number"+result;
}


//Write a js program to print all even numbers between 1 to 100. - using while loop


function Loop5() {
    var first=Number(document.getElementById("numb7").value);
    var second=Number(document.getElementById("numb8").value);
    var result="";
    if (first%2==0) {
        first+=1;
        
        
    }
    while (first<=second) {
        console.log(first)
        result+=first+"<br>";
        first+=2
        
    }
    document.getElementById("click5").innerHTML="print all odd number"+result;
    
}


// Write a js program to find sum of all natural numbers between 1 to n

function Loop6() {
    var first = Number(document.getElementById("numb9").value);

    var second = Number(document.getElementById("numb10").value) 
    if (first <= second) {
        let sum = 0;
        for (let i = first; i <= second; i++) {
            sum += i;
        }
        document.getElementById("click6").innerHTML = "Sum of natural numbers: " + sum;
    } else {
        document.getElementById("click6").innerHTML = "The first number should be less than or equal to the second number.";
    }
}


function Loop7() {
    var first=Number(document.getElementById("numb11").value)
    var second=Number(document.getElementById("numb12").value)
    if (first%2!==0) {
        first+=2
        
    }
    else if(first<=second){
        let sum=0;
        for(let i =first;i<=second;i+=2){
            sum+=i;
            
        }
        document.getElementById("click7").innerHTML="sum of all even number:"+sum;
    }
    else{
        document.getElementById("click7").innerHTML="put the valid input";
    }
    
    
}

function Loop8() {
    var  first=Number(document.getElementById("numb13").value);
    var second=Number(document.getElementById("numb14").value);
    if(first%2==0)
        first+=1;
    else if(first<=second){
        let sum=0;
       for(let i=first; i<=second; i+=2){
        sum+=i;
       }
       document.getElementById("click8").innerHTML="sum of all odd number"+sum,i;
    }
    
    
}


//Write a js program to check whether a number is negative, positive or zero.
function check() {
    var first=Number(document.getElementById("num3").value);
    if(first>=1){
        document.getElementById("check").innerHTML="this number is positive";
    }
    else if(first<=-1){
        document.getElementById("check").innerHTML="this number is nagitive";
    }
    else{
        document.getElementById("check").innerHTML="this number is zero";
    }

    
}


// Write a js program to check whether a number is divisible by 5 and 11 or not.
function check1() {
    var num1=Number(document.getElementById("num4").value);
    // var num2=Number(document.getElementById("num"))
    if (num1%5==0&&num1%11==0) {
        document.getElementById("check1").innerHTML="the number is divisible:";
        
    }
    else{
        document.getElementById("check1").innerHTML="check an other number";
    }
}

// Write a js program to check whether a number is even or odd.
function check2() {
    var num1=Number(document.getElementById("num5").value);
    if(num1%2==0){
        document.getElementById("check2").innerHTML="this is even number";
    }
    else{
        document.getElementById("check2").innerHTML="this is odd number";
    }
    
}


//Write a js program to check whether a year is leap year or not 
function check3() {
    var year=Number(document.getElementById("num6").value);
    if (year%4==0&&year%100!==0 || year%400==0) {
        document.getElementById("check3").innerHTML="this year is leap";
        
    }
    else{
        document.getElementById("check3").innerHTML="this year is not leap";
    }

    
}



// a js program to check whether a character is alphabet or not. --
function check4() {
    var char=document.getElementById("num7").value;
    if(char>="a"&&char<="z"){
        document.getElementById("check4").innerHTML="this is small alphabet";
    }
    else if(char>="A"&& char<="Z"){
        document.getElementById("check4").innerHTML="this is large alphabet";
    }
    else{
        document.getElementById("check4").innerHTML="this is not alphabet";
    }
}

//  Write a js program to input any alphabet and check whether it is vowel or consonant.
function check5() {
    var char = document.getElementById("num8").value;
    var result;
    
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            result = "This is a vowel";
            break;
        default:
            result = "This is a consonant";
            break;
    }

    document.getElementById("check5").innerHTML = result;
}
    //   !-- Write a js program to input any character and check whether it is alphabet, digit or special character.
   function check6() {
    var character =document.getElementById("num9").value;
    if((character>='a'&&character<='z')||(character>='A'&&character<='Z')){
        document.getElementById("check6").innerHTML="this is alphabet";
    }
    else if(character>='0'||character<='9'){
        document.getElementById("check6").innerHTML="this is digit";

    }
    else{
        document.getElementById("check6").innerHTML="this is special character"
    }
    
   }

//     Write a js program to check whether a character is uppercase or lowercase alphabet.
function check7() {
    var char=document.getElementById("num10").value;
    if (char>='a'&&char<='z') {
        document.getElementById("check7").innerHTML="this is lower alphabet";
        
    }
    else if(char>='A'&&char<='Z'){
        document.getElementById("check7").innerHTML="this is upper alphabet"
    }
    else{
        document.getElementById("check7").innerHTML="put the valid value";
    }
}

//  Write a js program to input week number and print week day

function week() {
    var weekNumber=parseInt(document.getElementById("week").value);
    let weekday;
    switch(weekNumber){
        case 1:
            weekday="sunday";
            break;
            case 2:
                weekday="monday";
                break;
                case 3:
                    weekday="tuesday";
                    break;
                    case 4:
                        weekday="wednessday";
                        break;
                        case 5:
                            weekday="thursday";
                            break;
                            case 6:
                                weekday="friday";
                                break;
                                case 7:
                                    weekday="saturday";
                                    break;
                                    
                                    default:
                                        document.getElementById("week1").innerHTML="put valid value"
                                        break;
                                        return;
    }

    document.getElementById("week1").innerHTML=weekday;

}


// Write a js program to input month number and print number of days in that month.
function month() {
    var month=Number(document.getElementById("month").value);
    var year=Number(document.getElementById("month").value);
    var days;
    switch (month) {
        case 1://januery
        case 3:
            case 5:
                case 7:
                    case 8:
                        case 10: 
                             case 12: 
                             days= 31;
            break;
          case 4:
            case 6:
                case 9:
                    case 11:
                        days=30;
                        break;
                        case 2:
                            if (year%4==0 && year%100!==0||year%400==0) {
                               
                               days=29;
                            
                        
                                
                            }  
                            else{
                               days=28;
                            }
    break;
        default:
            document.getElementById("put the valid month..")
            break;
    }
   if (typeof days=="number") {
    
    document.getElementById("month1").innerHTML="this month has"+days+"days.";
    
   } else {
    document.getElementById("month1").innerHTML=days;
   }
}





function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if username and password are correct (for demonstration purpose)
    if (username === "user" && password === "password") {
        // Redirect to another page
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}


function angle() 
{
    var angle1=Number(document.getElementById("angle1").value);
    var angle2=Number(document.getElementById("angle2").value);
    var angle3=Number(document.getElementById("angle3").value);
    if (angle1<=0||angle2<=0||angle3<=0) {
  document.getElementById("angle01").innerHTML="put the valid value";
        
    }
    else if (angle1+angle2+angle3===180) {
     document.getElementById("angle01").innerHTML="this is show the triangle";
    
    
        
    }
    else{
      document.getElementById("angle01").innerHTML="this is not a traingale put and other value"
    }
   
    
}

// Write a js program to input all sides of a triangle and check whether triangle is valid or not.


function sides() 
{
    var a=Number(document.getElementById("sides1").value);
    var b=Number(document.getElementById("sides2").value);
    var c=Number(document.getElementById("sides3").value);
    if(a<=0||b<=0||c<=0){
        document.getElementById("sides01").innerHTML="put the valid value"
    }
    else if((a+b+c)==180){
        

    }
}