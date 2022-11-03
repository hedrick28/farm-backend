package biz.global.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import biz.global.model.ResponseModel;
import biz.global.model.Users;
import biz.global.repo.UsersRepo;

@RestController
@RequestMapping("api/users/")
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {
	
	@Autowired
	private UsersRepo usersRepo;
	
	BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	
	@GetMapping(value = "all")
	public List<Users> getAllUsers() {
		return usersRepo.findAllUsers();
	}
	
	@PatchMapping(value = "update/profile")
	public ResponseEntity<ResponseModel> updateProfile(@RequestBody Users info) throws JsonProcessingException {
		Optional<Users> user = usersRepo.findById(info.getUser_id());
		if(user.isEmpty()) {
			return ResponseEntity.ok().body(new ResponseModel(0, "User does not exist", null));
		}
		
		if(info.getPassword() == null && info.getUserName() == null) {
			info.setPassword(user.get().getPassword());
			info.setUserName(user.get().getUserName());
		}else {
			String hashedPassword = bcrypt.encode(info.getPassword());
			info.setPassword(hashedPassword);
		}
		
		info.setRole(user.get().getRole());
		info.getAddress().stream().forEach(addrs -> addrs.setUser(info));
		
		Users result = usersRepo.save(info);
		return ResponseEntity.ok().body(new ResponseModel(1, "Profile has been modified",result ));
	}

}
