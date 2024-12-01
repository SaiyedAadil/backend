// how to access that element?
// manipulating element;
// multiple ways of manipulation;
// multiple ways of selecting ;

console.log("Hey, The Script is linked successfully!");
// over here method of selecting in dom;

const btn = document.getElementById("btn") // pass as a string;
// console.log(btn.innerText);

setTimeout(() => {
    btn.innerText = "New Value - Click"
}, 3000)


btn.addEventListener("click", () => { // security guard to thehra diye, ine aaya to kya karra/ it's called watcher;

    console.log("Clicked on the Button!");
    const p = document.createElement("p")
    const div = document.createElement("div")
    p.innerText = "Thi is a text fro DOM.JS"
    p.classList.add("testClass")

    const b = document.createElement("button")
    b.innerText = "Change to OG Color"
    b.addEventListener('click', () => {
        p.classList.remove("testClass")
    })

    div.appendChild(p) // appending: to attaching at the end;
    document.body.append(b)
    document.body.appendChild(div)
    // you haven't decide the position
}) //param1: type of listener;, param2: callback fn;




// 8:16-17 : new talk html;
// popup feature in html;


// you can manipulate the elemen in a various different manner;



// what can we do with the element selected;
// mthods to access "." majorly 


// whenver need only we connect script to database;




