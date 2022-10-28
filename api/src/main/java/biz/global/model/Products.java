package biz.global.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long product_id;
	
	private String productName;
	
	private String description;
	
	private Double price;
	
	private int stock;
	
	private String image;
	
	private String unit;
	
	@ManyToOne
	private Users owner;

}
