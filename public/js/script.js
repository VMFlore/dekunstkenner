let menuKnop = document.querySelector(".menu1");
let menuKnopD2 = document.querySelector(".menuKnopD2");
let hetMenu = document.querySelector(".menu");
let kruisMenu = document.querySelector(".menu2");
let menuD1 = document.querySelector(".menuD1");

function openMenu() {
  hetMenu.classList.add("menuD1");
  menuKnop.classList.add("menuKnopD2");
}
menuKnop.addEventListener("click", openMenu);


function sluitMenu() {
  hetMenu.classList.remove("menuD1");
  menuKnop.classList.remove("menuKnopD2");

}
kruisMenu.addEventListener("click", sluitMenu);


// init Isotope
var iso = new Isotope( '.deWerken', {
  itemSelector: '.element-item',
	layoutMode: 'fitRows'
});
// filter functions
var filterFns = {};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
