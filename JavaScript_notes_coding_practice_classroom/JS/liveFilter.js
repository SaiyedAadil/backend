let result = document.querySelector("#result");
const filter = document.getElementById("filter");
const listItems = [];

getData();
filter.addEventListener("input", (e) => filterData(e.target.value))
async function getData() {
  // const res = await fetch("https://randomuser.me/api?results=50")
  // const res1 = await res.json()
  // console.log(res);
  
  const { results } = await res.json();
  // object destructuring works google it;
    console.log( results);
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" >
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>`;
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    console.log(item.innerHTML);
    
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

// filter method will generate a new array;
