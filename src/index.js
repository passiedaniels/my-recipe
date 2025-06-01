function generate(event) {
  event.preventDefault();

  new Typewriter("#instruction", {
    strings: [
      "Recipe for Beef stew:Ingredient:Beef stew meat,Vegetables: Tender potatoes, onions, carrots and peas, Flour:All-purpose flour,",
    ],
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let formElement = document.querySelector("#form-ingredient");
formElement.addEventListener("submit", generate);
