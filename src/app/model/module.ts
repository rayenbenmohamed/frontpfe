import { Emploi } from "./emploi";
import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";
import { Formation } from "./formation";

export interface Module {
    _id: string; // Identifiant MongoDB généré automatiquement
    nomModule: string;
    etudiants: Etudiant; // Tableau d'identifiants d'objets Étudiant
    enseignant: Enseignant; // Identifiant d'objet Enseignant
    formations: Formation; // Identifiant d'objet Formation
    emplois: Emploi; // Identifiant d'objet Emploi
  }
  