package biz.global.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tips {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long tip_id;
	
	private String title;
	
	private String content;
	
	@ManyToOne
	private Users owner;
	
	@ManyToOne(optional = true)
	private Users respondent;
	
	private Boolean everyone = false;
	
	private Boolean seen = false;
	
	private LocalDate seenDate;
	
	private LocalDate createdDate = LocalDate.now();
	
	private Boolean deleteRespondentSide = false;
	
	private Boolean deleteOwnerSide = false;

}
