package biz.global.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NotifResponseModel {
	private int status;
	
	private String message;
	
	private List<Tips> tips;
	
	private int tipSize;
	
	private Tips tip;
	
	public NotifResponseModel(int status, String message, int tipSize, List<Tips> tips) {
		this.tips = tips;
		this.message = message;
		this.status = status;
		this.tipSize = tipSize;
	}
	
	public NotifResponseModel(int status, String message) {
		this.status = status;
		this.message = message;
	}
	
	
	public NotifResponseModel(int status, String message, Tips tip) {
		this.status = status;
		this.message = message;
		this.tip = tip;
	}
	
	
}
