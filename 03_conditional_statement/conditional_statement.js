// q1 Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.
let n = 15;
if (n % 5 === 0) {
    console.log("Divisible by 5");
}
// q2 
let age = 75;
if (age >= 60) {
    console.log("Senior Citizen");
}
// q3
let s = 200;
if(s >100){
    console.log("Big number")
}
// q4
let temp = -3;
if (temp<10){
    console.log("very cold");
};
// q5
let score = 100
if(score ==100){
    console.log("perfect score");
};
// q6
let num = -21;
if(num<0){
    console.log("Negative number");
};
// q7
let str ="";
if(str==""){
    console.log("No input Provided");
};
// q8
let year = 1200;
if (year % 100 ==0){
    console.log("Century year");
};
// q9
let m= 22;
if (m %2==0 && m>0){
    console.log("positive Even Number");
};
// q10
let mrks =67;
if (mrks>35 && mrks<100){
    console.log("Valid marks")
} 

//  if...else statement
// q1
let no = 12

if (no % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
// q2
let aGe = 33

if (aGe >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
// q3
let number = 24;

if (number > 0) {
    console.log("Positive");
} else {
    console.log("Zero");
}
// q4
let marks = 95

if (marks >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}
// q5
let ch = "s";

if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}
// q6
let nUm =21;

if (nUm % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}
// q7
let password = prompt("Enter password:");

if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}
// q8

let yr = 2028;
if (yr %4 ==0 && yr % 100 !=0 || yr % 400 ==0){
    console.log("year is leap year");
}else{
    console.log("is not a leap year");
};
// q9
let a = 68;
let b = 69;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
// q10
var numb = 23;

if (numb >= 0) {
    if (numb === 0) {
        console.log("Zero");
    } else {
        console.log("Positive");
    }
} else {
    console.log("Negative");
}

// C] if...else if...else Statement
// q1
let month = Number(prompt("Enter month number:"));

if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else if (month == 3 || month == 4 || month == 5) {
    console.log("Summer");
} else if (month == 6 || month == 7 || month == 8) {
    console.log("Monsoon");
} else if (month == 9 || month == 10 || month == 11) {
    console.log("Autumn");
} else {
    console.log("Invalid month");
}
// q2
let income = Number(prompt("Enter your income:"));
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax amount:", tax);

// q3
let sco$re = Number(prompt("Enter score:"));

if (sco$re >= 90) {
    console.log("Outstanding");
} else if (sco$re >= 70) {
    console.log("Good");
} else if (sco$re >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

// q4
let speed = Number(prompt("Enter speed:"));

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}
// q5
let height = Number(prompt("Enter height in cm:"));

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}

// q6
let day = Number(prompt("Enter day number:"));

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day == 6 || day == 7) {
    console.log("Weekend");
} else {
    console.log("Invalid day");
}

// q7
let units = Number(prompt("Enter units:"));
let bill;

if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Total bill:", bill);

// q8
let attendance = Number(prompt("Enter attendance percentage:"));

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

// q9
let mark1 = Number(prompt("Enter first mark:"));
let mark2 = Number(prompt("Enter second mark:"));
let mark3 = Number(prompt("Enter third mark:"));

if (mark1 >= mark2 && mark1 >= mark3) {
    console.log(mark1);
} else if (mark2 >= mark1 && mark2 >= mark3) {
    console.log(mark2);
} else {
    console.log(mark3);
}

// q10
let num$ = Number(prompt("Enter a number:"));

if (num$ == 0) {
    console.log("Zero");
} else if (num$ > 0) {
    if (num$ % 2 == 0) {
        console.log("Positive Even");
    } else {
        console.log("Positive Odd");
    }
} else {
    if (num$ % 2 == 0) {
        console.log("Negative Even");
    } else {
        console.log("Negative Odd");
    }
}

// D. Nested if Statement
// q1
let n$um = Number(prompt("Enter a number:"));

