package com.leapfinance.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author ashoka
 *
 */
@Entity
@Table(name="request_response")
public class RequestResponseMapping implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3470421817634212637L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String requestURL;
	
	
	@Lob
	private String response;
	
	
	
	public RequestResponseMapping(String requestURL, String response, User user) {
		super();
		this.requestURL = requestURL;
		this.response = response;
		this.user = user;
	}

	@ManyToOne
    @JoinColumn(name="user_id")
	private User user;

	public String getRequestURL() {
		return requestURL;
	}

	public void setRequestURL(String requestURL) {
		this.requestURL = requestURL;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
