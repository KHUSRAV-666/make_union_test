let params = new URL(document.location).searchParams;
var id = params.get("id");
const api_url = `https://jsonplaceholder.typicode.com/users/${+id}`;

async function getISS() {
  const response = await fetch(api_url);
  console.log(response);
  const data = await response.json();

  let user = `<div class='user'>
            <h3 class='user-name'> <i>Имя:</i> ${data.name} </h3>
            <p class='user-phone'> <i>Телефон:</i> ${data.phone.substring(
              0,
              14
            )} </p>
            <p class='user-email'> <i>Почта:</i> ${data.email} </p>
                        <p class='user-address'> <i>Адрес:</i> ${
                          data.address.suite +
                          ", " +
                          data.address.street +
                          ", " +
                          data.address.city
                        } </p>
            <p class='user-company'> <i>Компания:</i> ${data.company.name} </p>
            <p class='user-website'> <i>Сайт:</i> ${data.website} </p>
        </div>
        `;

  document.querySelector(".user-container").innerHTML = user;
}

getISS();
