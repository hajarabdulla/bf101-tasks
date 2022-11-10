const dayOfWeek = prompt("Enter the day of the week");

switch (dayOfWeek) {
  case "Monday":
    alert("Bazar ertesi");
    break;
  case "Tuesday":
    alert("Çərşənbə axşamı");
    break;
  case "Wednesday":
    alert("Çərşənbə");
    break;
  case "Thursday":
    alert("Cuma axshami");
    break;
  case "Friday":
    alert("Cuma");
    break;
  case "Saturday":
    alert("Shanba");
    break;
  case "Sunday":
    alert("Bazar gunu");
    break;
  default:
    alert("Invalid");
}
