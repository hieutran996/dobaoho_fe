import React from 'react';
import $ from "jquery";

function addToCart(id) {
    var productCard = $(`#parent_cart_${id}`);
    var position = productCard.offset();  
    $('body').append('<div class="floating-cart"></div>');
    var cart = $('div.floating-cart');

    var cart_shopping = $('div#cart_shopping');
    var position_cart_shopping = cart_shopping.offset();  

    productCard.clone().appendTo(cart);
    $(cart).css({ 'top': position.top + 'px', "left": position.left + 'px' }).fadeIn("slow").addClass('moveToCart');

    // Move to Cart
    $(cart).css({ 'top': position_cart_shopping.top + 40  + 'px', "left": position_cart_shopping.left + 'px' });

    setTimeout(function () {
        $("body").addClass("MakeFloatingCart");
        $(cart).css({ 'top': position_cart_shopping.top + 'px', "left": position_cart_shopping.left + 'px' });
    }, 800);
    setTimeout(function () {
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");    
    }, 1000);
}

export default addToCart;