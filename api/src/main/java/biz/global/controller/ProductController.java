package biz.global.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;

import biz.global.model.Products;
import biz.global.model.ResponseModel;
import biz.global.model.Users;
import biz.global.repo.ProductRepo;
import biz.global.util.FileUploadUtil;

@RestController
@RequestMapping("api/product/")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductRepo productRepo;
	
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
	

}
