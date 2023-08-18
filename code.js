let total =0;
function handleClick(e){
    const cartItems= document.getElementById("selected-items")
    const totalAmount= document.getElementById("total-amount")
    
    const getPrice = parseInt(e.parentNode.childNodes[5].innerText.split(" ")[1])
    
    total= parseInt(total)+parseInt(getPrice)
    
    totalAmount.innerText= total
    const getName = e.parentNode.childNodes[3].innerText;
    const p = document.createElement('p')
    p.innerText=getName;
    p.style.fontWeight= '500'
    cartItems.appendChild(p)
    // console.log(getName)

}