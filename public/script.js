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

  articles.forEach((element) => {
    let regex = new RegExp(word, "gi");
    let text = element.querySelector("p");
    let title = element.querySelector("a");

    if (text.innerHTML.match(regex) || title.innerHTML.match(regex)){
            element.classList.add("user-redacted");
            if(element.querySelector("img") === null) {
                let img = document.createElement("img")
                img.src = "./seal.png"
                element.appendChild(img)
            }
        }
    if (text.innerHTML.match(regex)){
      elementToChange = text.textContent;
      text.textContent = elementToChange.replace(
        regex,
        safeWords[Math.floor(Math.random() * safeWords.length)]
      );
    }

    if (title.innerHTML.match(regex)){
      elementToChange = title.textContent;
      title.textContent = elementToChange.replace(
        regex,
        safeWords[Math.floor(Math.random() * safeWords.length)]
      );
    }
  })
}

document.getElementById("submit-word").addEventListener("click", addWord);
