//! <-------------------------------------------Getting Elements-------------------------------------------------------->

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    //*          <----------------------------------Get values---------------------------------->
  
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pinCode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    //*          <----------------------------------Get selected foods---------------------------------->
  
    const foods = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((food) => {
        foods.push(food.value);
      });
  
    //*          <----------------------------------Validate foods selection---------------------------------->
    if (foods.length < 2) {
      alert("Please select at least two food options.");
      return;
    }
  
    //! <-------------------------------------------Appending section-------------------------------------------------------->
  
    //*          <----------------------------------Creating new row---------------------------------->
  
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${email}</td>
          <td>${address}</td>
          <td>${pinCode}</td>
          <td>${gender}</td>
          <td>${foods.join(", ")}</td>
          <td>${state}</td>
          <td>${country}</td>
      `;
  
    //*          <----------------------------------Append the row in table---------------------------------->
  
    document.getElementById("dataTable").appendChild(newRow);
  
    //*          <----------------------------------Clear form fields---------------------------------->
  
    document.getElementById("form").reset();
  });