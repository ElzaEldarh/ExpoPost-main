const uersContainer = document.querySelector(".users-card");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => renderUsers(res));

const renderUsers = (users) => {
  users.forEach(({ id, name, username, email, phone, website }) => {
    const usersCard = document.createElement("div");
    usersCard.classList.add("card users-card");

    const cardBody = document.querySelector("div");
    cardBody.classList.add("card-body");

    usersCard.append(cardBody);
    cardBody.innerHTML += `<h5 class="card-title">${name}</h5>`;

    cardBody.innerHTML += `<p class="card-text">${username}</p>`;

    cardBody.innerHTML += `<p class="card-text">${email}</p>`;

    cardBody.innerHTML += `<p class="card-text">${phone}</p>`;

    cardBody.innerHTML += ` <p class="card-text">${website}</p>`;

    cardBody.innerHTML += `<a href="#" class="btn btn-primary btn btn-dark">Перейти на страницу пользователя</a>`;
  });
};
