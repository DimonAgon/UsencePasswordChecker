import {Component, OnInit} from "@angular/core";

import {FormControl} from "@angular/forms";

import {PasswordStrengthService} from "../services/password-strength.service";
import {CurrentPasswordService} from "../services/current-password.service";

//TODO: ad no-whitespace validator

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
  providers: [PasswordStrengthService]
})
export class PasswordFormComponent implements OnInit{

  passwordControl = new FormControl();
  constructor(private currentPasswordService: CurrentPasswordService) {}

  ngOnInit(): void {
    this.passwordControl.valueChanges.subscribe(change => {
      this.currentPasswordService.setPassword(this.passwordControl.value)
    });
  }
}

