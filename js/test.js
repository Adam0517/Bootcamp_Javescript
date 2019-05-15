// Create a html table with data.js
var tableData = data;
var allTbody = d3.select("tbody");

tableData.forEach((ufo) => {
    var row = allTbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Create a Date filter function
var submitDate = d3.select("#filter-btn-date");
var datecount = []
submitDate.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    // Get the value property of the input element
    var dateValue = inputDate.property("value");

    table = document.getElementById("ufo-table");
    newTr = table.getElementsByTagName("tr");

    for (i = 0; i < newTr.length; i++) {
        td = newTr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML == dateValue) {
                newTr[i].style.display = "" ;
            } else{
                newTr[i].style.display = "none" ;
                datecount.push(i);
            }
        } 
    }
    console.log(datecount);
    for (j = 0; j< datecount.length; j++){
        table.deleteRow(datecount[0]);
    }
  });


// Create a City filter function
var submitCity = d3.select("#filter-btn-city");
var citycount = []
submitCity.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputCity = d3.select("#cityF");
  // Get the value property of the input element
  var cityValue = inputCity.property("value");

  table = document.getElementById("ufo-table");
  newTr = table.getElementsByTagName("tr");

  for (i = 0; i < newTr.length; i++) {
      td = newTr[i].getElementsByTagName("td")[1];
      if (td) {
          if (td.innerHTML == cityValue) {
            newTr[i].style.display = "" ;
          } else{
            newTr[i].style.display = "none" ;
            citycount.push(i)
          }
      } 
    }
    console.log(citycount);
    for (j = 0; j< citycount.length; j++){
       table.deleteRow(citycount[0]);
    }
});

// Create a State filter function
var submitState = d3.select("#filter-btn-state");
submitState.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputState = d3.select("#stateF");
  // Get the value property of the input element
  var stateValue = inputState.property("value");

  table = document.getElementById("ufo-table");
  newTr = table.getElementsByTagName("tr");

  for (i = 0; i < newTr.length; i++) {
      td = newTr[i].getElementsByTagName("td")[2];
      if (td) {
          if (td.innerHTML == stateValue) {
              newTr[i].style.display = "" ;
          } else{
              newTr[i].style.display = "none" ;
          }
      } 
    }
});

// Create a Country filter function
var submitCountry = d3.select("#filter-btn-country");
submitCountry.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputCountry = d3.select("#countryF");
  // Get the value property of the input element
  var countryValue = inputCountry.property("value");

  table = document.getElementById("ufo-table");
  newTr = table.getElementsByTagName("tr");

  for (i = 0; i < newTr.length; i++) {
      td = newTr[i].getElementsByTagName("td")[3];
      if (td) {
          if (td.innerHTML == countryValue) {
              newTr[i].style.display = "" ;
          } else{
              newTr[i].style.display = "none" ;
          }
      } 
    }
});


// Create a Shape filter function
var submitShape = d3.select("#filter-btn-shape");
submitShape.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputShape = d3.select("#shapeF");
  // Get the value property of the input element
  var shapeValue = inputShape.property("value");

  table = document.getElementById("ufo-table");
  newTr = table.getElementsByTagName("tr");

  for (i = 0; i < newTr.length; i++) {
      td = newTr[i].getElementsByTagName("td")[4];
      if (td) {
          if (td.innerHTML == shapeValue) {
              newTr[i].style.display = "" ;
          } else{
              newTr[i].style.display = "none" ;
          }
      } 
    }
});

// Create a reload function
var submitReload = d3.select("#filter-btn-reload");

submitReload.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  d3.select("tbody").selectAll("tr").remove();
  var allTbody = d3.select("tbody");

  tableData.forEach((ufo) => {
    var row = allTbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}); 