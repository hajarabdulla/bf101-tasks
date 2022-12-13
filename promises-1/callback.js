const USERNAME = "hajar";
const PASSWORD = "123";

function login(name, password, callback) {
  setTimeout(() => {
    if (name !== USERNAME || password !== PASSWORD) {
      console.log("Invalid credentials!");
    } else callback(name);
  }, 4000);
}

function welcome(name) {
  setTimeout(() => {
    console.log(`Welcome back, ${name}`);
  }, 1000);
}

function getListOfFriend(callback) {
  const friends = ["Zakir", "Alxan", "Leyla", "Yusif"];
  setTimeout(() => {
    callback(friends);
  }, 1500);
}

function showFriend(friends) {
  console.log(friends[0]);
}

login(prompt("Enter the name"), prompt("Enter the password"), function (name) {
  welcome(name);
  getListOfFriend(function (friends) {
    showFriend(friends);
  });
});
