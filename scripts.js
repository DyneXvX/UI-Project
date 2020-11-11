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

  //Prevents future dates from being chosen for past work experience 
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("workExp1startDate").setAttribute("max", today);
document.getElementById("workExp1endDate").setAttribute("max", today);
document.getElementById("workExp2startDate").setAttribute("max", today);
document.getElementById("workExp2endDate").setAttribute("max", today);