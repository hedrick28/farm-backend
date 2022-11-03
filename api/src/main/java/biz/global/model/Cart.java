package biz.global.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cart_id;
	
	@OneToOne
	private Products product;
	
	@OneToOne
	private Users buyer;
	
	@OneToOne
	private Users seller;
	
	private LocalDate createdDate = LocalDate.now();
	
	private Boolean active = true;
	
	private String status;
	
	private int quantity;
	
	private Double total;

}
