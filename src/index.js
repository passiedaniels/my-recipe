function displayAnswer(response) {
  console.log("generating your recipe");
  new Typewriter("#instruction", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generate(event) {
  let searchInput = document.querySelector("#search-button");
  event.preventDefault();
  let prompt = `generate a recipe on ${searchInput.value}`;
  let context =
    "you are an inteligent experience good chef with lots of knowledge on food and ingeredient and how they are cooked, please generate a recipe that is short and simple  that will satisfy the user, make sure to follow the search input requests, please put them into different lines using <br> element always when listing starting from the heading to the last, remove the asterisk,use <br> element to separate them into lines starting from ingredients, use <strong> element of all headings";
  let apiKey = "943a3ddbo20b374aff624c0t29d891a1";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayAnswer);

  console.log(`generated ${searchInput.value}`);
  console.log(`prompt:${prompt}`);
  console.log(`context ${context}`);

  let instructionElement = document.querySelector("#instruction");
  instructionElement.classList.remove("hidden");
  instructionElement.innerHTML = `<div class="generating">⏳Generating a recipe on ${searchInput.value}</div>`;
}

let formElement = document.querySelector("#form-ingredient");
formElement.addEventListener("submit", generate);
