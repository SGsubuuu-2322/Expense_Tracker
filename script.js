const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

let transactions = dummyTransactions;

function addTransactionToDom(transaction) {
  let sign = transaction.amount > 0 ? "+" : "-";

  const item = document.createElement("li");
  item.classList.add(transaction.amount > 0 ? "plus" : "minus");
  item.innerHTML = ` 
        ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn">X</button>
    `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const totalBalance = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item)) * -1
  ).toFixed(2);

  balance.innerText = `$${totalBalance}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionToDom);
  updateValues();
}

init();
