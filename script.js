const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let inputText = textInput.value;
  if (inputText.length > 50) {
    inputText = inputText.slice(0, 50);
    textInput.value = inputText;
  }
  const count = inputText.length;
  charCount.textContent = `Character Count: ${count}/50`;
  if (count === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
})
