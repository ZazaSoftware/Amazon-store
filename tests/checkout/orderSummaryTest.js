import(renderOrderSummary) from '../../scripts/checkout/orderSummary.js';

describe ('test suite: renderOrderSummar ', () =>{
  it ('display the cart', () => {
    document.querySelector('.js-test-container')
    .innerHTML = `<div class="js-order-summary"></div>`;
  });
});