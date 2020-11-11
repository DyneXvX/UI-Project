[ 'datePicker', 'dateAvailable' ].forEach(function( id ) {     // set default date to today's date

    document.getElementById( id ).valueAsDate = new Date(); 

});

document.getElementById('dateAvailable').min = new Date().toISOString().split('T')[0];   // minimum date is today's date


function validateForm() {
    var ssn1, ssn2, ssn3, text;
  
    ssn1 = document.forms["myForm"]["ssn-1"].value;
    ssn2 = document.forms["myForm"]["ssn-2"].value;
    ssn3 = document.forms["myForm"]["ssn-3"].value;

    if (isNaN(ssn1) || isNaN(ssn2) || isNaN(ssn3))    // validate SSN
    { 
        document.getElementById("validate").innerHTML = "Social Security number must contain numbers only";
        document.getElementById('ssn').scrollIntoView();
        return false;
    } 
    else
    {
        alert("Your application has been successfully submitted");
    }
  }

  //Makes all the month fields have a default date of today
const monthControl = document.querySelectorAll('input[type="month"]');
const date= new Date()
const month=("0" + (date.getMonth() + 1)).slice(-2)
const year=date.getFullYear()

monthControl.forEach((e) => {
    e.value = `${year}-${month}`;
});