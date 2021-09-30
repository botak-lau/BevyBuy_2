console.log("controller page");

//Get saved data from sessionStorage
let districtCode = sessionStorage.getItem("areaCode");
console.log("district code...  ", districtCode);

////////////// create HTML element and return the card /////////////////////////
const createHTMLCard = (linkID, item, expireDay, sellingPrice) => `
    <div class="product-item-wrapper col-lg-4 col-md-6 col-sm-12">
      <div class="card h-100">
        <img
          src="${item.imageUrl1}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${item.productModel}</h5>
          <p class="card-text">${item.description}</p>
          <a
            id="${linkID}"
            href="#"
            class="card-link text-center"
            data-toggle="modal"
            data-target="#productModal"
            >View more</a
          >
        </div>
        <ul class="list-group list-group-flush border-bottom-0">
          <li class="list-group-item"><b>Retail Price: </b>$ ${item.price}</li>
          <li class="list-group-item"><b>Group Discount: </b>${item.discount}%</li>
          <li class="list-group-item h5"><b>Selling Price: </b> <span class="text-danger">$ ${sellingPrice}</span></li>
        </ul>
        <div id="card-footer" class="card-footer ">${expireDay}</div>
      </div>
    </div>
`;
////////////// end create HTML element and return the card /////////////////////////

////////////// function to display product details on the modal ////////////////////
function displayProductDetails(item) {
  document.getElementById("modalName").innerText = item.itemName;
  document.getElementById("first-image").src = item.imageUrl1;
  document.getElementById("second-image").src = item.imageUrl2;
  document.getElementById("third-image").src = item.imageUrl3;
  document.getElementById("modalDelivaryMethod").innerText = item.delivery;
  document.getElementById("modalMinQty").innerText = item.minQty;
  document.getElementById("modalSellerDetails").innerText = item.seller.sellerInfo;
}
////////////// end function to display product details on the modal //////////////////

//################### product controller class #####################
class ProductController {
  constructor() {
    this._items = [];
    this._itemsBeforeFiltering = [];
  }

  //filtering data based on district code
  filterItemsListedInDistricts() {
    console.log("this._items in the getItems", this._items);
    return this._items.filter((item) => item.areaCode === districtCode);
  }

  //clearing session storage
  clearSessionStorage() {
    // Remove saved data from sessionStorage
    sessionStorage.removeItem("areaCode");
  }

