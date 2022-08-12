import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateProjectDto } from 'src/app/dto/project/project.dto';

@Component({
  selector: 'update-project-dialog',
  templateUrl: './update-project-dialog.component.html',
  styleUrls: ['./update-project-dialog.component.css']
})
export class UpdateProjectDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateProjectDto,
  ) { }

  onNoClick()
  {
    this.dialogRef.close();
  }

  updateProject()
  {
    this.dialogRef.close(this.data);
  }

}
