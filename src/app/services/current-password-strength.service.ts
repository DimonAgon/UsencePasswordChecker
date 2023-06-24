import {Injectable} from '@angular/core';
import {PasswordStrength} from "../infrastructure/enums/password-strength.enum";
import {PasswordStrengthService} from "./password-strength.service";
import {CurrentPasswordService} from "./current-password.service";

@Injectable({
  providedIn: 'root'
})
export class CurrentPasswordStrengthService {

  currentPasswordStrength() {
    return this.passwordStrengthService.passwordStrength(this.currentPasswordService.getPassword())
  }
  constructor(private passwordStrengthService: PasswordStrengthService, private currentPasswordService: CurrentPasswordService) { }
}
