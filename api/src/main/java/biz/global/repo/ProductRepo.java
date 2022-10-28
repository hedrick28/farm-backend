package biz.global.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.global.model.Products;

public interface ProductRepo extends JpaRepository<Products, Long> {
	
	

}
