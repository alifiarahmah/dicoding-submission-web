// populate #navigation
const navigation = document.querySelector("#navigation");
let navigationText = ``;
posts.forEach((post) => {
  navigationText += `
    <a href="#${post.id}">${post.title}</a>
  `;
});
navigationText += `<a href="#tentang-penulis" class="hide-in-desktop">Tentang Penulis</a>`;
navigation.innerHTML = navigationText;

const navToggle = document.querySelector("#nav-toggle");
const toggleNav = () => {
  navigation.style.display = navigation.style.display === "flex" ? "none" : "flex";
}
navToggle.addEventListener("click", toggleNav);

// populate #content
const content = document.querySelector("#content");
let contentText = ``;
posts.forEach((post) => {
  contentText += `
    <article id="${post.id}">
      <h2>${post.title}</h2>
  `;
  if (post.thumbnail) {
    contentText += `
      <img src="${post.thumbnail}">
    `;
  }
  post.contents.forEach((content) => {
    contentText += `
      <${content.element}>${content.child}</${content.element}>
    `;
  });
  contentText += `
    </article>
  `;
});
content.innerHTML = contentText;

// set backToTopButton button
const backToTopButton = document.querySelector("#back-to-top");
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
backToTopButton.addEventListener("click", backToTop);
