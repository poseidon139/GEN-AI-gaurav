import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddTopicUserComponent } from '../add-topic-user/add-topic-user.component';
@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})

export class UserViewComponent {
  constructor(private dialog: MatDialog) { }

  addTopicUser(ref: any) {
    const dialogRef = this.dialog.open(AddTopicUserComponent, {
      width: '50rem',
      height: '20rem',
      disableClose: true,
      autoFocus: true,
      position: { left: '20rem', right: '10rem', top: '5rem', bottom: '10rem' },
      data: {
        ref: ref
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }
}
