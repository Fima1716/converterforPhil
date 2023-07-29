function fractionToDecimal(fraction) {
  const [numerator, denominator] = fraction.split("/").map(parseFloat);
  return numerator / denominator;
}

function convertToGramsOrMilliliters(qty, unit, ingredient) {
  // Convert fractional input to a decimal number
  if (qty.includes("/")) {
    qty = fractionToDecimal(qty);
  } else {
    qty = parseFloat(qty);
  }

  switch (ingredient.toLowerCase()) {
    case "white sugar":
      if (unit === "teaspoon") return qty * 4.2;
      if (unit === "tablespoon") return qty * 12.6;
      if (unit === "cup") return qty * 200;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "brown sugar":
      if (unit === "teaspoon") return qty * 4.2;
      if (unit === "tablespoon") return qty * 12.6;
      if (unit === "cup") return qty * 200;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "salt":
      if (unit === "teaspoon") return qty * 5.9;
      if (unit === "tablespoon") return qty * 17.7;
      if (unit === "cup") return qty * 291;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "powdered sugar":
      if (unit === "teaspoon") return qty * 4.4;
      if (unit === "tablespoon") return qty * 13.2;
      if (unit === "cup") return qty * 125;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "flour":
      if (unit === "teaspoon") return qty * 2.8;
      if (unit === "tablespoon") return qty * 8.4;
      if (unit === "cup") return qty * 120;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "water":
      if (unit === "cup") return qty * 237;
      if (unit === "ounce") return qty * 29.57;
      break;

    case "milk":
      if (unit === "cup") return qty * 237;
      if (unit === "ounce") return qty * 29.57;
      break;

    case "eggs":
      if (unit === "small") return qty * 48;
      if (unit === "medium") return qty * 57;
      if (unit === "large") return qty * 68;
      if (unit === "extra large") return qty * 74;
      break;

    case "butter":
      if (unit === "teaspoon") return qty * 4.8;
      if (unit === "tablespoon") return qty * 14.2;
      if (unit === "cup") return qty * 227;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 113.4;
      break;

    case "baking soda":
      if (unit === "teaspoon") return qty * 4.6;
      if (unit === "tablespoon") return qty * 13.8;
      if (unit === "cup") return qty * 220;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "cornstarch":
      if (unit === "teaspoon") return qty * 2.9;
      if (unit === "tablespoon") return qty * 8.6;
      if (unit === "cup") return qty * 128;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "syrup":
      if (unit === "teaspoon") return qty * 5;
      if (unit === "tablespoon") return qty * 15;
      if (unit === "cup") return qty * 320;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "honey":
      if (unit === "teaspoon") return qty * 7.3;
      if (unit === "tablespoon") return qty * 21.9;
      if (unit === "cup") return qty * 339;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "molasses":
      if (unit === "teaspoon") return qty * 7.3;
      if (unit === "tablespoon") return qty * 21.9;
      if (unit === "cup") return qty * 334;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    case "yeast":
      if (unit === "teaspoon") return qty * 3.1;
      if (unit === "tablespoon") return qty * 9.3;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;
    case "cream cheese":
      // Переводим кремчиз в граммы
      if (unit === "teaspoon") return qty * 4.4;
      if (unit === "tablespoon") return qty * 13.2;
      if (unit === "cup") return qty * 240;
      if (unit === "ounce") return qty * 28.35;
      if (unit === "stick") return qty * 100;
      break;

    // Добавьте правила перевода для других ингредиентов по аналогии

    default:
      return qty;
  }
}
function addProduct() {
  const qtyInput = document.querySelector(".input1[name='qty']");
  const unitInput = document.querySelector(".input1[name='unit']");
  const ingredientInput = document.querySelector(".input1[name='ingredient']");
  const optionsContainer = document.getElementById("optionsContainer");

  const qty = qtyInput.value.trim();
  const unit = unitInput.value.trim();
  const ingredient = ingredientInput.value.trim();

  if (!qty || !unit || !ingredient) {
    alert("Please fill all fields correctly.");
    return;
  }

  const convertedValue = convertToGramsOrMilliliters(qty, unit, ingredient);

  const productDiv = document.createElement("div");
  productDiv.textContent = `${qty} ${unit} of ${ingredient} = ${convertedValue} ${
    unit === "cup" || unit === "stick" ? "ml" : "g"
  }.`;
  productDiv.classList.add("result");

  optionsContainer.appendChild(productDiv);

  qtyInput.value = "";
  unitInput.value = "";
  ingredientInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".btn_add");
  addButton.addEventListener("click", addProduct);
});
