// function getDiscount(e){
//     const discountInput= e.parentNode.childNodes[3]
//     const discount= discountInput.value

//     const parsedDiscount = parseFloat(discount); // Use parseFloat for decimal numbers
//     console.log(parsedDiscount);
// }

let total = 0;
let grandTotal = 0;

function handleClick(e) {
  const cartItems = document.getElementById("selected-items");
  const totalAmount = document.getElementById("total-amount");
  const grandTotalAmount = document.getElementById("grand-amount");

  const getPrice = parseInt(e.parentNode.childNodes[5].innerText.split(" ")[1]);

  total = parseInt(total) + parseInt(getPrice);

  totalAmount.innerText = total;
  const getName = e.parentNode.childNodes[3].innerText;

  grandTotal = total;
  grandTotalAmount.innerText = grandTotal;

  // Check if the flower name already exists in the cart
  let nameExists = false;
  for (const item of cartItems.childNodes) {
    if (item.innerText === getName) {
      nameExists = true;
      break;
    }
  }

  // If the name doesn't exist in the cart, add it
  if (!nameExists) {
    const p = document.createElement("p");
    p.innerText = getName;
    p.style.fontWeight = "500";
    cartItems.appendChild(p);
  }
}
