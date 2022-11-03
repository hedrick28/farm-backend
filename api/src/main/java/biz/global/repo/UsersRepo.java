package biz.global.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import biz.global.model.Users;

public interface UsersRepo extends JpaRepository<Users, Long> {
	@Query(nativeQuery = true, value ="select * from users where role <> 'admin'")
	List<Users> findAllUsers();
}
