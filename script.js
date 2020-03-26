var menuItems = document.getElementsByClassName('js_link');
var onClick = function (event) {
	event.preventDefault();
  
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
	}
  
  event.currentTarget.classList.add('active');
};

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', onClick, false);
}

const anchors = document.querySelectorAll('a[href*="#"]'), V = 1.5;
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
