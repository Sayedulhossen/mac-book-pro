// updatingProductPrice

function updateProductPrice (inputId, cost){
    const extraMemory = document.getElementById(inputId, cost);
        extraMemory.innerText= cost;
            gettingTotalPrice()
}
// total price and final total price
function gettingTotalPrice(){
// best price
    const bestPrice = 1299;
// extraMemory
    const extraMemoryTotal = parseFloat(document.getElementById('extra-memory').innerText);

// extrastorage   
        const extraStorageTotal = parseFloat(document.getElementById('extra-storage').innerText);

// deliverycost
    const deliveryCostTotal = parseFloat(document.getElementById('delivery-charge').innerText);

// getting  Total Price
    document.getElementById('total-price').innerText = bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
    
// getting final total price
    document.getElementById('final-price').innerText = bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
} 
// discount total

// function discountedTotal() {
  //  const matchCode = document.getElementById('input');
//     if (matchCode.value == 'stevekaku') {
//   const TotalPriceText = document.getElementById('total-price');
//   const TotalPrice = parseFloat(TotalPriceText.innerText)
//   const discount = TotalPrice / 5;
//   const discountedTotal = TotalPrice - discount;
//   document.getElementById('final-total').innerText = discountedTotal;
//   matchCode.value = '';
//}
function discountTotal (){
     const similarCode = document.getElementById('input');
     if(similarCode.value == 'stevekaku'){
     const totalPriceText = document.getElementById('total-price');
     const totalPrice = parseFloat(totalPriceText.innerText)
     const discount = totalPrice *(80/100);
      document.getElementById('final-price').innerText = discount;
     similarCode.value = '';
   }
 };
// 8gb memory button event handler
document.getElementById('fix-memory').addEventListener('click',function(){
     updateProductPrice('extra-memory',0); 
});

// 16gb memory  button event handler
document.getElementById('memory-max').addEventListener('click', function(){
       updateProductPrice('extra-memory',180);
});
  // 256gb storage button event-handler
document.getElementById('min-storage').addEventListener('click', function () {
       updateProductPrice('extra-storage', 0);
});

 // 512gb storage button event-handler
document.getElementById('normal-storage').addEventListener('click', function () {
       updateProductPrice('extra-storage', 100);
});
// 1TB storage button event-handler
document.getElementById('max-storage').addEventListener('click', function () {
   updateProductPrice('extra-storage', 180)
 })
// Aug21 button event-handler
document.getElementById('free-delivery').addEventListener('click', function () {
updateProductPrice('delivery-charge', 0)
})
// Aug21 button event-handler
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateProductPrice('delivery-charge', 20)
})
// apply button event-handler
document.getElementById('apply-button').addEventListener('click', function () {
discountTotal()
});