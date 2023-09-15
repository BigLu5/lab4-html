let userPhone = prompt("What phone do you use?");

function getUserPhone(){
    if (userPhone == "Red Magic" || userPhone == "red magic") {
    alert("Then this is the page for you");
    } else {
    alert("Thinking about a change?");
    }
}

getUserPhone();

function displayUserPhone(){
    let message = "User's phone: " + userPhone;
    document.write(message);
    }

function askTime() {
    let isValid = false;
    let message;

    while (!isValid) {
        let time = prompt("What time is it? (0-23)");

        // Check if the input is a number between 0 and 23
        if (!isNaN(time) && time >= 0 && time <= 23) {
            isValid = true; // Input is valid, exit the loop
            if (time <= 11) {
                message = "Good morning";
            } else if (time <= 17) {
                message = "Good afternoon";
            } else {
                message = "Good evening";
            }
        } else {
            alert("Please enter a valid hour between 0 and 23.");
        }
    }

    document.write(message);
}

function getRating() {
let rating = prompt('Rate my site between 1-5', '5');
    
    for (let i = 0; i < rating; i++) {
    document.write("<img src='star.png'/>")
    }
    }

