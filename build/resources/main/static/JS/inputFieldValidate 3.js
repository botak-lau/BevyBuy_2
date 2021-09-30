const formElem = document.getElementById('productForm');
const inputValue = document.getElementById('area')
const errorElement = document.getElementById('error');


formElem.addEventListener('submit', (e) => {
    var areaCode;
    let isValidInput = (is_valid_datalist_value(document.getElementById('area').value));

    areaCode = document.getElementById('area').value;
    // Save data to sessionStorage
    sessionStorage.setItem('areaCode', areaCode);

    console.log('areaCode  ', areaCode);

    if (!isValidInput) {

        e.preventDefault();
        errorElement.innerText = "Please select a valid input"
        inputValue.value = ""
        document.getElementById('area').style.border = "1px solid red"
        document.getElementById('error-icon').className = "fas fa-exclamation-circle";
    } else {
        errorElement.innerText = ""
        inputValue.value = "";
        document.getElementById('area').style.border = "1px inset grey"
        document.getElementById('error-icon').className = "";

        //here I refresh the page to access the areaCode value stored in session storage
        window.location.reload()
    }
})

function is_valid_datalist_value(inputValue) {
    let option = document.querySelector("#areas" + " option[value='" + inputValue + "']");

    if (option != null) {
        return option.value.length > 0;
    }
    return false;
}
