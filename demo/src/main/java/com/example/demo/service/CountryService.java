package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Country;
import com.example.demo.repository.CountryRepository;

@Service
public class CountryService {
    @Autowired
    CountryRepository countryRepository;

    public Country save(Country country){
        return countryRepository.save(country);
    }

    public List<Country> findAll(){
        return countryRepository.findAll();
    }
    
    public void delete(int countryId){
        countryRepository.deleteById(countryId);
    }

    public List<Country> saveAll(List<Country> country){
        return countryRepository.saveAll(country);
    }
    

    
}