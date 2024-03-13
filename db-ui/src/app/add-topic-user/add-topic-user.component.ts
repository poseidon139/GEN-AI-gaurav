import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-topic-user',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-topic-user.component.html',
  styleUrl: './add-topic-user.component.scss'
})
export class AddTopicUserComponent {
  header: string = '';
  constructor(private dialogRef: MatDialogRef<AddTopicUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.header = data.ref;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    this.dialogRef.close();
  }
}
