package biz.global.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import biz.global.model.Tips;

public interface TipsRepo extends JpaRepository<Tips, Long> {
	
	@Query(nativeQuery = true, value = "select *from tips where (respondent_user_id = ?1 or everyone = true) and delete_respondent_side <> true order by tip_id desc;")
	List<Tips> findTips(Long id);
	
	@Query(nativeQuery = true, value = "select *from tips where owner_user_id = ?1 and delete_owner_side = false order by tip_id desc;")
	List<Tips> findOwnerTips(Long id);
}
