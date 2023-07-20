package com.woojungcard.woojungcard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class WoojungcardApplication {

		public static void main(String[] args) {
		SpringApplication.run(WoojungcardApplication.class, args);
	}
		
		// Front와 연동하는 
		@Bean
		public WebMvcConfigurer corsConfigure(){
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**") // localhost:3030 뒤에 붙는 값을 상관없이 받겠다.
							.allowedHeaders("*")
							.allowedMethods("*")
							.allowedOrigins("http://localhost:3000");
				}
			};
		}

}
 