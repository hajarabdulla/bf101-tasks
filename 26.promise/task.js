const box = document.querySelector(".box");

setTimeout(() => {
  box.classList.add("move");
  setTimeout(() => {
    box.classList.add("bigger");
    setTimeout(() => {
      box.classList.add("circle");
      setTimeout(() => {
        box.classList.add("colored");
        setTimeout(() => {
          box.classList.remove("colored");
          setTimeout(() => {
            box.classList.remove("circle");
            setTimeout(() => {
              box.classList.remove("bigger");
              setTimeout(() => {
                box.classList.remove("move");
              }, 1500);
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1500);
  }, 1500);
}, 1500);
