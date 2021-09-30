//JavaScript to validate the seller form

//**TO DELETE *//
document.querySelector('#inputName').value = "Anthony";
document.querySelector("#inputCompany").value = "Tan Ah Kow Pte Ltd"
document.querySelector("#inputAddr").value = "Istana";
document.querySelector("#inputAddrUnit").value = "the whole place";
document.querySelector("#inputAddrPostal").value = "656565";
document.querySelector("#inputEmail").value = "tanahKOW@TAK.com";
document.querySelector("#inputMobileNum").value = "658888888";
document.querySelector("#inputItemDescription").value = "iPhone 20";
document.querySelector("#inputListPrice").value = "2000";
document.querySelector("#inputGroupDiscount").value = "15";
document.querySelector("#inputMinQty").value = "100";
document.querySelector("#inputOfferPeriod").value = "3";
//document.querySelector("#inputReferralCode").value = "1806123";
document.querySelector("#inputCommunityOrgz").value = "1920765";
document.querySelector("#inputCompanyDescription").value = "Tan Ah Kow is a fake company";
//**TO DELETE BLOCK ABOVE *//

//##ADDED 27SEP##//

const productController = new ProductController();
let storeImage1 = ""
let storeImage2 = ""
let storeImage3 = ""

//##Added 27SEP##//
    //========set min & max effective dates====//
    const today = new Date();
    let todayDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    let nextMonthDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 3)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

    document.getElementById("inputEffectiveDate").setAttribute("min", todayDate);
    document.getElementById("inputEffectiveDate").setAttribute("max", nextMonthDate);

formSeller.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputName = document.querySelector('#inputName');
    const inputCompany = document.querySelector('#inputCompany');
    const inputAddr = document.querySelector('#inputAddr');
    const inputAddrPostal = document.querySelector('#inputAddrPostal');
    const inputEmail = document.querySelector('#inputEmail');
    const inputMobileNum = document.querySelector('#inputMobileNum');
    const inputItemCategory = document.querySelector('#inputItemCategory');
    const inputItemDescription = document.querySelector('#inputItemDescription');
    const inputListPrice = document.querySelector('#inputListPrice');
    const inputGroupDiscount = document.querySelector('#inputGroupDiscount');
    const imageSeller1 = document.querySelector('#imageSeller1');
    const imageSeller2 = document.querySelector('#imageSeller2');
    const imageSeller3 = document.querySelector('#imageSeller3');
    const inputMinQty = document.querySelector('#inputMinQty');
    const inputOfferPeriod = document.querySelector('#inputOfferPeriod');
    const inputEffectiveDate = document.querySelector('#inputEffectiveDate');
    const inputCommunityOrgz = document.querySelector('#inputCommunityOrgz');
    //const inputReferralCode = document.querySelector('#inputReferralCode');
    const inputCompanyDescription = document.querySelector('#inputCompanyDescription');
    const area = document.querySelector('#area');
    const deliveryServices = document.querySelector('#deliveryServices');
//    Fernando added
    const productModelNode = document.querySelector('#productModel');




    //##Comment out 27SEP##//
    // const formList = [];
    // let checkboxChecked = [];
    // let isChecked = false;
    // let isRadioSelected = false;
    // let delivery = "";
    // const checkboxes = document.querySelectorAll("input[type=checkbox]");

    // function addForm() {




    //For the drop down menus======================================
    // const itemValue = newinputItemCategory.value;
    // const selectArea = newarea.value;
    // const deliveryServices = newdeliveryServices.value;


    const isItemSelected = validateItemDropDown();
    const isAreaSelected = validateAreaDropDown();
    const isDeliverySelected = validateDeliveryDropDown();


    if (!isItemSelected) {
        console.log('item not selected');
        document.querySelector("#inputItemCategory").setCustomValidity("Please selct one item");
        document.querySelector("#inputItemCategory").reportValidity();

        const selectItem = document.getElementById("inputItemCategory");
        selectItem.addEventListener("change", () => {
            console.log('in the selectItem event listener');
            document.querySelector("#inputItemCategory").setCustomValidity("");
            document.querySelector("#area").reportValidity();
        })

    } else if (!isAreaSelected) {
        console.log('else if - area not selected');
        document.querySelector("#area").setCustomValidity("Please select one area");
        document.querySelector("#area").reportValidity();

        const selectArea = document.getElementById("area");
        selectArea.addEventListener("change", () => {
            console.log('in the area event listener');
            document.querySelector("#area").setCustomValidity("");
            document.querySelector("#area").reportValidity();
        })

    } else if (!isDeliverySelected) {
        console.log('delivery not selected');
        document.querySelector("#deliveryServices").setCustomValidity("Please select one delivery services item");
        document.querySelector("#deliveryServices").reportValidity();

        const selectDelivery = document.getElementById("deliveryServices");
        selectDelivery.addEventListener("change", () => {
            console.log('in the selectDelivery event listener');
            document.querySelector("#deliveryServices").setCustomValidity("");
            document.querySelector("#deliveryServices").reportValidity();

        })

    } else {
        console.log("in the else statement - able to submit");

        //end For the drop down menus====================================

     checkWeeks(inputOfferPeriod)};
    //##27SEP  Get the values of the inputs - variable names to be same as MySQL columns
    console.log("In the function");

    const fullName = inputName.value;
    const sellerInfo = inputCompany.value;
    const address1 = inputAddr.value;
    const address2 = inputAddrUnit.value;
    const postalCode = inputAddrPostal.value;
    const email = inputEmail.value;
    const mobileNum = inputMobileNum.value;
    //const referralCode = inputReferralCode.value;
    const coDescription = inputCompanyDescription.value;

    const itemName = inputItemCategory.value;
    const description = inputItemDescription.value;
    const price = inputListPrice.value;
    const discount = inputGroupDiscount.value;
    const imageUrl1 = "images/" + imageSeller1.value.replace("C:\\fakepath\\", "");
    const imageUrl2 = "images/" + imageSeller2.value.replace("C:\\fakepath\\", "");
    const imageUrl3 = "images/" + imageSeller3.value.replace("C:\\fakepath\\", "");
    const minQty = inputMinQty.value;
    const offerPeriod = inputOfferPeriod.value;
    const effectiveDate = inputEffectiveDate.value;
    const organizer = inputCommunityOrgz.value;
    const areaCode = area.value;
    const delivery = deliveryServices.value;
    const productModel = productModelNode.value;

