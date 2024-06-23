const api_url = "https://jsonplaceholder.typicode.com/users/";

async function getISS() {
  const response = await fetch(api_url);
  console.log(response);
  const data = await response.json();

  let user = data.map((d, i) => {
    return `<a href='./user.html?id=${i}'>
            <span class='user-id'> ${+i + 1} </span>
            <h3 class='user-name'> <i>имя:</i> ${d.name} </h3>
            <p class='user-city'> <i>город:</i> ${d.address.city} </p>
            <p class='user-email'> <i>почта:</i> ${d.email} </p>
        </a>
        `;
  });
  document.querySelector(".users-container").innerHTML = user.join("");
}

getISS();
