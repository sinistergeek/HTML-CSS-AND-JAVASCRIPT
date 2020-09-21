const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUSer();
getRandomUSer();
//fetch data
async function getRandomUSer() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

//double money
function doubleMoney() {
  data = data.map(function (user) {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

//sort by money
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}

//filter

function showMillion() {
  data = data.filter(function (user) {
    return user.money > 1000000;
  });

  updateDOM();
}

//calc
function weathCalc() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const weathEl = document.createElement('div');
  weathEl.innerHTML = `<h3> Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(weathEl);
}

function updateDOM(provideData = data) {
  //clear Main div
  main.innerHTML = '<h2><strong> Person Wealth</strong></h2>';
  provideData.forEach(function (item) {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//format as money

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}

//EventListener
addUserBtn.addEventListener('click', getRandomUSer);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionariesBtn.addEventListener('click', showMillion);
calculateWealthBtn.addEventListener('click', weathCalc);
