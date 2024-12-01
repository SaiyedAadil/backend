const form = document.querySelector("form");
const ul = document.querySelector("#listExp");
const totalContainer = document.querySelector("#total-container");
const totalVal = document.querySelector("#total-val");
let total = 0;

// Function to show or hide the empty list message
function checkEmptyList() {
    if (ul.querySelectorAll("li").length === 0) {
        if (!ul.querySelector("p")) {
            const p = document.createElement("p");
            p.innerHTML = "No expenses added";
            ul.appendChild(p);
        }
    } else {
        const p = ul.querySelector("p");
        if (p) p.remove(); // Remove the message if items exist
    }
}

// Initial check for empty list
checkEmptyList();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let expName = form.elements.expName.value;
    let expAmt = +form.elements.expAmt.value;

    if (expName.length && expAmt) {
        const li = document.createElement("li");

        li.innerHTML = `
            Expense Name: ${expName} 
            <span>Amount: ${expAmt}</span>
            <span id="delete-span">
                <button class="delete-btn">Delete</button>
            </span>`;

        ul.appendChild(li);

        li.querySelector(".delete-btn").addEventListener("click", function () {
            deleteItem(li, expAmt);
        });

        updateTotal(expAmt);
        checkEmptyList(); // Check if the list is empty after adding the item
        form.reset();
    } else {
        if (!expName) alert("Name should not be empty");
        if (!expAmt) alert("Amount should not be empty");
    }
});

function deleteItem(li, amt) {
    // Subtract the amount from total
    total -= amt;
    totalVal.textContent = `Total: ${total.toFixed(2)}`;

    li.remove(); // Remove the li element
    checkEmptyList(); // Check if the list is empty after deleting the item
}

function updateTotal(amount) {
    total += amount;
    totalVal.textContent = `Total: ${total.toFixed(2)}`;
}
