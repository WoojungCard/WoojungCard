package com.woojungcard.woojungcard.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
	
    @Bean
    public EncryptConfig encrypt() {
	        return new EncryptConfig();
    }
}