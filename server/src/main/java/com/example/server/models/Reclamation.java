package com.example.server.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "reclamation_Table")
public class Reclamation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "email")
    private String email;

    @Column(name = "GSM1")
    private String GSM1;

    @Column(name = "GSM2")
    private String GSM2;

    @Column(name = "CIN")
    private String CIN;

    @Column(name = "state")
    private int state;

    @Column(name = "typology")
    private String typology;

    @Column(name = "reference")
    private String reference;

    @Column(name = "num_compte")
    private String num_compte;

    @Column(name = "object")
    private String object;

}
