//print
{
    // print on console 
    console.log("vansh patel");
}
// var 
{
    var fullName = "vansh patel";

    var courseName = "React JS Bootcamp";

    var isLoggedIn = true;

    var loggedCount = 34;
    console.log(loggedCount);

    var paymentMode;
    console.log(paymentMode);   // undefined
    paymentMode = "Credit Card";
    console.log(paymentMode);   // Credit Card

    const uid = "abc123";
    // const change is not allowed 

}
// user signUp
{
    const uid = "abc123";
    var fullName = "vansh patel";
    var email = "vanshpatel1299@gmail.com";
    var password = "12345678";
    var consfirmPassword = "12345678";
    var courseCount = 0;
    var isLoggedInFromGoogle = false;

    console.log(uid);
    console.log(fullName);
    console.log(email);
    console.log(password);
    console.log(courseCount);
    console.log(isLoggedInFromGoogle);

}

// VANSH PATEL 
// IS ONE OF THE BEST BUSINESSMEN & TEACHER
// I ALWAYS WANT TO BE A BUSINESSMEN 
// IF I WANT TO LOVE I ALWAYS LOVE TO JENSI
// I ALWAYS BE THE BEST
// I DO NOT USE INSTA FOR 1 YEAR 
// I STARTED NEW JOUNARY TODAY.

// CALCULATE DISCOUNT 
{
    let sellingPrice = 199;
    let listPrice = 799;
    let discount = (listPrice - sellingPrice)/listPrice * 100;
    let displayDiscount = Math.round(discount);
    console.log("discount perscent is "+displayDiscount+"%");
}
// login if-else
{
    var email = true;
    var facebook = false;
    var google = false;

    if(email || facebook || google){
        console.log("login Successs");
    }
}

// signout if he is authenticated
{
    var authenticated = true;

    if(authenticated){
        console.log("Show SignOut button");
    }else{
        console.log("Show logIn option");
    }

    authenticated ? console.log("SignOut") : console.log("LogIn");
}
// switch case 
{
    // ROLES 
        // 1> admin 
        // 2> subadmin
        // 3> testprep
        // 4> user 
    
    let user = "testprep";
    
    switch(user){
        case "admin" :  console.log("admin panel");
                        break;
        case "subadmin" :  console.log("subadmin panel");
                        break;
        case "testprep" :  console.log("testprep panel");
                        break;
        case "user" :  console.log("user panel");
                        break;
        default : console.log("check input");
    }
}

// strict check use triple ===  (also check dataType)
// loosy chceck use double == 

// function
{
    function sayHello(){
        console.log("Hello there");
    }
    
    sayHello(); // calling function
    // sayHello -> Reference function 


    function say(name){
        console.log("Hello there " + name);
    }
    
    say("vansh"); 


    function namstey(){
        return "Hi, namstey"
    }
    console.log(namstey());

}

// Assignment 1
// Define the function that can answner the role of a user
    // admin -> all access 
    // subadmin -> create and delete courses
    // testprep -> create and delete tests 
    // user -> consume all content 
    // other -> trial user
{
    function getUserRole(name,role){
        switch (role) {
            case "admin":
                return name + " is admin with all access";
            case "subadmin":
                return name + " is subaAdmin with access of create and delete courses";
            case "testprep":
                return name + " is testPrep with all access of create and delete tests";
            case "user":
                return name + " is admin with all access of consume content";
            default:
                return name + " is trial user";
        }
    }

    console.log(getUserRole("vansh","admin"));
    console.log(getUserRole("vansh","subadmin"));
    console.log(getUserRole("vansh","a"));
    console.log(getUserRole("vansh","user"));
}