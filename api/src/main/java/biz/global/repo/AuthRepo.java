package biz.global.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.global.model.Users;

public interface AuthRepo extends JpaRepository<Users, Long> {

	Users findByUserName(String userName);
}
