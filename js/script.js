const postsContainer = document.querySelector(".posts-row");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => renderPosts(res));

const renderPosts = (posts) => {
  posts.forEach(
    ({ id, userId, title, body }) =>
      (postsContainer.innerHTML += `<div class="col">
    <div class="card" style="width: 18rem">
      <img src="images/1.png" class="card-img-top" alt="post" />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
         ${body.length > 100 ? body.substring(0, 100) + "..." : body}
        </p>
        <a href="../pages/post.html" class="btn btn-primary btn btn-dark">Go somewhere</a>
      </div>
    </div>
  </div> `)
  );
};
  