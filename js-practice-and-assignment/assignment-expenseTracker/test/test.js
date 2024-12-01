const form = document.querySelector("form");
const ul = document.querySelector("#listExp");
const totalVal = document.querySelector("#total-val");
const themeBtn = document.querySelector(".theme-btn");
const mainDoc = document.body;
const listExpDoc = document.querySelector("#listExp");
console.log(listExpDoc);

// Theme toggle functionality
themeBtn.addEventListener("click", () => {
  const container = form.parentNode;
  if (themeBtn.classList.contains("light-theme")) {
    themeBtn.classList.remove("light-theme");

    mainDoc.style.background = "#1E1E1E";
    mainDoc.style.color = "#F1F1F1";

    container.style.background = "#1E1E1E";
    container.style.color = "#F1F1F1";

    listExpDoc.style.background = "#1E1E1E";
    listExpDoc.style.color = "white";
    listExpDoc.style.border = "1px solid white";
    listExpDoc.style.boxShadow = "inset 0 0 10px 10px darkblue";
    listExpDoc.style.mixBlendMode = "lighten";

    themeBtn.classList.add("dark-theme");
  } else {
    themeBtn.classList.remove("dark-theme");
    mainDoc.style.background = "skyblue";
    mainDoc.style.color = "blue";
    container.style.background = "skyblue";
    container.style.color = "black";

    listExpDoc.style.background = "whitesmoke";
    listExpDoc.style.color = "black";
    listExpDoc.style.mixBlendMode = "lighten";
    listExpDoc.style.boxShadow = "none";
    themeBtn.classList.add("light-theme");
  }
});

// Total value
let total = 0;

// Form submission and adding new list item
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
    emptyMsg();  // Check empty message after adding an item
    form.reset();
  } else if (!expName) alert("Name should not be empty");
  else if (!expAmt) alert("Amount should not be empty");
});

// Corrected empty message function
function emptyMsg() {
  const liItems = ul.querySelectorAll("li");  // Get all li elements

  if (liItems.length === 0) {
    // If no <li> elements are found, display "No list" message
    if (!document.querySelector("#emptyMessage")) {
      const p = document.createElement("p");
      p.setAttribute("id", "emptyMessage");
      p.innerHTML = "No list";
      ul.appendChild(p);
    }
  } else {
    // If <li> elements exist, remove "No list" message if it exists
    const emptyMessage = document.querySelector("#emptyMessage");
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}

// Initial call to check for empty list
emptyMsg();

// Delete item and update total
function deleteItem(li, amt) {
  total -= amt;
  totalVal.textContent = `Total: ${total.toFixed(2)}`;

  li.remove();  // Remove the li element
  emptyMsg();  // Check empty message after deleting an item
}

// Update total amount
function updateTotal(amount) {
  total += amount;
  totalVal.textContent = `Total: ${total.toFixed(2)}`;
}
