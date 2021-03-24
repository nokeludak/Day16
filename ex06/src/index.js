const firstName = (firstName) => {
  firstName = "FIRSTNAME";
  return firstName;
};

const lastName = (lastName) => {
  lastName = "lastname";
  return lastName;
};

console.log(firstName());
console.log(lastName());
exports.firstName = firstName;
exports.lastName = lastName;
