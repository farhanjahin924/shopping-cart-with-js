let productSum =0;

function products (target){
    const selectedTextContainer= document.getElementById('addList'); 
    const cardMainText= target.childNodes[3].childNodes[1].innerText;
    // console.log(cardMainText);
    const li = document.createElement('li');
    li.innerText = cardMainText;
    // console.log(li);
    selectedTextContainer.appendChild(li);
    // console.log(target.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    const cardPrice= target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    // console.log(cardPrice);
    const cardPriceFloatValue = parseFloat(cardPrice);
    // console.log(cardPriceFloatValue);
    productSum+=cardPriceFloatValue;
    
    // console.log(productSum);
    // totalPrice
    firstTotal = document.getElementById('totalPrice').innerText=productSum.toFixed(2);
    document.getElementById('finalPrice').innerText=productSum.toFixed(2);
    if( productSum >=200 ){
            document.getElementById('applyBtn').removeAttribute('disabled');         
        }
        else {
            document.getElementById('applyBtn').setAttribute("disabled", "true");
          }
         const purchase =document.getElementById('PurchaseBtn');
          if (productSum > 0) {
            purchase.removeAttribute("disabled");
          } else {
            purchase.setAttribute("disabled", "true");
          }    
       
    
}

function forDiscount (){
    const totalPriceBeforeDiscount =parseFloat( document.getElementById('totalPrice').innerText);
    const coupon =document.getElementById('couponInput').value;
    // console.log(coupon);
    const discountShow=  document.getElementById('afterDiscount');
    const finalResultShow = document.getElementById('finalPrice');
        
        if( coupon == 'SELL200'){
          let  totalDiscount = ((20 / 100) * totalPriceBeforeDiscount ).toFixed(2);
          let discountedPrice = (totalPriceBeforeDiscount - totalDiscount).toFixed(2);  
        //   console.log(totalDiscount,discount)
        discountShow.innerText=totalDiscount;
         finalResultShow.innerText =discountedPrice;   
        }
        else {  alert("Wrong Coupon Code :) "); }
        document.getElementById('couponInput').value=" "
     
//    console.log( document.getElementById('afterDiscount').innerText);
   
}
function clean (){
    document.getElementById('totalPrice').innerText = '00.00';
    document.getElementById('afterDiscount').innerText = '00.00';
    document.getElementById('finalPrice').innerText = '00.00';
    const setTitle = document.getElementById("addList");
    setTitle.innerHTML = "";
    document.getElementById('applyBtn').setAttribute("disabled", "true");
    document.getElementById('PurchaseBtn').setAttribute("disabled", "true");
}

