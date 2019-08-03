// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newBook = {
    title: $("#title").val().trim(),
    author: $("#author").val().trim(),
    genre: $("#genre").val().trim(),
    pages: $("#pages").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBook)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#author").val("");
  $("#genre").val("");
  $("#pages").val("");

});

var data = [{
  name: "WYCA Central Carolinas",
  capacity: 40,
  opensAt: '17:00',
  female: true,
  male: false,
},
{
  name: "HHRO North Carolinas",
  capacity: 40,
  opensAt: '17:00',
  female: false,
  male: true,
},
{
  name: "Urban Ministry Center",
  capacity: 40,
  opensAt: '17:00',
  female: true,
  male: true,
},
{
  name: "Uptown shelter",
  capacity: 40,
  opensAt: '17:00',
  female: true,
  male: true,
}
]





$('#female').on('click', function () {
var filteredArray = data.filter(each => each.female === true)
console.log(filteredArray);
$("#shelters").empty()
$("#shelters").append(`<h2>Female only shelters</h2>`)
displayShelters(filteredArray)
})

$('#male').on('click', function () {
var filteredArray = data.filter(each => each.male === true)
console.log(filteredArray);
$("#shelters").empty()
$("#shelters").append(`<h2>Male only shelters</h2>`)
displayShelters(filteredArray)
})

$('#both').on('click', function () {
var filteredArray = data.filter(each => each.female === true && each.male === true)
console.log(filteredArray);
$("#shelters").empty()
$("#shelters").append(`<h2>Shelters for both genders</h2>`)
displayShelters(filteredArray)
})

function displayShelters(array) {
for (let i = 0; i < array.length; i++) {
  var newShelter = $(`<div>${array[i].name}</div>`)
  $("#shelters").append(newShelter)
}
}

$("#shelters").append(`<h2>Showing all shelters</h2>`)
displayShelters(data)

