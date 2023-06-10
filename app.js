// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.
var menuLinks = [
 {text: 'about', href: '/about'},
 {text: 'catalog', href: '/catalog'},
 {text: 'orders', href: '/orders'},
 {text: 'account', href: '/account'},
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















