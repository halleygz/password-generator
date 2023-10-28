"use-strict";
const passwordBox = document.getElementById("password");
const len = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const nums = "123456789";
const symbols = "@#$%^&*()_+~|{}[]<>/-=";
const allChars = upperCase + lowerCase + nums + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += nums[Math.floor(Math.random() * nums.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (len > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password
}
function copyPassword(){
    passwordBox.select()
    document.execCommand("Copy")
}