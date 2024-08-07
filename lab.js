// Dark mode 


$(document).ready(function() {
    $("#dark-mode-toggle").click(function() {
      $("body").toggleClass("dark-mode");
      if ($("body").hasClass("dark-mode")) {
        $("#dark-mode-icon").removeClass("fas fa-moon").addClass("fas fa-sun");
      } else {
        $("#dark-mode-icon").removeClass("fas fa-sun").addClass("fas fa-moon");
      }
    });
  });


//  Dark mode end





// stolen jd

// Navbar Toggle Code
let toggle = document.querySelectorAll("#nav-btn>label>span");
let sidetext = document.querySelectorAll(".side_row ul li a");
let nav = document.getElementById("nav");
// let changecolor = document.querySelectorAll(".changecolor")
document.getElementById("nav-btn").addEventListener("click",function () {
  var element = document.getElementById("side");
  element.classList.toggle("side-show");
}
)
// Them Change Work
document.getElementById("dark-btn").addEventListener("click",function(){
  document.getElementById("side").style.backgroundColor = "black"
  // changecolor.classList.toggle("darkmodetext");
  for(i = 0; i < toggle.length; i++){
    toggle[i].style.borderTop = "2px solid #0d6efd"
  }
  for(i = 0; i < sidetext.length; i++){
    sidetext[i].style.color = "white"
  }
   
})
document.getElementById("light-btn").addEventListener("click",function(){
  document.getElementById("side").style.backgroundColor = "#0077ff";
  document.getElementById("side").style.color = "black";
  for(i = 0; i < toggle.length; i++){
    toggle[i].style.borderTop = "2px solid black"
    sidetext[i].style.color = "black"
  }
  for(i = 0; i < sidetext.length; i++){
    sidetext[i].style.color = "white"
  }
})
// Navbar Toggle Code till here


// var body = document.body;
// document.getElementById("dark-btn-main").addEventListener("click",function(){
//   body.classList.toggle("dark-mode");
// })


for(var i =0; i< document.getElementsByClassName('logos-box-same').length; i++){

  document.getElementsByClassName ('logos-box-same')[i].addEventListener('mouseover',function(){
    document.getElementById("marq1").stop();     

  });
  
}

for(var i =0; i< document.getElementsByClassName('logos-box-same').length; i++){

  document.getElementsByClassName('logos-box-same')[i].addEventListener('mouseleave',function(){
    document.getElementById("marq1").start();     
         
  });
  
}
for(var i =0; i< document.getElementsByClassName('logos-box-same').length; i++){

  document.getElementsByClassName ('logos-box-same')[i].addEventListener('mouseover',function(){
    document.getElementById("marq2").stop();     

  });
  
}

for(var i =0; i< document.getElementsByClassName('logos-box-same').length; i++){

  document.getElementsByClassName('logos-box-same')[i].addEventListener('mouseleave',function(){
    document.getElementById("marq2").start();     
         
  });
  
}
  
let vcardtext = document.querySelector(".v-card h3");

$(document).ready(function(){
  
  $("#light-btn-main").click(function(){
    var body = document.querySelector(".dark-mode")
    body.classList.remove("dark-mode");
    body.classList.toggle("light-mode");
    
  })

    if(innerWidth > 1090 ){
      $(".slick-slider").slick({
        slidesToShow: 3,
        infinite:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
          // dots: false, Boolean
         // arrows: false, Boolean
       });
    }
    else if(innerWidth > 1000 ){
      $(".slick-slider").slick({
        slidesToShow: 2,
        infinite:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
          // dots: false, Boolean
         // arrows: false, Boolean
       });
    }
    else if(innerWidth > 900 ){
      $(".slick-slider").slick({
        slidesToShow: 1,
        infinite:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
          // dots: false, Boolean
         // arrows: false, Boolean
       });
    }
    else{
      $(".slick-slider").slick({
        slidesToShow: 1,
        infinite:false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
          // dots: false, Boolean
         // arrows: false, Boolean
       });
    }

  $(".vcard-content-box").toggleClass("darktext");

});




document.getElementById("btt").addEventListener("click",function(){
  window.scrollTo(100,0);
})

// theme change work

const toggleBtn = document.getElementById("dark-btn-main");
const theme = document.body;
let darkMode = localStorage.getItem("dark-mode");
let dspan1 = document.getElementById("dspan1");


const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


// stolen js end