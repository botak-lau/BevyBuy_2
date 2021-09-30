package com.bevybuy.webproject.controller.dto;

public class SellerDTO {

    private String fullName;
    private String sellerInfo;  //coName;
    private String address1;
    private String address2;
    private String postalCode;
    private String email;
    private String comDescription;
    //private String referralCode;
    private String mobileNum;

    public SellerDTO(String fullName, String sellerInfo, String address1, String address2,
                     String postalCode, String email, String mobileNum, String comDescription
    ) {
        this.fullName = fullName;
        this.sellerInfo = sellerInfo;
        this.address1 = address1;
        this.address2 = address2;
        this.postalCode = postalCode;
        this.email = email;
        this.mobileNum = mobileNum;
        this.comDescription = comDescription;
        //this.referralCode = referralCode;
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
}
