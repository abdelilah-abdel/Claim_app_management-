package com.example.server.services;

import com.example.server.models.Reclamation;
import com.example.server.repos.ReclamationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImpReclamationService implements IReclamationService{

    @Autowired
    ReclamationRepo reclamationRepo;

    @Override
    public List<Reclamation> getAllReclamations(){
        return (List<Reclamation>) reclamationRepo.findAll();
    }

    public Reclamation getReclamation(Long id){
        return reclamationRepo.findById(id).orElse(null);
    }

    public Boolean addReclamation(Reclamation reclamation){
        try{
            reclamationRepo.save(reclamation);
            return true;
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
    }

    public Boolean updateReclamation(Reclamation reclamation){
        try{
            reclamationRepo.save(reclamation);
            return true;
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
    }

    public Boolean deleteReclamation(Long id){
        try{
            reclamationRepo.deleteById(id);
            return true;
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
