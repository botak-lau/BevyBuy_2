package com.bevybuy.webproject.repository.entity;

import com.bevybuy.webproject.controller.dto.SellerDTO;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sellerId")
    private Integer sellerId;

    private String fullName;
    private String sellerInfo;  //coName;
    private String address1;
    private String address2;
    private String postalCode;
    private String email;
    private String comDescription;
    //private String referralCode;
    private String mobileNum;

    public Seller() {}

    public Seller(SellerDTO sellerDTO) {
        this.fullName = sellerDTO.getFullName();
        this.sellerInfo = sellerDTO.getSellerInfo();
        this.address1 = sellerDTO.getAddress1();
        this.address2 = sellerDTO.getAddress2();
        this.postalCode = sellerDTO.getPostalCode();
        this.email = sellerDTO.getEmail();
        this.mobileNum = sellerDTO.getMobileNum();
        this.comDescription = sellerDTO.getComDescription();
        //this.referralCode = sellerDTO.getReferralCode();
    }

    //PRODUCT Mapping
//    @OneToMany( fetch = FetchType.EAGER, mappedBy = "seller")
//    private List<Product> products = new ArrayList<>();
//
//    public List<Product> getProducts() {
//        return products;
//    }
//
//    public void setProducts(List<Product> products) {
//        this.products = products;
//    }
    /////////////////////////////////////////

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getSellerInfo() {
        return sellerInfo;
    }

    public void setSellerInfo(String sellerInfo) {
        this.sellerInfo = sellerInfo;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNum() {
        return mobileNum;
    }

    public void setMobileNum(String mobileNum) {
        this.mobileNum = mobileNum;
    }

    public String getComDescription() {
        return comDescription;
    }

    public void setComDescription(String comDescription) {
        this.comDescription = comDescription;
    }

//    public String getReferralCode() {
//        return referralCode;
//    }
//
//    public void setReferralCode(String referralCode) {
//        this.referralCode = referralCode;
//    }

    @Override
    public String toString() {
        return "Seller{" +
                "sellerId=" + sellerId +
                ", fullName='" + fullName + '\'' +
                ", sellerInfo='" + sellerInfo + '\'' +
                ", address1='" + address1 + '\'' +
                ", address2='" + address2 + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", email='" + email + '\'' +
                ", comDescription='" + comDescription + '\'' +
                //", referralCode='" + referralCode + '\'' +
                '}';
    }
}
