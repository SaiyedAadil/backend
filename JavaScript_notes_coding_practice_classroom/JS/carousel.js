const panel = document.querySelectorAll(".panel")
panel.forEach((panel) => {
    panel.addEventListener("mouseover", () => {
        removeActiveClass()
        panel.classList.add("active")
    })
})
// panel.forEach((panel) => {
//     panel.addEventListener("mouseleave", () => {
//         removeActiveClass()
//     })
// })
panel.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClass()
        panel.classList.add("active")
    })
})
// panel.forEach((panel) => {
//     panel.addEventListener("click", () => {
//         removeActiveClass()
//         panel.classList.add("active")
//     })
// })


function removeActiveClass () {
    panel.forEach(panel => {
        panel.classList.remove("active")
    });
}

