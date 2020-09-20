package com.leapfinance.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.leapfinance.models.RequestResponseMapping;
import com.leapfinance.models.User;
import com.leapfinance.payload.response.MessageResponse;
import com.leapfinance.repository.RequestReponseMappingRepository;
import com.leapfinance.repository.UserRepository;
import com.leapfinance.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/requestresponse")
public class RequestResponseMappingController {
 
	@Autowired
	private RequestReponseMappingRepository requestResponseMappingRepository;
	
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/url")
	public RequestResponseMapping generateResponseToRequest(@RequestParam String url) throws MalformedURLException, IOException {
		UserDetailsImpl userDetails = (UserDetailsImpl)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Optional<User> user=userRepository.findByUsername(userDetails.getUsername());
		if (user.isPresent()) {
		//process the code
			   HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
			   int responseCode = conn.getResponseCode();
			    InputStream inputStream;
			    if (200 <= responseCode && responseCode <= 299) {
			        inputStream = conn.getInputStream();
			    } else {
			        inputStream = conn.getErrorStream();
			    }

			    BufferedReader in = new BufferedReader(
			            new InputStreamReader(
			                    inputStream));

			    StringBuilder response = new StringBuilder();
			    String currentLine;

			    while ((currentLine = in.readLine()) != null) 
			        response.append(currentLine);
			    in.close();
			   return requestResponseMappingRepository.save(new RequestResponseMapping(url, response.toString(), user.get()));
			   

		}
		else {
			return null;
		}
	}
	
}
