/*
IPRO 497 - Team E - Spring 2022

Description: 
This file takes data from report-form.html and creates a report in the database.
*/

// Create a new Report
async function createParseReport() {
  // Create new Parse object: "Report"
  const report = new Parse.Object("Reports");
  console.log("report object created");
  let id = parseInt(document.getElementById("user-id").value);
  let lat = parseFloat(document.getElementById("lat").value);
  let long = parseFloat(document.getElementById("long").value);

  // Set the input values to the new "Report" object
  report.set("user_id", id);
  report.set("accident_location", new Parse.GeoPoint({latitude: lat, longitude: long}));
  report.set("report_date", new Date());

  report.set("report_id", 104);

  console.log('Data input: ', id, lat, long);
  console.log('Report id: ', report.get("user_id"));

  try {
    // Call the save method, which returns the saved object if successful
    report = await report.save();
    console.log('Result: ', report);
    if (report !== null) {
      // Notify the success by getting the attributes from the "Report" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `New report created with success! Report ID: ${
          report.id
        }, ${report.get("objectId")}`
      );
      console.log('Reports created', report);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Add on click listener to call the create parse report function
document.getElementById("submit").addEventListener("click", async function () {
  createParseReport();
});