function login(userName, password, callback) {
  setTimeout(() => {
    callback(userName);
  }, 1500);
}

function welcome(name) {
  console.log(`Welcome ${name}`);
}

function showFriends(callback) {
  const myFriends = ["Elnur", "Riyad", "Rashad", "Nargiz"];

  setTimeout(() => {
    callback(myFriends);
  }, 2000);
}

function oneFriend(firends) {
  console.log(firends[0]);
}

const user = login("Hajar", "1234", function (user) {
  welcome(user);
});

const myFriends = showFriends(function (myFriends) {
  oneFriend(myFriends);
});

// welcome(user);
// const friends = showFriends();
// oneFriend(friends);
