package biz.global.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import biz.global.model.NotifResponseModel;
import biz.global.model.ResponseModel;
import biz.global.model.Tips;
import biz.global.model.Users;
import biz.global.repo.TipsRepo;
import biz.global.repo.UsersRepo;

@RestController
@RequestMapping("api/tip/")
@CrossOrigin(origins = "http://localhost:3000")
public class TipsController {
	
	@Autowired
	private TipsRepo tipsRepo;
	
	@Autowired
	private UsersRepo usersRepo;
	
	@PostMapping(value = "add")
	public ResponseEntity<ResponseModel> addTip(@RequestBody Tips tips) {
		tipsRepo.save(tips);
		return ResponseEntity.ok().body(new ResponseModel(1, "tip has been added", null));
	}
	
	@GetMapping(value = "/notif/{id}")
	public ResponseEntity<NotifResponseModel> getNotif(@PathVariable Long id) {
		List<Tips> tips = tipsRepo.findTips(id);
		List<Tips> seenTips = tips.stream().filter(tip -> tip.getSeen().equals(false) && tip.getDeleteRespondentSide().equals(false)).collect(Collectors.toList());
		
		return ResponseEntity.ok().body(new NotifResponseModel(1, "success", seenTips.size(), tips));
	}
	
	@PatchMapping(value = "/seen/{id}")
	public ResponseEntity<NotifResponseModel> seenTip(@PathVariable Long id) {
		Optional<Tips> tip = tipsRepo.findById(id);
		if(tip.isEmpty()) {
			return ResponseEntity.ok().body(new NotifResponseModel(0, "Tip does not exist"));
		}
		
		tip.get().setSeen(true);
		if(tip.get().getSeenDate() == null) {
			tip.get().setSeenDate(LocalDate.now());
		}
		tipsRepo.save(tip.get());
		
		return ResponseEntity.ok().body(new NotifResponseModel(1, "Tip seen"));
	}
	
	public ResponseEntity<NotifResponseModel> getAll(@PathVariable Long id) {
		List<Tips> tips = tipsRepo.findAll();
		return ResponseEntity.ok().body(new NotifResponseModel(1, "success", tips.size(), tips));
	}
	
	@DeleteMapping(value = "delete")
	public ResponseEntity<NotifResponseModel> deleteTip(@RequestParam Long tip_id, @RequestParam String type) {
		Optional<Tips> tip = tipsRepo.findById(tip_id);
		if(tip.isEmpty()) {
			return ResponseEntity.ok().body(new NotifResponseModel(0, "Tip does not exist"));
		}
		if(tip.isPresent() && type.equals("admin")) {
			tip.get().setDeleteOwnerSide(true);
		}
		
		tip.get().setDeleteRespondentSide(true);
		tipsRepo.save(tip.get());
		return ResponseEntity.ok().body(new NotifResponseModel(1, "Tip has been deleted"));
	}
}
