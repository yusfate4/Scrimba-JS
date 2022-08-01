let myLeads = [];
let oldLeads = [];
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")

// myLeads = JSON.parse(myLeads)
// myLeads.push("Yusuf")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("save-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

// SAVE TAB
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href= '${leads[i]}'>
      ${leads[i]}
    </a>
    </li>
    `;
  }

  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  // console.log(localStorage.getItem("myLeads"))
});

// const containerEl = document.getElementById("container")

// containerEl.innerHTML = "<button onclick='buy()'> Buy! </button>";
// function buy() {
//   containerEl.innerHTML += "<p>Thank you for buying!</p>"
// }

// let num = [1, 2, 3, 4, 5, 6, 7];
// let [a, b, c] = num;
// console.log(a, b, c);
// console.log(a, c, b);

// Template string

// const recipient = "Yusuf"
// const sender = "Dahud"

// const email = `Hey
//                 ${recipient}!
//                 How is it going?
//                 ${sender}`
// console.log(email)

// console.log("")
// console.log("0")
// console.log(100)
// console.log(null)
// console.log([0])
// console.log(-0)

// functions
// const welcomeEl = document.getElementById("welcome-el")

//    parameters
// function greetUser (name, hello, hi) {
//   welcomeEl.textContent = `${name} ${hello} ${hi}`
// }
// //      arguments
// greetUser("Hello", "Yusuf", "Bawoni")

// function add(a, b) {
//   return a + b
// }

// console.log( add(3, 4))
// console.log( add(9, 102))

// function getFirst(arr) {
//   return arr[0]
// }

// // getFirst([3, 8])
// console.log(getFirst([387,7,89]))
