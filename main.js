var CC, YY, MM, DD, d, dayValue;
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
];
var femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.submissionForm.year.value == "" || document.submissionForm.year.value.length !=4 || document.submissionForm.year.value >2100 || document.submissionForm.year.value <=1900) {
        alert( "provide a valid year of birth!");
        document.submissionForm.year.focus();
        return false;
};

else if( document.submissionForm.month.value == "" || isNaN(document.submissionForm.month.value) || document.submissionForm.month.value.length !=2 || document.submissionForm.month.value >12 || document.submissionForm.month.value <=0) {
    alert( "provide your birthmonth");
    document.submissionForm.month.focus();
    return false;
};
else if( document.submissionForm.date.value == "" || isNaN( document.submissionForm.month.value) || document.submissionForm.month.value.length !=2 || document.submissionForm.date.value >31 || document.submissionForm.date.value <=0) {
    alert( "provide a valid date" );
    document.submissionForm.day.focus();
    return false;
};
else if( genders[0].checked==false && genders[1].checked==false ) {
    alert( "select male or female");
    return false;
};
else{
        return true;
}

};


function