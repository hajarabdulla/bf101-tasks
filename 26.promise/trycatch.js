try {
  alert("start");
  lalalala;
  //   throw new SyntaxError("this is syntax err");
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log(err);
  } else {
    console.log("this is just err");
  }
}
