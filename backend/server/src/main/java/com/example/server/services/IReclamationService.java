package com.example.server.services;

import com.example.server.models.Reclamation;

import java.util.List;

public interface IReclamationService {

    List<Reclamation> getAllReclamations();
    Reclamation getReclamation (Long id);
    Boolean addReclamation(Reclamation reclamation);
    Boolean updateReclamation(Reclamation reclamation);
    Boolean deleteReclamation(Long id);
}
