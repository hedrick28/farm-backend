package biz.global.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Users implements  Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	
	private String firstName;
	
	private String lastName;
	
	private String middleName;
	
	private String role;
	
	private String birthDate;
	
	private String email;
	
	private String userName;;
	
	private String password;
	
	private String gender;
	
	private String mobile;
	
	private String profile;
	
	private Boolean activeDeactive = false;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Address> address = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "owner")
	private List<Products> product = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "owner")
	private List<Tips> tips = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "respondent")
	private List<Tips> tip = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne(mappedBy = "buyer")
	private Cart cartBuyer;
	
	@JsonIgnore
	@OneToOne(mappedBy = "seller",cascade = CascadeType.ALL, orphanRemoval = true)
	private Cart cartSeller;
	
	
	
}
