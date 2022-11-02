package biz.global.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import biz.global.model.Products;

@Repository
public interface ProductRepo extends JpaRepository<Products, Long> {
	
	@Query(nativeQuery = true, value = "select * from products where owner_user_id = ?1 and active = true")
	List<Products> findByProductOwner(Long user_id);

}
