import { Injectable } from '@angular/core';
import XRegExp, {match} from "xregexp";
import {PasswordStrength} from "../infrastructure/enums/password-strength.enum";
@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
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

  constructor() { }
}
