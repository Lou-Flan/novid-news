let text = document.querySelectorAll("p")
let titles = document.querySelectorAll("h3")

safeWords = ["Malarkey", "Crumpet castle", "The meaning of life", "Donald Duck", "Lolly gag", "Bumfuzzle" ]

function addWord(event) {
	event.preventDefault()
	let wordInput = document.getElementById("word-input")
    let word = wordInput.value.trim()

    titles.forEach((element) => {
        elementToChange = element.textContent
        element.textContent = elementToChange.replace(word, safeWords[Math.floor(Math.random() * safeWords.length)])
    })
    
    text.forEach((element) => {
        elementToChange = element.textContent
        element.textContent = elementToChange.replace(word, safeWords[Math.floor(Math.random() * safeWords.length)])
    })
}

document.getElementById("submit-word").addEventListener("click", addWord)