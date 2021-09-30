package com.bevybuy.webproject;

import com.bevybuy.webproject.repository.entity.Product;
import com.bevybuy.webproject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class WebprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebprojectApplication.class, args);
	}
}
