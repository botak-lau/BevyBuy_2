package com.bevybuy.webproject.controller.dto;

import com.bevybuy.webproject.repository.entity.Seller;

public class ProductDTO {

    private String itemName;    //itemCategory;
    private String description; //itemDescription;
    private Double price;
    private Double discount;
    private String imageUrl1;
    private String imageUrl2;
    private String imageUrl3;
    private Integer minQty;
    private Integer offerPeriod;
    private String effectiveDate;
    private String organizer;
    private String areaCode;    //area;
    private String delivery;    //deliveryServices;
    private String productModel;

    private Seller seller;

    public ProductDTO(String itemName, String description, String productModel, Double price, Double discount, String imageUrl1, String imageUrl2,
                      String imageUrl3,
                      Integer minQty, Integer offerPeriod, String effectiveDate, String organizer, String areaCode, String delivery, Seller seller) {
        this.itemName = itemName;
        this.description = description;
        this.productModel = productModel;
        this.price = price;
        this.discount = discount;
        this.imageUrl1 = imageUrl1;
        this.imageUrl2 = imageUrl2;
        this.imageUrl3 = imageUrl3;
        this.minQty = minQty;
        this.offerPeriod = offerPeriod;
        this.effectiveDate = effectiveDate;
        this.organizer = organizer;
        this.areaCode = areaCode;
        this.delivery = delivery;
        this.seller = seller;

    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductModel() {
        return productModel;
    }

    public void setProductModel(String productModel) {
        this.productModel = productModel;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public String getImageUrl1() {
        return imageUrl1;
    }

    public void setImageUrl1(String imageUrl1) {
        this.imageUrl1 = imageUrl1;
    }

    public String getImageUrl2() {
        return imageUrl2;
    }

    public void setImageUrl2(String imageUrl2) {
        this.imageUrl2 = imageUrl2;
    }

    public String getImageUrl3() {
        return imageUrl3;
    }

    public void setImageUrl3(String imageUrl3) {
        this.imageUrl3 = imageUrl3;
    }

    public Integer getMinQty() {
        return minQty;
    }

    public void setMinQty(Integer minQty) {
        this.minQty = minQty;
    }

    public Integer getOfferPeriod() {
        return offerPeriod;
    }

    public void setOfferPeriod(Integer offerPeriod) {
        this.offerPeriod = offerPeriod;
    }

    public String getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public String getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

}
