function myFunction(){
    document.getElementById("demo1").innerHTML="david"
    document.getElementById("demo2").innerHTML="emeka"
    document.getElementById("demo3").innerHTML="oweh" 
       
}

var cars = ["saabs","volvo","bmw","bentley","ferrari","lamborgini","toyota"];
document.getElementById("demo4").innerHTML=cars[0];


var person = {firstName: "david", 
lastName:"oweh",
age:31,
eyeColor:"blue"
}; document.getElementById("demo5").innerHTML=person.firstName+ " is "+ person.age + "years old.";

var today, someday,text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0,14)
if (someday > today) { text = "today is before january,2100 14."
    
}
else{ text= "today is after january,2100 14.";

}
document.getElementById("demo7").innerHTML= text;






