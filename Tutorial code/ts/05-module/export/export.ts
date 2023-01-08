
import { StringValidator } from "./StringValidator";

// Export variable
export const numberRegexp = /^[0-9]+$/;

// Export class
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// Export multi
export * from "./StringValidator"; 
export * from "./ZipCodeValidator"; 
export * from "./ParseIntBasedZipCodeValidator";
