package com.bevybuy.webproject.service;

import com.bevybuy.webproject.repository.ProductRepository;
import com.bevybuy.webproject.repository.entity.Product;
import com.bevybuy.webproject.repository.entity.Seller;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceMySQL implements ProductService {

    private final ProductRepository productRepository;
   // private final SellerRepository sellerRepository;

    public ProductServiceMySQL(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product) {
        return this.productRepository.save(product);
    }

//    @Override
//    public Seller save(Seller seller) {
//        return this.sellerRepository.save(seller);
//    }

    @Override
    public void delete(Integer productId) {
        this.productRepository.deleteById(productId);
    }

    @Override
    public List<Product> all() {
        List<Product> products = new ArrayList<>();
        this.productRepository.findAll().forEach(product -> products.add(product));
        return products;
    }

    @Override
    public Product findById(Integer productId) {
        Optional<Product> product = this.productRepository.findById(productId);
        Product productResponse = product.get();
        return productResponse;
    }

}
