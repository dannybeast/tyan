// SVG
var __svg__ = {
  path: "./assets/icons/**/*.svg",
  name: "assets/icons/sprite.svg",
};
__svg__ = {
  filename: "/assets/icons/sprite.svg",
};
require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);

// SCSS
import "./assets/scss/main.scss";

// Modules
import hideLoader from "./js/modules/loader";
import "lazyload";
import mobileNavigation from "./js/modules/mobileNavigation";
import Modal from "./js/modules/modals";
//import animations from "./js/modules/animations";
import masks from "./js/modules/inputmasks";
import sliders from "./js/modules/sliders";
import contactsMap from "./js/modules/contactsMap";
import {scrollTo} from "./js/modules/scrollTo";

new Modal();
// Forms
import "./js/forms/validation";
import "./js/forms/consult";
import "./js/forms/service";

$(document).ready(function() {
  //animations();
  lazyload();
  sliders();

  if($(window).width() > 1024){
    let directionsHeights = [];
    $(".directions-item__content").each(function(){
      let itemHeight = $(this).height();
      directionsHeights.push(itemHeight);
    })
    let maxHeight = Math.max.apply(null, directionsHeights);
    $('.directions-item').each(function(){
      $(this).css('min-height', maxHeight)
    })
  }

  //- 

  $(".directions-item").hover(function() {
    $(".directions-item").removeClass("is-active");
    $(this).addClass("is-active");
  });

  $('.directions-item .js-modal').click(function(){
    let title = $(this).parents('.directions-item').find('.directions-item__title').text()
    $('#service .modal-title').text(title)
  })


  scrollTo('.js-scrollTo-about', '.about', 0);
  scrollTo('.js-scrollTo-directions', '.directions', 0);
  scrollTo('.js-scrollTo-contacts', '.contacts', 0)

  mobileNavigation();
  
  masks();
  contactsMap();
  hideLoader();
});
