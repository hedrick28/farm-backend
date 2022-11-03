package biz.global.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import biz.global.model.Products;
import biz.global.model.ResponseModel;
import biz.global.model.Users;
import biz.global.repo.ProductRepo;
import biz.global.repo.UsersRepo;
import biz.global.util.FileUploadUtil;

@RestController
@RequestMapping("api/product/")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private UsersRepo userRepo;
	
	@PostMapping(value = "upload", produces = {MediaType.ALL_VALUE, "application/json"})
	public ResponseEntity<ResponseModel> upload(@RequestParam("imageFile") MultipartFile file) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
 
        String uploadDir = "target/farm-to-market/src/assets/uploads";
 
        FileUploadUtil.saveFile(uploadDir, fileName, file);
		return ResponseEntity.ok().body(new ResponseModel(1, "success",  null));
		
	}
	
	@PostMapping(value = "add")
	public ResponseEntity<ResponseModel> addProduct(@RequestBody Products product) {
		productRepo.save(product);
		return ResponseEntity.ok().body(new ResponseModel(1, "new product has been added",  null));
	}
	
	@GetMapping(value = "myproduct/{id}")
	public List<Products> all (@PathVariable Long id) {
		//Optional<Users> user = userRepo.findById(id);
		List<Products> products = productRepo.findByProductOwner(id);
		return products;
	}
	
	@GetMapping(value = "product/{id}")
	public ResponseEntity<ResponseModel> getProductById(@PathVariable Long id) {
		Optional<Products> product = productRepo.findById(id);
		if(product.isEmpty()) {
			return ResponseEntity.ok().body(new ResponseModel(0, "product does not exist", null));
		}
		
		return ResponseEntity.ok().body(new ResponseModel(1, "product exist", product.get()));
	}
	
	@DeleteMapping(value = "delete/{id}")
	public ResponseEntity<ResponseModel> delete(@PathVariable Long id) {
		Optional<Products> product = productRepo.findById(id);
		if(product.isEmpty()) {
			return ResponseEntity.ok().body(new ResponseModel(0, "product does not exist", null));
		}
		
		product.get().setActive(false);
		productRepo.save(product.get());
		return ResponseEntity.ok().body(new ResponseModel(1, "product has been deleted", null));
	}
	
	@GetMapping(value="all")
	public List<Products> getAllProducts() {
		return productRepo.findAll();
	}
	
	

}
