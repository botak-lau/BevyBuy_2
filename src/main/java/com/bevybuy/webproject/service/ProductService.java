package com.bevybuy.webproject.service;

import com.bevybuy.webproject.repository.entity.Product;
import com.bevybuy.webproject.repository.entity.Seller;

import java.util.List;

public interface ProductService {

    Product save(Product product);

    //Seller save(Seller seller);

    void delete(Integer productId);

    List<Product> all();

    Product findById(Integer productId);

}
