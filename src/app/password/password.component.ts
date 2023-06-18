import {Component, ElementRef, OnInit, Query, QueryList, ViewChildren} from "@angular/core";

import XRegExp, {match} from "xregexp";

//TODO: ad no-whitespace validator

enum PasswordStrength{
  NoStrength = 'no-strength',
  TooShort = 'too-short',
  Easy = 'easy',
  Medium = 'medium',
  Strong = 'strong'
}


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  ngOnInit() {
  }

  currentPasswordStrength: PasswordStrength = PasswordStrength.NoStrength;

  passwordStrength(password: string){
    if (!password) {
      return PasswordStrength.NoStrength;
    }

    const digitPattern = /\d/;
    const letterPattern = XRegExp('\\p{Ll}|\\p{L}');
    const symbolPattern = XRegExp('(?![\\d\\p{Ll}\\p{L}\\s]).');

    const strengthPatterns = [digitPattern, letterPattern, symbolPattern]

    let patternsMatched = 0

    if (password.length >= 8){

      for (let pattern of strengthPatterns){
        if (match(password, pattern)){
          patternsMatched++
        }
      }
    }
    else {return PasswordStrength.TooShort}
    if (patternsMatched == 3){return PasswordStrength.Strong}
    else if (patternsMatched == 2){return PasswordStrength.Medium}
    else {return PasswordStrength.Easy}
  }
}

