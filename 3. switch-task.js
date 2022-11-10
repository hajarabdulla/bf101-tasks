const defUsername = "Emine";
const defPassword = "123";

let username = prompt("Who is there?");
if (!username) {
  console.log("Canceled");
} else {
  if (username != defUsername) {
    console.log("I don't know you");
  } else {
    let password = prompt("Password?");
    if (!password) {
      console.log("Canceled");
    } else {
      if (password != defPassword) {
        console.log("Wrong password");
      } else {
        console.log("Welcome!");
      }
    }
  }
}
