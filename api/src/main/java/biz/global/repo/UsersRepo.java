package biz.global.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.global.model.Users;

public interface UsersRepo extends JpaRepository<Users, Long> {

}
