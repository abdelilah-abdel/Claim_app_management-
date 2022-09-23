package com.example.server.controllers;

import com.example.server.models.Reclamation;
import com.example.server.services.ImpReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/")


public class ReclamationController {

    @Autowired
    ImpReclamationService reclamationService;

    @GetMapping("/")
    public List<Reclamation> getAllReclamations(){
        return reclamationService.getAllReclamations();
    }

    @GetMapping("/{id}")
    public Reclamation getReclamation (@PathVariable("id") Long id){
        return reclamationService.getReclamation(id);
    }

    @PostMapping
    public Boolean addReclamation(@RequestBody Reclamation reclamation){
        return reclamationService.addReclamation(reclamation);
    }

    @PutMapping
    public Boolean updateReclamation(@RequestBody Reclamation reclamation){
        return reclamationService.updateReclamation(reclamation);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteReclamation(@PathVariable("id") Long id){
        return reclamationService.deleteReclamation(id);
    }


}
