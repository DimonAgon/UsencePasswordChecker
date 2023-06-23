import {Component, OnInit} from "@angular/core";

import {FormControl} from "@angular/forms";

import {PasswordStrengthService} from "../services/password-strength.service";

import {PasswordStrength} from "../infrastructure/enums/password-strength.enum";

//TODO: ad no-whitespace validator

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
  providers: [PasswordStrengthService]
})
export class PasswordFormComponent implements OnInit{

  passwordControl = new FormControl();

  currentPasswordStrength: PasswordStrength = PasswordStrength.NoStrength;

  ngOnInit(): void {
    this.passwordControl.valueChanges.subscribe(change => {
      this.currentPasswordStrength = this.passwordStrengthService.passwordStrength(this.passwordControl.value)
    });
  }

  constructor(private passwordStrengthService: PasswordStrengthService) {}
}

