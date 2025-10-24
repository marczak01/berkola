let persons = document.querySelectorAll(".team__person");
let arrows = document.querySelectorAll(".arrows__icon");

let changePerson = function () {
  persons.forEach((person) => {
    person.classList.toggle("team__person-hide");
  });
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    changePerson();
  });
});

// setInterval(changePerson, 3000);
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});
