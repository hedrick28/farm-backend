package biz.global.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import biz.global.model.Users;
import biz.global.repo.UsersRepo;

@RestController
@RequestMapping("api/users/")
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {
	
	@Autowired
	private UsersRepo usersRepo;
	
	@GetMapping(value = "all")
	public List<Users> getAllUsers() {
		return usersRepo.findAllUsers();
	}

}
