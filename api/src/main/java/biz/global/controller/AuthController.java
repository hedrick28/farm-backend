package biz.global.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import biz.global.model.ResponseModel;
import biz.global.model.Users;
import biz.global.repo.AuthRepo;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
	
	@Autowired
	private AuthRepo authRepo;
	
	BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	
	@PostMapping(value = "register")
	public ResponseEntity<ResponseModel> register(@RequestBody Users model) {
		Optional<Users> user = Optional.ofNullable(authRepo.findByUserName(model.getUserName()));
		if(user.isPresent()) {
			return ResponseEntity.ok().body(new ResponseModel(0, "Username already exist", null));
		}
		
		String hashedPassword = bcrypt.encode(model.getPassword());
		model.setPassword(hashedPassword);
		authRepo.save(model);
		return ResponseEntity.ok().body(new ResponseModel(1, "successfully registed", null));
 	}
	
	@PostMapping(value = "login")
	public ResponseEntity<ResponseModel> login(@RequestBody Users model) {
		Optional<Users> user = Optional.ofNullable(authRepo.findByUserName(model.getUserName()));
		if(user.isPresent() && user.get().getUserName().equals(model.getUserName()) && bcrypt.matches(model.getPassword(), user.get().getPassword()) && !user.get().getActiveDeactive()) {
			return ResponseEntity.ok().body(new ResponseModel(1, "successfully logged in", user.get()));
		}
		if(user.isPresent() && user.get().getActiveDeactive()) {
			return ResponseEntity.ok().body(new ResponseModel(0, "your account has been deactivated", null));
		}
		return ResponseEntity.ok().body(new ResponseModel(0, "Invalid username or password", null));
	}
	
}
