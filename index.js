document
  .getElementById("completed-btn1")
  .addEventListener("click", function () {
    this.disabled = true;
    alert("Board update Successfully");
    const number = document.getElementById("task-numbers");
    let currentNumber = parseInt(number.innerText);
    number.innerText = currentNumber - 1;
    const plusNumber = document.getElementById("plus-number");
    let plusCurrentNumber = parseInt(plusNumber.innerText);
    const history = document.getElementById("history");
    const historyList = document.createElement("p");
    let now = new Date();
    let formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    historyList.classList.add("p-class");
    historyList.innerHTML = `
    <p>You have completed the task Fix Mobile Button issue at ${formattedTime}</p>
    `;
    history.appendChild(historyList);
    plusNumber.innerText = plusCurrentNumber + 1;
  });

//   Card-2
document
  .getElementById("completed-btn2")
  .addEventListener("click", function () {
    this.disabled = true;
    alert("Board update Successfully");
    const number = document.getElementById("task-numbers");
    let currentNumber = parseInt(number.innerText);
    number.innerText = currentNumber - 1;
    const plusNumber = document.getElementById("plus-number");
    let plusCurrentNumber = parseInt(plusNumber.innerText);

    const history = document.getElementById("history");
    const historyList = document.createElement("p");
    let now = new Date();
    let formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    historyList.classList.add("p-class");
    historyList.innerHTML = `
    <p>You have completed the task Add Dark Mode at ${formattedTime}</p>
    `;
    history.appendChild(historyList);
    plusNumber.innerText = plusCurrentNumber + 1;
  });
//   Card-3
document
  .getElementById("completed-btn3")
  .addEventListener("click", function () {
    this.disabled = true;
    alert("Board update Successfully");
    const number = document.getElementById("task-numbers");
    let currentNumber = parseInt(number.innerText);
    number.innerText = currentNumber - 1;
    const plusNumber = document.getElementById("plus-number");
    let plusCurrentNumber = parseInt(plusNumber.innerText);
    const history = document.getElementById("history");
    const historyList = document.createElement("p");
    let now = new Date();
    let formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    historyList.classList.add("p-class");
    historyList.innerHTML = `
    <p>You have completed the task Optimize Home page  at ${formattedTime}</p>
    `;
    history.appendChild(historyList);
    plusNumber.innerText = plusCurrentNumber + 1;
  });

//   Card-4
document
  .getElementById("completed-btn4")
  .addEventListener("click", function () {
    this.disabled = true;
    alert("Board update Successfully");
    const number = document.getElementById("task-numbers");
    let currentNumber = parseInt(number.innerText);
    number.innerText = currentNumber - 1;
    const plusNumber = document.getElementById("plus-number");
    let plusCurrentNumber = parseInt(plusNumber.innerText);
    const history = document.getElementById("history");
    const historyList = document.createElement("p");
    let now = new Date();
    let formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    historyList.classList.add("p-class");
    historyList.innerHTML = `
    <p>You have completed the task Add new emoji 🤲 at ${formattedTime}</p>
    `;
    history.appendChild(historyList);
    plusNumber.innerText = plusCurrentNumber + 1;
  });

//   Card-5
document
  .getElementById("completed-btn5")
  .addEventListener("click", function () {
    this.disabled = true;
    alert("Board update Successfully");
    const number = document.getElementById("task-numbers");
    let currentNumber = parseInt(number.innerText);
    number.innerText = currentNumber - 1;
    const plusNumber = document.getElementById("plus-number");
    let plusCurrentNumber = parseInt(plusNumber.innerText);
    const history = document.getElementById("history");
    const historyList = document.createElement("p");
    let now = new Date();
    let formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    historyList.classList.add("p-class");
    historyList.innerHTML = `
    <p>You have completed the task Integrate OpenAI API at ${formattedTime}</p>
    `;
    history.appendChild(historyList);
    plusNumber.innerText = plusCurrentNumber + 1;
  });

//   Card-6
document
  .getElementById("completed-btn6")
  .addEventListener("click", function () {
    this.disabled = true;

    alert("Board update Successfully");
    const number = document.getElementById("task-numbers");
    let currentNumber = parseInt(number.innerText);
    number.innerText = currentNumber - 1;

    const plusNumber = document.getElementById("plus-number");
    let plusCurrentNumber = parseInt(plusNumber.innerText);

    const history = document.getElementById("history");
    const historyList = document.createElement("p");
    let now = new Date();
    let formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    historyList.classList.add("p-class");
    historyList.innerHTML = `
    <p>You have completed the task Improve Job searching at ${formattedTime}</p>
    `;
    history.appendChild(historyList);

    plusNumber.innerText = plusCurrentNumber + 1;
    alert("congrates!!! You have complete all the current task");
  });

document.getElementById("history-btn").addEventListener("click", function () {
  let historyListDiv = document.getElementById("history");
  historyListDiv.innerText = "";
});

document.getElementById("another-page").addEventListener("click", function () {
  window.location.href = "./blogs.html";
});

document.getElementById("color").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

const mainDiv = document.getElementById("date");
const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const newDate = document.createElement("p");
newDate.innerHTML = `${formattedDate}`;

mainDiv.appendChild(newDate);
console.log(formattedDate);
