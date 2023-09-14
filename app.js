let userPhone = prompt("What phone do you use?");

function getUserPhone(){
    if (userPhone == "Red Magic" || userPhone == "red magic") {
    alert("Snap!");
    } else {
    alert("I'm sure it works for you");
    }
}

getUserPhone();

function displayUserPhone(){
    let message = "User's phone: " + userPhone;
    document.write(message);
    }

function displayGreeting(){
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    document.write(" Good morning!");
  } else if (currentTime < 18) {
    document.write(" Good afternoon!");
  } else {
    document.write(" Good evening");
  }
}

function askTime() {
    let isValid = false;
    let message;

    while (!isValid) {
        let time = prompt("What hour is it? (0-23)");

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

