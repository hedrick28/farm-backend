package biz.global.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	
	private Boolean activeDeactive = false;
	
	@OneToMany(mappedBy = "user")
	private List<Address> address;
	
	
}
