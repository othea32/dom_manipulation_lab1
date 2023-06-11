// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.
var menuLinks = [
 {text: 'about', href: '/about'},
 {text: 'catalog', href: '#', subLinks: [
   {text: 'all', href: '/catalog/all'},
   {text: 'top selling', href: '/catalog/top'},
   {text: 'search', href: '/catalog/search'},
 ]},
 {text: 'orders', href: '#' , subLinks: [
   {text: 'new', href: '/orders/new'},
   {text: 'pending', href: '/orders/pending'},
   {text: 'history', href: '/orders/history'},
 ]},
 {text: 'account', href: '#', subLinks: [
   {text: 'profile', href: '/account/profile'},
   {text: 'sign out', href: '/account/signout'},
 ]},
];



// Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

mainEl.style.backgroundColor = 'var(--main-bg)';


// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>.

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.

mainEl.classList.add('flex-ctr');

// Hint: Element.classList API

// Progress Check - Here's what it should look like so far:

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
// Set the height topMenuEl element to be 100%.

topMenuEl.style.height = '100%';
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');

let a1 = document.createElement('a');
a1.setAttribute('href', menuLinks[0].href);
a1.textContent = menuLinks[0].text;
topMenuEl.append(a1);

let a2 = document.createElement('a');
a2.setAttribute('href', menuLinks[1].href);
a2.textContent = menuLinks[1].text;
topMenuEl.append(a2);

let a3 = document.createElement('a');
a3.setAttribute('href', menuLinks[2].href);
a3.textContent = menuLinks[2].text;
topMenuEl.append(a3);

let a4 = document.createElement('a');
a4.setAttribute('href', menuLinks[3].href);
a4.textContent = menuLinks[3].text;
topMenuEl.append(a4);

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll('#top-menu a');

// Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false;

// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working.

// Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array later.

// In the event listener, if the clicked <a> link has a class of active:

// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return to exit the handler.
// The event listener should remove a class name of active from each <a> element in topMenuLinks - whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
// The event listener should add a class name of active to the <a> element that was clicked.
// Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT); otherwise, set it to false.
topMenuEl.addEventListener('click', function(event) {
   event.preventDefault();
   if (event.target.tagName !== 'A') {
      return;
   }
   console.log(event.target.textContent);
   if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
   }
   topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
   });
   event.target.classList.add('active');
   let link = menuLinks.find(function(link) {
      return link.text === event.target.textContent;
   });
   if (link.subLinks) {
      showingSubMenu = true;
      buildSubMenu(link.subLinks);
      subMenuEl.style.top = '100%';
   } else {
      showingSubMenu = false;
      subMenuEl.style.top = '0';
   }
}
);

// In the event listener:

// If showingSubMenu is true:

// Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
// Set the CSS top property of subMenuEl to 100%.
// Otherwise (showingSubMenu is false):

// Set the CSS top property of subMenuEl to 0.
// Code the buildSubMenu function so that it:

// Clears the contents of subMenuEl.
// Iterates over the subLinks array passed as an argument, and for each "link" object:

// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the subMenuEl element.

function buildSubMenu(subLinks) {
   subMenuEl.innerHTML = '';
   subLinks.forEach(function(link) {
      let a = document.createElement('a');
      a.setAttribute('href', link.href);
      a.textContent = link.text;
      subMenuEl.append(a);
   });
};

// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code function should immediately return if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working.
// Next, the event listener should:

// Set showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// Remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
// Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

subMenuEl.addEventListener('click', function(event) {
   event.preventDefault();
   if (event.target.tagName !== 'A') {
      return;
   }
   console.log(event.target.textContent);
   showingSubMenu = false;
   subMenuEl.style.top = '0';
   topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
   });
   mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
}
);
























