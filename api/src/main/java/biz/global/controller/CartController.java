package biz.global.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import biz.global.model.Cart;
import biz.global.model.ResponseModel;
import biz.global.repo.CartRepo;

@RestController
@RequestMapping("api/cart/")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
	
	@Autowired
	private CartRepo cartRepo;
	
	@PostMapping(value = "add")
	public ResponseEntity<ResponseModel> addToCart(@RequestBody Cart cart) {
		Cart add = cartRepo.save(cart);
		return ResponseEntity.ok().body(new ResponseModel(1, "Product has been added to cart", add));
	}
	
}
