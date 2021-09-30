//package com.bevybuy.webproject.service;
//
//import com.bevybuy.webproject.repository.SellerRepository;
//import com.bevybuy.webproject.repository.entity.Product;
//import com.bevybuy.webproject.repository.entity.Seller;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.List;
//
//public class SellerServiceMySQL implements SellerService {
//
//    private final SellerRepository sellerRepository;
//
//    public SellerServiceMySQL(@Autowired SellerRepository sellerRepository) {
//        this.sellerRepository = sellerRepository;
//    }
//
//
//    @Override
//    public Seller save(Seller seller) {
//        return this.sellerRepository.save(seller);
//    }
//
//    @Override
//    public void delete(Integer sellerId) {
//        //todo implement
//
//    }
//
//    @Override
//    public List<Product> all() {
//        //todo implement
//        return null;
//    }
//
//    @Override
//    public Product findById(Integer sellerId) {
//        //todo implement
//        return null;
//    }
//}