  /////////////// POST data to backend
  addItem(
    itemName,
    description,
    productModel,
    price,
    discount,
    imageUrl1,
    imageUrl2,
    imageUrl3,
    minQty,
    offerPeriod,
    effectiveDate,
    organizer,
    areaCode,
    delivery,
    fullName,
    sellerInfo,
    address1,
    address2,
    postalCode,
    email,
    mobileNum,
    comDescription,
    //referralCode,
    imageObj1,
    imageObj2,
    imageObj3
  ) {
    var productController = this;
    const formData = new FormData();

    formData.append("itemName", itemName);
    formData.append("description", description);
    formData.append("productModel", productModel);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("imageUrl1", imageUrl1);
    formData.append("imageUrl2", imageUrl2);
    formData.append("imageUrl3", imageUrl3);
    formData.append("minQty", minQty);
    formData.append("offerPeriod", offerPeriod);
    formData.append("effectiveDate", effectiveDate);
    formData.append("organizer", organizer);
    formData.append("areaCode", areaCode);
    formData.append("delivery", delivery);
    formData.append("fullName", fullName);
    formData.append("sellerInfo", sellerInfo);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("postalCode", postalCode);
    formData.append("email", email);
    formData.append("mobileNum", mobileNum);
    formData.append("comDescription", comDescription);
    //formData.append("referralCode", referralCode);
    //3 image files
    formData.append("imageObj1", imageObj1);
    formData.append("imageObj2", imageObj2);
    formData.append("imageObj3", imageObj3);

    fetch("http://localhost:8081/item/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("sucess post", data);
        //alert("Item successfully added to the list")
      })
      .catch((e) => console.log(e));
  }

  //////////////////// GET data from backend
  fetchData() {
    let productController = this;
    productController._items = [];
    productController._itemsBeforeFiltering = [];

    fetch("http://localhost:8081/item/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("print test fetch items", data);

        productController._items.push(...data);
        productController._itemsBeforeFiltering.push(...data);

        productController._items =
          productController.filterItemsListedInDistricts();
        console.log("_items  after filtering", productController._items);
        console.log(
          "_itemsBeforeFiltering without filtering",
          this._itemsBeforeFiltering
        );

        productController.displayItem();
      })
      .catch((e) => console.log(e));
  }

  //////////// render productItems on the webpage
  displayItem() {
    let productController = this;
    const productHTMLList = [];

    let itemsInDistrict = productController.filterItemsListedInDistricts();

    //creating array of product cards
    productController._items.forEach((item, index) => {
      //calculate selling price after discount
      let sellingPrice = item.price * ((100 - item.discount) / 100);
      sellingPrice = (Math.round((sellingPrice * 1000) / 10) / 100).toFixed(2); //(Math.round(num*100)/100).toFixed(2)

      //formating the price to two decimal places
      item.price = (Math.round((item.price * 1000) / 10) / 100).toFixed(2);

      //get the expired items and add those are not expired to createHTMLCard
      const startDate = new Date(item.effectiveDate);
      const OfferPeriod = item.offerPeriod;

      let expiryDate = productController.checkDateValidity(startDate, OfferPeriod);

      if (expiryDate != "expired") {
        const prductHTML = createHTMLCard(
          index,
          item,
          expiryDate,
          sellingPrice
        );
        //console.log("card  ", prductHTML);
        productHTMLList.push(prductHTML);
      }
    });

    //append the cards created by to the #row id
    const pHTML = productHTMLList.join("\n");
    //console.log(pHTML)
    document.querySelector("#product-row").innerHTML = pHTML;

    //create a loop to add the event listner to "View more" button in the card
    productController._items.forEach((item, index) => {
      //get the expired items and add those are not expired to model
      const startDate = new Date(item.effectiveDate);
      const OfferPeriod = item.offerPeriod;

      let expiryDate = productController.checkDateValidity(startDate, OfferPeriod);

      if (expiryDate != "expired") {
        document.getElementById(index).addEventListener("click", () => {
          displayProductDetails(item);

          //disabling the "Join the group" button for items are not stated offering
          if (expiryDate.substring(6, 12) === "starts") {
            document.getElementById("join-btn").disabled = true;
            document.getElementById("join-btn").innerHTML =
              "Please Come Back to Join";
            document.getElementById("join-btn").className = "btn btn-secondary";
            document.getElementById("close-button").className =
              "btn btn-primary";
            console.log("disable button");
          }

          if (expiryDate.substring(6, 10) === "ends") {
            document.getElementById("join-btn").disabled = false;
            document.getElementById("join-btn").innerHTML = "Join the Group";
            document.getElementById("join-btn").className = "btn btn-primary";
            document.getElementById("close-button").className =
              "btn btn-secondary";
            console.log("enable button");
          }
        });
      }
    });

    //clearing Session Storage
    productController.clearSessionStorage();
  } // end of displayItem() function

  /////////// checking if the offer is started or expired
  checkDateValidity(offerStartDate, offerPeriod) {
    let isWithInOfferPeriod = "";
    const daysPerWeek = 7;
    const msToDate = 1000 * 60 * 60 * 24;

    const todayDate = new Date();
    let offerExpiryDate = new Date(offerStartDate);

    offerExpiryDate.setDate(
      offerExpiryDate.getDate() + offerPeriod * daysPerWeek
    );

    if (todayDate >= offerStartDate && todayDate <= offerExpiryDate) {
      isWithInOfferPeriod = parseInt(
        (offerExpiryDate - todayDate) / msToDate,
        10
      );
      return `Offer ends in ${isWithInOfferPeriod} days`;
    } else if (todayDate < offerStartDate) {
      offerStartDate = offerStartDate.toString().substring(4, 15);
      return `Offer starts on ${offerStartDate}`;
    } else {
      return `expired`;
    }
  }
}
//################### end product controller class #####################
