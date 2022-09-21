function multiplyByTwo(value) {
  let number = 2;
  if (value && typeof value === "number") {
    return () => console.log(value * number);
  }
  return () => console.log("pass a number");
}
multiplyByTwo(4)();
