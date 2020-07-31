import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {User} from '../../models/user';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  name = new FormControl('', [Validators.required]);
  user: User;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  getErrorMessage(): string {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  save(): void {
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(this.user);
    });
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }
}
