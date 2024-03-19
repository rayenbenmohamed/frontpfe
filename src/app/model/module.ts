export interface Module {
    _id: string; // Identifiant MongoDB généré automatiquement
    nomModule: string;
    etudiants: string[]; // Tableau d'identifiants d'objets Étudiant
    enseignant: string; // Identifiant d'objet Enseignant
    formations: string; // Identifiant d'objet Formation
    emplois: string; // Identifiant d'objet Emploi
  }
  