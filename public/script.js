let text = document.querySelectorAll("p");
let titles = document.querySelectorAll("a");

let articles = document.querySelectorAll(".news-item")

safeWords = [
  "Malarkey",
  "Crumpet castle",
  "The meaning of life",
  "Donald Duck",
  "Lolly gag",
  "Bumfuzzle",
];

function addWord(event) {
  event.preventDefault();
  let wordInput = document.getElementById("word-input");
  let word = wordInput.value.trim();

  if(word === ""){
      alert("Please enter a word")
     return
  }

  titles.forEach((element) => {
    let regex = new RegExp(word, "gi")

    if (element.innerHTML.match(regex)){
        element.parentElement.classList.add("user-redacted");
        if(element.parentElement.querySelector("img") === null) {
            let img = document.createElement("img")
            img.src = "./seal.png"
            element.parentElement.appendChild(img)
        }
    }

    elementToChange = element.textContent;
    element.textContent = elementToChange.replace(
      word,
      safeWords[Math.floor(Math.random() * safeWords.length)]
    );
  });

  text.forEach((element) => {
    let regex = new RegExp(word, "gi")

    if (element.innerHTML.match(regex)){
        element.parentElement.classList.add("user-redacted");
        if(element.parentElement.querySelector("img") === null) {
            let img = document.createElement("img")
            img.src = "./seal.png"
            element.parentElement.appendChild(img)
        }
    }

    elementToChange = element.textContent;
    element.textContent = elementToChange.replace(
      word,
      safeWords[Math.floor(Math.random() * safeWords.length)]
    );
  });
}

document.getElementById("submit-word").addEventListener("click", addWord);
