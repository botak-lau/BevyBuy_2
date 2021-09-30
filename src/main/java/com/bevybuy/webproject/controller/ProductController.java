package com.bevybuy.webproject.controller;


import com.bevybuy.webproject.component.FileUploadUtil;
import com.bevybuy.webproject.controller.dto.ProductDTO;
import com.bevybuy.webproject.controller.dto.SellerDTO;
import com.bevybuy.webproject.repository.entity.Product;
import com.bevybuy.webproject.repository.entity.Seller;
import com.bevybuy.webproject.service.ProductService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/item")
public class ProductController {

    @Value("${image.folder}")
    private String imageFolder;

    final ProductService productService;


    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Product> getProducts(){
        return productService.all();
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        productService.delete(id);
    }

    @CrossOrigin
    @PostMapping("/add")
    public Product /*List<Object>*/ save(
            // PRODUCT INFO
            @RequestParam(name="itemName") String itemName,
            @RequestParam(name="description") String description,
            @RequestParam(name="productModel") String productModel,
            @RequestParam(name="price") Double price,
            @RequestParam(name="discount") Double discount,
            @RequestParam(name="imageUrl1") String imageUrl1,
            @RequestParam(name="imageUrl2") String imageUrl2,
            @RequestParam(name="imageUrl3") String imageUrl3,
            @RequestParam(name="minQty") Integer minQty,
            @RequestParam(name="offerPeriod") Integer offerPeriod,
            @RequestParam(name="effectiveDate") String effectiveDate,
            @RequestParam(name="organizer") String organizer,
            @RequestParam(name="areaCode") String areaCode,
            @RequestParam(name="delivery") String delivery,

            //SELLER INFO
            @RequestParam(name="fullName") String fullName,
            @RequestParam(name="sellerInfo") String sellerInfo,
            @RequestParam(name="address1") String address1,
            @RequestParam(name="address2") String address2,
            @RequestParam(name="postalCode") String postalCode,
            @RequestParam(name="email") String email,
            @RequestParam(name="mobileNum") String mobileNum,
            @RequestParam(name="comDescription") String comDescription,
            //@RequestParam(name="referralCode") String referralCode,

            //Images
            @RequestParam("imageObj1") MultipartFile mpf1,
            @RequestParam("imageObj2") MultipartFile mpf2,
            @RequestParam("imageObj3") MultipartFile mpf3

    ) throws IOException {

        //todo handle image files
        //saving images to the local directory
        String fileName1 = StringUtils.cleanPath(mpf1.getOriginalFilename());
        String fileName2 = StringUtils.cleanPath(mpf2.getOriginalFilename());
        String fileName3 = StringUtils.cleanPath(mpf3.getOriginalFilename());
        FileUploadUtil.saveFile(imageFolder, fileName1, fileName2, fileName3, mpf1, mpf2, mpf3);


        SellerDTO sellerDTO = new SellerDTO(fullName, sellerInfo, address1, address2, postalCode, email, mobileNum, comDescription);
        Seller seller = new Seller(sellerDTO);

        ProductDTO productDTO = new ProductDTO(itemName, description, productModel, price, discount, imageUrl1, imageUrl2,
                                    imageUrl3, minQty, offerPeriod, effectiveDate, organizer, areaCode, delivery, seller);

        Product productResponse = productService.save(new Product(productDTO, seller));
        System.out.println(productResponse);
        return productResponse;

    }


}
