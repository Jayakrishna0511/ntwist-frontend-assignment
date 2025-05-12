function sortList() {
    const ul = document.getElementById("nameList");
    const items = Array.from(ul.getElementsByTagName("li"));  //converts  into a real array, which allows us to use array methods like sort().
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    ul.innerHTML = "";
    items.forEach(item => ul.appendChild(item));
  }