if (n$um > 10) {
    if (n$um % 3 == 0) {
        console.log("Greater than 10 and divisible by 3");
    } else {
        console.log("Greater than 10 but not divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}

// q2
let ag$e = Number(prompt("Enter your age:"));
let voterID = prompt("Do you have voter ID? (yes/no)");

if (ag$e >= 18) {
    if (voterID == "yes") {
        console.log("Can Vote");
    } else {
        console.log("No voter ID");
    }
} else {
    console.log("Not 18 or older");
}

// q3
let ma$rks = Number(prompt("Enter marks:"));

if (ma$rks >= 40) {
    if (ma$rks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}
// q4
let mark$s = Number(prompt("Enter marks:"));

if (mark$s >= 40) {
    if (mark$s >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}

// q5
let yea$r = Number(prompt("Enter year:"));

if (yea$r % 4 == 0) {
    if (yea$r % 100 == 0) {
        if (yea$r % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}

// q6
let email = prompt("Enter email:");

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email length is too short");
        }
    } else {
        console.log("Email must end with .com");
    }
} else {
    console.log("Email must contain @");
}
// q7
let total = Number(prompt("Enter cart total:"));
let premium = prompt("Are you a premium member? (yes/no)");
let discount;
let finalAmount;

if (total >= 1000) {
    if (premium == "yes") {
        discount = total * 0.20;
        finalAmount = total - discount;
    } else {
        discount = total * 0.10;
        finalAmount = total - discount;
    }
} else {
    finalAmount = total;
}

console.log("Final amount:", finalAmount);

// q8
let $num = Number(prompt("Enter a number:"));

if ($num > 0) {
    if ($num % 2 == 0) {
        if ($num % 4 == 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but not divisible by 4");
        }
    } else {
        console.log("Positive Odd");
    }
} else {
    console.log("Not positive");
}

// q9
let a$ge = Number(prompt("Enter age:"));
let degree = prompt("Do you have a graduation degree? (yes/no)");
let experience = Number(prompt("Enter years of experience:"));

if (a$ge >= 21 && age <= 30) {
    if (degree == "yes") {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        } else {
            console.log("Not enough experience");
        }
    } else {
        console.log("Graduation degree required");
    }
} else {
    console.log("Age is not valid");
}

// q10
let present = prompt("Is the student present? (yes/no)");
let internal = Number(prompt("Enter internal marks:"));
let Extrnl = Number(prompt("Enter external marks:"));

if (present == "yes") {
    if (internal >= 30) {
        if (Extrnl >= 35) {
            console.log("Eligible for Final Exam");
        } else {
            console.log("External marks are less than 35");
        }
    } else {
        console.log("Internal marks are less than 30");
    }
} else {
    console.log("Student is absent");
}

// nested if 
// q1
let numBer = 15;

if (numBer > 10) {
    if (numBer % 3 === 0) {
        console.log("Number is greater than 10 and divisible by 3");
    } else {
        console.log("Number is greater than 10 but not divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}
// q2
let age$ = 20;
let voterId = true;

if (age$ >= 18) {
    if (voterId === true) {
        console.log("Can Vote");
    } else {
        console.log("No Voter ID");
    }
} else {
    console.log("Not eligible by age");
}
// q3
let m$arks = 85;

if (m$arks >= 40) {
    if (m$arks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}
// q4
let correctPin = 1234;
let enteredPin = 1234;
let balance = 10000;
let withdrawal = 5000;

if (enteredPin === correctPin) {
    if (balance >= withdrawal) {
        balance = balance - withdrawal;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", balance);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}
// q5
let year$ = 2024;

if (yea$r % 4 === 0) {
    if (year$ % 100 === 0) {
        if (year$ % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}
// q6
let e$mail = "student@gmail.com";

if (e$mail.includes("@")) {
    if (e$mail.endsWith(".com")) {
        if (e$mail.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email length is too short");
        }
    } else {
        console.log("Email must end with .com");
    }
} else {
    console.log("Email must contain @");
}
// q7
let cartTotal = 1500;
let premiumMember = true;
let disco$unt;
let finalAm$ount;

if (cartTotal >= 1000) {
    if (premiumMember === true) {
        disco$unt = cartTotal * 0.20;
    } else {
        disco$unt = cartTotal * 0.10;
    }

    finalAm$ount = cartTotal - discount;

    console.log("Discount:", disco$unt);
    console.log("Final Amount:", finalAm$ount);
} else {
    console.log("No discount");
    console.log("Final Amount:", cartTotal);
}
// q8
let numbe$r = 16;

if (numbe$r > 0) {
    if (numbe$r % 2 === 0) {
        if (numbe$r % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but not Divisible by 4");
        }
    } else {
        console.log("Positive but Odd");
    }
} else {
    console.log("Number is not Positive");
}
// q9
let $age = 25;
let graduation = true;
let ex$perience = 3;

if ($age >= 21 && $age <= 30) {
    if (graduation === true) {
        if (ex$perience >= 2) {
            console.log("Eligible for Interview");
        } else {
            console.log("Not enough experience");
        }
    } else {
        console.log("Graduation degree required");
    }
} else {
    console.log("Age is not valid");
}
// q10
let presen$t = true;
let internalMarks = 35;
let externalMarks = 40;

if (presen$t === true) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        } else {
            console.log("External marks are insufficient");
        }
    } else {
        console.log("Internal marks are insufficient");
    }
} else {
    console.log("Student is not present");
}
// switch
// q1
let mont$h = 2;

switch (mont$h) {
    case 1:
        console.log("31 days");
        break;
    case 2:
        console.log("28 days");
        break;
    case 3:
        console.log("31 days");
        break;
    case 4:
        console.log("30 days");
        break;
    case 5:
        console.log("31 days");
        break;
    case 6:
        console.log("30 days");
        break;
    case 7:
        console.log("31 days");
        break;
    case 8:
        console.log("31 days");
        break;
    case 9:
        console.log("30 days");
        break;
    case 10:
        console.log("31 days");
        break;
    case 11:
        console.log("30 days");
        break;
    case 12:
        console.log("31 days");
        break;
    default:
        console.log("Invalid month");
}

// q2
let chr = "a";

switch (chr.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}
// q3
let number$ = 2;

switch (number$) {
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
        console.log("Summer");
        break;

    default:
        console.log("Invalid number");
}
// q4
let mar$ks = 72;

switch (true) {
    case marks >= 75:
        console.log("Distinction");
        break;

    case mar$ks >= 60:
        console.log("1st class");
        break;

    case mar$ks >= 50:
        console.log("2nd class");
        break;

    case mar$ks >= 35:
        console.log("3rd class");
        break;

    default:
        console.log("Failed");
}
// q5
let role = "admin";
let action = "edit";

switch (role) {
    case "admin":
        switch (action) {
            case "create":
                console.log("Create permission granted");
                break;

            case "edit":
                console.log("Edit permission granted");
                break;

            case "delete":
                console.log("Delete permission granted");
                break;

            default:
                console.log("Invalid action");
        }
        break;

    case "user":
        console.log("Limited Access");
        break;

    default:
        console.log("Invalid role");
}
// q6
let fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;

    case "mango":
        console.log("Mango is yellow");
        break;

    case "banana":
        console.log("Banana is yellow");
        break;

    default:
        console.log("Unknown fruit");
        break;
}
// q7
let value = "0";

switch (value) {
    case 0:
        console.log("Number zero");
        break;

    case "0":
        console.log("String zero");
        break;

    case false:
        console.log("Boolean false");
        break;

    case null:
        console.log("Null");
        break;

    case undefined:
        console.log("Undefined");
        break;

    default:
        console.log("Something else");
}
// q8
let x = 10;
let z = 3;
let operator = "%";

switch (operator) {
    case "+":
        console.log(x + z);
        break;

    case "-":
        console.log(x - z);
        break;

    case "*":
        console.log(x * z);
        break;

    case "/":
        if (z === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(x / z);
        }
        break;

    case "%":
        if (z === 0) {
            console.log("Cannot find remainder with zero");
        } else {
            console.log(x % z);
        }
        break;

    case "**":
        console.log(x ** z);
        break;

    default:
        console.log("Invalid operator");
}
// q9
let d$ay = 15;

switch (true) {
    case d$ay >= 1 && d$ay <= 10:
        console.log("Beginning of the month");
        break;

    case d$ay >= 11 && d$ay <= 20:
        console.log("Middle of the month");
        break;

    case d$ay >= 21 && d$ay <= 31:
        console.log("End of the month");
        break;

    default:
        console.log("Invalid day");
}
// q10
let category = "nonveg";
let item = "chicken";
let size = "half";

let price;

switch (category) {

    case "veg":

        switch (item) {
            case "paneer":

                switch (size) {
                    case "half":
                        price = 120;
                        console.log("Category: Veg");
                        console.log("Item: Paneer");
                        console.log("Size: Half");
                        console.log("Price: ₹" + price);
                        break;

                    case "full":
                        price = 220;
                        console.log("Category: Veg");
                        console.log("Item: Paneer");
                        console.log("Size: Full");
                        console.log("Price: ₹" + price);
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            case "pizza":

                switch (size) {
                    case "half":
                        price = 150;
                        console.log("Category: Veg");
                        console.log("Item: Pizza");
                        console.log("Size: Half");
                        console.log("Price: ₹" + price);
                        break;

                    case "full":
                        price = 280;
                        console.log("Category: Veg");
                        console.log("Item: Pizza");
                        console.log("Size: Full");
                        console.log("Price: ₹" + price);
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            default:
                console.log("Invalid veg item");
        }
        break;

    case "nonveg":

        switch (item) {
            case "chicken":

                switch (size) {
                    case "half":
                        price = 180;
                        console.log("Category: Non-Veg");
                        console.log("Item: Chicken");
                        console.log("Size: Half");
                        console.log("Price: ₹" + price);
                        break;

                    case "full":
                        price = 320;
                        console.log("Category: Non-Veg");
                        console.log("Item: Chicken");
                        console.log("Size: Full");
                        console.log("Price: ₹" + price);
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            default:
                console.log("Invalid non-veg item");
        }
        break;

    default:
        console.log("Invalid category");
}
