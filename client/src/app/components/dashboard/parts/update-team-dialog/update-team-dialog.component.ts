import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateTeamDto } from 'src/app/dto/team/team.dto';

@Component({
  selector: 'update-team-dialog',
  templateUrl: './update-team-dialog.component.html',
  styleUrls: ['./update-team-dialog.component.css']
})
export class UpdateTeamDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateTeamDto,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateTeam() {
    this.dialogRef.close(this.data);
  }

}
