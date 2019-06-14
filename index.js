function scuberGreetingForFeet(distance){
  // Write your code here!
  const freeFeet = 400;
  const maxFeet = 2000;
  const tooFar = 2500
  let message = "";
  if (distance <= freeFeet){
    message = "This one is on me!";
  } else if (distance > maxFeet && distance <= tooFar){
    message = "I will gladly take your thirty bucks.";
  } else {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return (cityName === 'NYC' ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return 'Thank you so much.';
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
        return "Bye."
        break;
  }
}
