var img = document.querySelector(".hamb_mob")
var nav = document.querySelector(".hide"),
    navToggle = document.querySelector(".hamburger");
if (navToggle) {
  navToggle.addEventListener("click",
  function(e) {
  if (nav.className == "hide") {
    nav.className = "menu";
    img.src="src/images/icon-close.svg";
  } else {
    nav.className = "hide";
    img.src="src/images/icon-hamburger.svg";
  }
  e.preventDefault();
  }, false);

  window.addEventListener("resize", function() {
    if (window.matchMedia("max-width: 679px)").matches) {
      nav.className = "hide";
      img.src="src/images/icon-hamburger.svg";
    } else {
      nav.className = "hide";
      img.src="src/images/icon-hamburger.svg";
    }
  });
  
}

function onTabClick(event) {
  let activeTabs = document.querySelectorAll('.active');
  
  //deactivate existing active tab and panel
  for( let i = 0; i < activeTabs.length; i++) {
  activeTabs[i].className = activeTabs[i].className.replace('active', '');
  }
  
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });
  
  //  ACTIVATE NEW TAB PANEL

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);


(function() {
  const accordion = document.getElementsByClassName("accordion");
  let current = -1;

  for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function() {
          if (i !== current && current !== -1) {
              accordion[current].classList.remove('active');
              accordion[current].nextElementSibling.classList.remove('panel-open');
          }
          this.nextElementSibling.classList.toggle('panel-open');
          current = this.classList.toggle('active') ? i : -1;
      });
  };
})();