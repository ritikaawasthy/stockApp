var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity");
var currPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");


submitBtn.addEventListener('click', calculateStocks)

function calculateStocks() {
  var initial = initialPrice.value
  var quantity = stockQuantity.value
  var current = currPrice.value
  console.log("initial" + initial)
  console.log("current" + current)
  output.style.visibility = "visible"
  if (initial == "" || quantity == "" || current == "") {
    output.innerText = "Please fill all the fields "
    setTimeout(function() {
      output.style.visibility = "hidden"
    }, 3000);
  } else {
    /*
  if(initial>current){
    var loss = (initial-current)* quantity;
    var lossPercent= (loss/initial) *100;
    output.innerText="Oh no You are at loss of "+ lossPercent
    setTimeout(function(){output.style.visibility="hidden"}, 3000);
  }
  */
    if (initial < current) {
      var profit = (current - initial) * quantity;
      var profitPercent = (profit / initial) * 100
      if (profitPercent > 0) {
        output.innerText = "Yay You are at profit of " + profitPercent + "%"
      } else {
        output.innerText = "Oh no You are at loss of " + profitPercent*(-1) + "%"
      }
      setTimeout(function() {
        output.style.visibility = "hidden"
      }, 3000);
    } else {
      output.innerText = "No gain but no loss either!";
      setTimeout(function() {
        output.style.visibility = "hidden"
      }, 3000);
    }
  }

}
