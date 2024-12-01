const form = document.querySelector("form");
const ul = document.querySelector("#listExp");
const totalVal = document.querySelector("#total-val");
const themeBtn = document.querySelector(".theme-btn");
const mainDoc = document.body;
const listExpDoc = document.querySelector("#listExp");

let total = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let expName = form.elements.expName.value;
  let expAmt = parseFloat(form.elements.expAmt.value);

  if (expName.length && !isNaN(expAmt) && expAmt > 0) {
    const li = document.createElement("li");
    li.innerHTML = `
     ${expName} :
    <span>${expAmt.toFixed(2)}</span>
    <span id="delete-span" >
        <button class="delete-btn">Delete</button>
    </span>`;

    ul.appendChild(li);

    li.querySelector(".delete-btn").addEventListener("click", function () {
      deleteItem(li, expAmt);
    });
    updateTotal(expAmt);
    form.reset();
    emptyMsg();
  } else if (!expName) alert(" Name shoud not be empty");
  else if (!expAmt) alert(" Amount should not be empty");
});

function emptyMsg() {
  const listItem = ul.querySelector("li");
  if (listItem === null) {
    if (!document.querySelector("#emptyMessage")) {
      const p = document.createElement("p");
      p.setAttribute("id", "emptyMessage");
      p.innerHTML = "No entries. Add an expense to track.";
      ul.appendChild(p);
    }
  } else if (listItem) {
    const emptyMessage = document.querySelector("#emptyMessage");
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}
emptyMsg();

function deleteItem(li, amt) {
  total -= amt;
  totalVal.textContent = `Total: ${total.toFixed(2)} `; // Update the displayed total

  li.remove(); // Remove the li element
}

function updateTotal(amount) {
  total += amount;
  totalVal.textContent = `Total: ${total.toFixed(2)} `;
}
themeBtn.addEventListener("click", () => {
  const container = form.parentNode;
  if (themeBtn.classList.contains("light-theme")) {
    themeBtn.classList.remove("light-theme");

    mainDoc.style.background = "black";
    mainDoc.style.color = "#F1F1F1";

    container.style.background = "#1E1E1E";
    container.style.color = "white";

    listExpDoc.style.background = "#1E1E1E";
    listExpDoc.style.color = "white";
    listExpDoc.style.border = "1px solid white";
    listExpDoc.style.borderRadius = "5px";
    listExpDoc.style.boxShadow = "inset 0 0 10px 10px darkblue";

    themeBtn.classList.add("dark-theme");
  } else {
    themeBtn.classList.remove("dark-theme");
    mainDoc.style.background = "skyblue";
    mainDoc.style.color = "black";
    container.style.background = "lightblue";
    container.style.color = "black";

    listExpDoc.style.background = "rgba(245, 245, 245, 0.51)";
    listExpDoc.style.color = "black";
    listExpDoc.style.boxShadow = "none";
    themeBtn.classList.add("light-theme");
  }
});
