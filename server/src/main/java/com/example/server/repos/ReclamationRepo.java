package com.example.server.repos;

import com.example.server.models.Reclamation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReclamationRepo extends CrudRepository<Reclamation, Long> {
}
