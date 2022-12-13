const USERNAME = "hajar";
const PASSWORD = "123";

function login(name, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (name !== USERNAME || password !== PASSWORD) {
        reject("Invalid credentials!");
      } else resolve(name);
    }, 4000);
  });
}

function welcome(name) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`Welcome back, ${name}`);
    }, 1000);
  });
}

function getListOfFriend() {
  return new Promise(function (resolve) {
    const friends = ["Zakir", "Alxan", "Leyla", "Yusif"];
    setTimeout(() => {
      resolve(friends);
    }, 1500);
  });
}

function showFriend(friends) {
  return new Promise(function (resolve) {
    resolve(friends[0]);
  });
}

login(prompt("Enter the username"), prompt("Enter the password"))
  .then((res) => {
    return welcome(res);
  })

  .then((res) => {
    console.log(res);
    return getListOfFriend(res);
  })
  
  .then((res) => {
    return showFriend(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));


var result = login(prompt("Enter the username"), prompt("Enter the password"))
  .then((res) => {
    return welcome(res);
  })
  .catch();

const dfd = result
  .then((res) => {
    console.log(res);
    return getListOfFriend(res);
  })


  .then((res) => {
    return showFriend(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
