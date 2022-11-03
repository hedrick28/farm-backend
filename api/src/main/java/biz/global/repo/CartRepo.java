package biz.global.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.global.model.Cart;

public interface CartRepo extends JpaRepository<Cart, Long> {

}
