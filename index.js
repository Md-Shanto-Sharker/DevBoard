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
    <p>You have completed the task Fix Mobile Button issue at ${formattedTime}</p>
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
    <p>You have completed the task Fix Mobile Button issue at ${formattedTime}</p>
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
    <p>You have completed the task Fix Mobile Button issue at ${formattedTime}</p>
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
    <p>You have completed the task Fix Mobile Button issue at ${formattedTime}</p>
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
    <p>You have completed the task Fix Mobile Button issue at ${formattedTime}</p>
    `;
    history.appendChild(historyList);

    plusNumber.innerText = plusCurrentNumber + 1;
  });

document.getElementById('history-btn').addEventListener('click',function(){
    let historyListDiv=document.getElementById('history');
    historyListDiv.innerText = '';
})
