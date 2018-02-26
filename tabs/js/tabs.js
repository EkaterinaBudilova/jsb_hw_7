const tabs = document.querySelector('ul.tabs-nav');
const tab = tabs.firstElementChild.cloneNode(true);
console.log(tabs.firstElementChild.innerHTML);
tabs.appendChild(tab);
