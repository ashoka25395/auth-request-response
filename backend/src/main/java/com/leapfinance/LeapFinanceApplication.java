package com.leapfinance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ashoka
 *
 */
@SpringBootApplication
public class LeapFinanceApplication extends SpringBootServletInitializer {

	
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
         return application.sources(LeapFinanceApplication .class);
    }


	
	public static void main(String[] args) {
		SpringApplication.run(LeapFinanceApplication.class, args);
	}

}
