package com.bevybuy.webproject.repository;

import com.bevybuy.webproject.repository.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {


}
