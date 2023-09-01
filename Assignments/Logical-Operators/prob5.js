// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

// sun , mon , tue , wed , thurs , fri , sat 
let day = "sun";

switch(day)
  {
      case "mon" : console.log("Monday");
      break;

      case "tue" : console.log("Tuesday");
      break;

      case "wed" : console.log("Wednesday");
      break;

      case "thurs" : console.log("Thursday");
      break;

      case "fri" : console.log("Friday");
      break;

      case "sat" : console.log("Saturday");
      break;

      case "sun" : console.log("Sunday");
      break;

      default : console.log("Invalid");
  }