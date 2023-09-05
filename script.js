const toParagraph = (text) => {
  return `<p>${text}</p>`;
};

const toParagraphs = (text) => {
  return text.split("\n").map(toParagraph).join("");
};

const toH2 = (text) => {
  return `<h2>${text}</h2>`;
};

const toH3 = (text) => {
  return `<h3>${text}</h3>`;
};

const toOl = (list) => {
  return `<ol>${list.map((item) => `<li>${item}</li>`).join("")}</ol>`;
};
