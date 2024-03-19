export interface Formation {
    _id: string; // Identifiant MongoDB généré automatiquement
    nomformation: string;
    duree: string;
    description: string;
    prix: number;
    image: string;
    niveau: string;
    categorie: string; // Identifiant d'objet Catégorie
  }
  