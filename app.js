let userPhone = prompt("What phone do you use?");

let message = "User's phone: " + userPhone;

document.write(message);

console.log(userPhone);

if (userPhone == "Red Magic" || userPhone == "red magic") {
    alert("Snap!");
  } else {
    alert("Oh...");
  }

  const currentTime = new Date().getHours();

  console.log(currentTime)

  if (currentTime < 12) {
    document.write(" Good morning!");
  } else if (currentTime < 18) {
    document.write(" Good afternoon!");
  } else {
    document.write(" Good evening");
  }