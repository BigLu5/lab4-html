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

// page will display the value the user enters in the format "I love Red Magic"

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
