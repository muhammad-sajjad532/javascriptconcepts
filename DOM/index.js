//DOM selectors
document.getElementById('id');
document.getElementsByClassName('class');
document.getElementsByTagName('div');
document.querySelector('.class');
document.querySelectorAll('p');


//DOM manipulation
const el = document.querySelector('#title');
el.textContent = "Hello World";
el.style.color = "red";

// create element
const btn = document.createElement('button');
btn.textContent = "Click Me";
document.body.appendChild(btn);

// remove element
btn.remove();

//Events
btn.addEventListener('click', () => {
  alert("Button clicked!");
});


//traversing
el.parentElement;
el.children;
el.firstElementChild;
el.nextElementSibling;
