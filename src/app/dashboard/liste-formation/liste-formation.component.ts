import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { FormationService } from 'src/app/services/formation.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {
  formations: Formation[] = []; 
  displayedColumns: string[] = ['image','nomformation', 'duree', 'prix', 'niveau', 'categorie', 'actions'];

  constructor(private formationService: FormationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchFormations(); 
  }

  fetchFormations(): void {
    this.formationService.getAllFormations().subscribe(
      formations => {
        this.formations = formations; 
      },
      error => {
        console.error('Error fetching formations:', error);
      }
    );
  }

  openAddFormationDialog(): void {
    const dialogRef = this.dialog.open(AddFormationComponent, {
      width: '500px',
      data: {} // You can pass data to the modal if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If the dialog result is not empty, refresh the list of formations
        this.fetchFormations();
      }
    });
  }

  

  deleteFormation(id: string): void {
    if (confirm('Are you sure you want to delete this formation?')) {
        this.formationService.deleteFormation(id).subscribe(
            () => {
                console.log('Formation deleted successfully');
                this.fetchFormations(); // Refresh the list of formations
            },
            error => {
                console.error('Error deleting formation:', error);
                // Handle error accordingly
            }
        );
    }
}

openUpdateFormationModal(formation: Formation): void {
  // Check if formation._id is defined
  if (formation._id) {
    // Fetch the complete categorie object before opening the modal
    this.formationService.getFormationById(formation._id).subscribe((completeFormation) => {
      // Pass the fetched completeFormation object to the modal
      const dialogRef = this.dialog.open(UpdateFormationComponent, {
        data: { formation: completeFormation },
        width: '600px',
        // Add any other modal options here
      });

      dialogRef.componentInstance.formationUpdated.subscribe(() => {
        console.log('Formation updated, refreshing list...');
        this.fetchFormations();
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
        // Handle any actions after the modal is closed
      });
    });
  } else {
    console.error('Formation ID is undefined');
  }
}




  
}
