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

submitDate.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var dateValue = inputDate.property("value");

  var filteredDate = tableData.filter(ufoRow => ufoRow.datetime === dateValue);

  if (filteredDate.length > 0){
      //Clean original table 
      d3.select("tbody").selectAll("tr").remove();
      var newTbody = d3.select("tbody");
      // Finally, show the filtered content
      filteredDate.forEach((ufo) => {
          var row = newTbody.append("tr");
          Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });}else{
        d3.select("tbody").selectAll("tr").remove();
        d3.select("tbody").append("tr").attr("style","color:red").text("No matched resluts");
        d3.select("tbody").append("tr").attr("style","color:red").text("Date is from 1/1/2010-1/13/2010");
    }
});

// Create a City filter function
var submitCity = d3.select("#filter-btn-city");

submitCity.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputCity = d3.select("#cityF");

  // Get the value property of the input element
  var cityValue = inputCity.property("value");

  var filteredCity = tableData.filter(ufoRow => ufoRow.city === cityValue);

  if (filteredCity.length > 0){
      //Clean original table 
      d3.select("tbody").selectAll("tr").remove();
      var newTbody = d3.select("tbody");
      // Finally, show the filtered content
      filteredCity.forEach((ufo) => {
          var row = newTbody.append("tr");
          Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });}else{
        d3.select("tbody").selectAll("tr").remove();
        d3.select("tbody").append("tr").attr("style","color:red").text("No matched resluts");
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

  var filteredState = tableData.filter(ufoRow => ufoRow.state === stateValue);

  if (filteredState.length > 0){
      //Clean original table 
      d3.select("tbody").selectAll("tr").remove();
      var newTbody = d3.select("tbody");
      // Finally, show the filtered content
      filteredState.forEach((ufo) => {
          var row = newTbody.append("tr");
          Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });}else{
        d3.select("tbody").selectAll("tr").remove();
        d3.select("tbody").append("tr").attr("style","color:red").text("No matched resluts");
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

  var filteredCountry = tableData.filter(ufoRow => ufoRow.country === countryValue);

  if (filteredCountry.length > 0){
      //Clean original table 
      d3.select("tbody").selectAll("tr").remove();
      var newTbody = d3.select("tbody");
      // Finally, show the filtered content
      filteredCountry.forEach((ufo) => {
          var row = newTbody.append("tr");
          Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });}else{
        d3.select("tbody").selectAll("tr").remove();
        d3.select("tbody").append("tr").attr("style","color:red").text("No matched resluts");
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

  var filteredShape = tableData.filter(ufoRow => ufoRow.shape === shapeValue);

  if (filteredShape.length > 0){
      //Clean original table 
      d3.select("tbody").selectAll("tr").remove();
      var newTbody = d3.select("tbody");
      // Finally, show the filtered content
      filteredShape.forEach((ufo) => {
          var row = newTbody.append("tr");
          Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });}else{
        d3.select("tbody").selectAll("tr").remove();
        d3.select("tbody").append("tr").attr("style","color:red").text("No matched resluts");
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
