import {Component, Input, SimpleChanges} from '@angular/core';
import {CurrentPasswordStrengthService} from "../services/current-password-strength.service";

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent {
  constructor(public currentPasswordStrengthService: CurrentPasswordStrengthService) {
  }
}
