const userList = document.getElementById("userList");
// fetch() // is a promise

const generateList = (list) => {
  if (list.length) {
    let inHTML = ""
    list.forEach((element) => {
      // inHTML += `
      // <li>
      //         <div class="flex items-center gap-x-6">
      //             <img class="h-16 w-16 rounded-full"
      //                 src="${element.avatar_url}"
      //                 alt="" />
      //             <div>
      //             <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
      //             ${element.login}
      //             </h3>
      //             <p class="text-sm font-semibold leading-6 text-indigo-600">
      //             ${element.id}
      //             </p>
      //             </div>
      //             </div>
      //             </li>
                  
      // `;
      const li = document.createElement("li")
      li.innerHTML = 
      userList = inHTML = 
      `
    inHTML += 
      <li>
              <div class="flex items-center gap-x-6">
                  <img class="h-16 w-16 rounded-full"
                      src="${element.avatar_url}"
                      alt="" />
                  <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  ${element.login}
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                  ${element.id}
                  </p>
                  </div>
                  </div>
                  </li>`
                  userList.appendChild(li)
                });
  }
}

const getData = async () => {
  const usersApi = await fetch("https://api.github.com/users");
  const data = await usersApi.json();
  // userArr = data;
  generateList(data)

  // console.log(usersApi);
  console.log(data);

  // console.log(userArr);
};
getData();









