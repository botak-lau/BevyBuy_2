package com.bevybuy.webproject.repository.entity;

import com.bevybuy.webproject.controller.dto.ProductDTO;

import javax.persistence.*;


@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

    private String itemName;    //itemCategory;
    private String description; //itemDescription;
    private String productModel;
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



    //SELLER MAPPING
    @ManyToOne(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "sellerId", referencedColumnName ="sellerId")
    private Seller seller;

    /*@JoinColumn(
            name = "seller_id",
            referencedColumnName = "sellerId",
            nullable = false
    )*/
    //private Seller seller;

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }


//    public Integer getSellerId() {
//        return seller.getSellerId();
//    }


/////////////////////////////////////////////

    public Product() {}

    public Product(ProductDTO productDTO, Seller seller) {
        this.itemName = productDTO.getItemName();
        this.description = productDTO.getDescription();
        this.productModel = productDTO.getProductModel();
        this.price = productDTO.getPrice();
        this.discount = productDTO.getDiscount();
        this.imageUrl1 = productDTO.getImageUrl1();
        this.imageUrl2 = productDTO.getImageUrl2();
        this.imageUrl3 = productDTO.getImageUrl3();
        this.minQty = productDTO.getMinQty();
        this.offerPeriod = productDTO.getOfferPeriod();
        this.effectiveDate = productDTO.getEffectiveDate();
        this.organizer = productDTO.getOrganizer();
        this.areaCode = productDTO.getAreaCode();
        this.delivery = productDTO.getDelivery();
        this.seller = seller;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
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

    public String getProductModel() {
        return productModel;
    }

    public void setProductModel(String productModel) {
        this.productModel = productModel;
    }

    public void setDescription(String description) {
        this.description = description;
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
        return "/productImages/" + imageUrl1;
    }

    public void setImageUrl1(String imageUrl1) {
        this.imageUrl1 = imageUrl1;
    }

    public String getImageUrl2() {
        return "/productImages/" + imageUrl2;
    }

    public void setImageUrl2(String imageUrl2) {
        this.imageUrl2 = imageUrl2;
    }

    public String getImageUrl3() {
        return "/productImages/" + imageUrl3;
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

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", itemName='" + itemName + '\'' +
                ", description='" + description + '\'' +
                ", productModel='" + productModel + '\'' +
                ", price=" + price +
                ", discount=" + discount +
                ", imageUrl1='" + imageUrl1 + '\'' +
                ", imageUrl2='" + imageUrl2 + '\'' +
                ", imageUrl3='" + imageUrl3 + '\'' +
                ", minQty=" + minQty +
                ", offerPeriod=" + offerPeriod +
                ", effectiveDate='" + effectiveDate + '\'' +
                ", organizer='" + organizer + '\'' +
                ", areaCode='" + areaCode + '\'' +
                ", delivery='" + delivery + '\'' +
                //", seller=" + seller +
                '}';
    }
}



