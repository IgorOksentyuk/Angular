import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  reactiveForm: FormGroup;
  errors: string[];

  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(null),
    });
  }

  close() {
    this.dialogRef.close(false);
  }

  ok() {
    const values = this.reactiveForm.getRawValue();

    this.usersService.create(values).subscribe(() => {
      this.usersService.newCreateEvent(values);
      this.dialogRef.close();
      location.reload();
    }),
      (badResponse: any) => {
        this.errors = badResponse.error.message;
        this.errors = Array.isArray(this.errors) ? this.errors : [this.errors];
      };
  }
}
