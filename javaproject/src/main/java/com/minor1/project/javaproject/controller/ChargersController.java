package com.minor1.project.javaproject.controller;

import com.minor1.project.javaproject.entity.Chargers;
import com.minor1.project.javaproject.repository.ChargersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chargers")
@CrossOrigin(origins = "http://localhost:3000")
public class ChargersController {
    @Autowired
    private ChargersRepository chargersRepository;

    @GetMapping("/getallchargers")
    public List<Chargers> getAllChargers(){
        return chargersRepository.findAll();
    }

    @PostMapping("/add")
    public Chargers createCharger(@RequestBody Chargers chargers){
        return chargersRepository.save(chargers);
    }

    @GetMapping("/getcharger/{id}")
    public ResponseEntity<Chargers> getchargerbyid(@PathVariable long id){
        Chargers chargers=chargersRepository.findById(id).orElse(null);
        return ResponseEntity.ok(chargers);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Chargers> updateCharger(@PathVariable long id,@RequestBody Chargers chargerDetails){
        Chargers updatecharger=chargersRepository.findById(id).orElse(null);

        updatecharger.setLongitude(chargerDetails.getLongitude());
        updatecharger.setLatitude(chargerDetails.getLatitude());
        updatecharger.setRate(chargerDetails.getRate());
        updatecharger.setCompatibility(chargerDetails.getCompatibility());
        updatecharger.setWattage(chargerDetails.getWattage());

        chargersRepository.save(updatecharger);
        return ResponseEntity.ok(updatecharger);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteCharger(@PathVariable long id){
        Chargers chargers=chargersRepository.findById(id).orElse(null);

        chargersRepository.delete(chargers);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