/*
    console.log('itemName =',  itemName + ' description =', description + ' price =', price + ' discount =', discount + ' imageUrl1 =', imageUrl1 + ' imageUrl2 =',  imageUrl2 + ' imageUrl3 =', imageUrl3 + ' minQty =', minQty + ' offerPeriod =', offerPeriod +
                ' effectiveDate =', effectiveDate + ' organizer =', organizer + ' areaCode =', areaCode +  ' delivery =', delivery +
                 ' fullName =', fullName + ' sellerInfo =', sellerInfo + ' address1 =', address1 + ' address2 =', address2, +
                 ' postalCode =', postalCode + ' email =', email + ' coDescription =', coDescription +
                  ' storeImage1 =', storeImage1 + ' storeImage2 =', storeImage2 + ' storeImage3', storeImage3);
*/

    productController.addItem(itemName, description, productModel, price, discount,   imageUrl1, imageUrl2, imageUrl3, minQty,
                               offerPeriod, effectiveDate, organizer, areaCode, delivery, fullName,
                               sellerInfo, address1, address2, postalCode, email, mobileNum, coDescription,
                               storeImage1, storeImage2, storeImage3);

    console.log("Form is submitted");

    inputName.value = '';
    inputCompany.value = '';
    inputAddr.value = '';
    inputAddrUnit.value = '';
    inputAddrPostal.value = '';
    inputEmail.value = '';
    inputMobileNum.value = '';
    inputItemCategory.value = '';
    inputItemDescription.value = '';
    inputListPrice.value = '';
    inputGroupDiscount.value = '';
    imageSeller1.value = '';
    imageSeller2.value = '';
    imageSeller3.value = '';
    inputMinQty.value = '';
    inputOfferPeriod.value = '';
    inputEffectiveDate.value = '';
    inputCommunityOrgz.value = '';
    //inputReferralCode.value = '';
    productModelNode.value = '';
    inputCompanyDescription.value = '';
    inputItemCategory.value = '';
    area.value = '';
    deliveryServices.value = '';
    document.querySelector("#radio_agree").checked = false;

    //redirecting to complete registration page
    window.location.href="seller_completeReg.html";

    return true;

});
//#######end of addForm########/



//======Functions=============================//
function checkWeeks(inputOfferPeriod) {
    if (inputOfferPeriod > 9 || inputOfferPeriod < 1); {
        alert: ("Offer period should be between 1 week and 6 weeks")
    }
};

function validateItemDropDown() {
    return (document.querySelector("#inputItemCategory").selectedIndex === 0) ? false : true;
}

function validateDeliveryDropDown() {
    return (document.querySelector("#deliveryServices").selectedIndex === 0) ? false : true;
}

function validateAreaDropDown() {
    return (document.querySelector("#area").selectedIndex === 0) ? false : true;
}


//##Added 27Sep
const input = document.querySelector('#imageSeller1');
input.addEventListener('change', () => {
    storeImage1 = input.files[0];
    console.log('storeImage1 :', storeImage1);
});

const input2 = document.querySelector('#imageSeller2');
input2.addEventListener('change', () => {
    storeImage2 = input2.files[0];
    console.log('storeImage2 :', storeImage2);
});

const input3 = document.querySelector('#imageSeller3');
input3.addEventListener('change', () => {
    storeImage3 = input3.files[0];
    console.log('storeImage3 :', storeImage3);
});
