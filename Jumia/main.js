// from here start list Account
const Account = document.getElementById("Account");
const list = document.querySelector("#list");

// from here start list help
const Help = document.getElementById("Help");
const listHelp = document.getElementById("listHelp");

function dropDownMenu() {
  list.classList.toggle("hide");
  listHelp.classList.add("hide");
  Account.classList.add("Color");
  Help.classList.remove("Color");
}

function dropDownMenuOne() {
  listHelp.classList.toggle("hide");
  list.classList.add("hide");
  Help.classList.add("Color");
  Account.classList.remove("Color");
}

///////////////////// Owl Carosuel //////////////

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// $(document).ready(function() {
//   var urls = ['https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w14-fashion-explosion/Brands/adidas/HP_Background_V2_1920x2000.png','https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w14-fashion-explosion/Brands/Trendyol/design-update/1920X1410_Background_Takeover_11zon.png','https://ng.jumia.is/cms/0-5-TechWeek/2023/Brand-Day/April-05-Century/design-bg.jpg',https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w17-Best-phone-electronic/diageo-SBD/live/BG_.png'];

//   var cout = 1;
//   $('body').css('background-image', 'url("' + urls[0] + '")');
//   setInterval(function() {
//     $('body').css('background-image', 'url("' + urls[cout] + '")');
//     cout == urls.length-1 ? cout = 0 : cout++;
//   }, 24000000);

// });
