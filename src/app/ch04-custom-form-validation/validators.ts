import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordValidator(
  control: FormControl
): ValidationErrors | null {
  if (
    !containsNumber(control.value) ||
    !containsUpperCaseLetter(control.value)
  ) {
    return { invalidPassword: true };
  }

  return null;
}

/**
 * Angular expects a function that it can pass a form AbstractControl as the parameter and get back
    any potential validation errors. Since we have the entire FormGroup and not just a single FormControl
    we can compare any two values or conditions. In this example, we use a factory function pattern
    that returns another internal function. This pattern is necessary
 */
export function matchingInputsValidator(
  firstKey: string,
  secondKey: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.get(firstKey)?.value !== control.get(secondKey)?.value) {
      return { mismatch: true };
    }

    return null;
  };
}

//#region Utility Functions (consider moving to a utils file)
export function containsUpperCaseLetter(value: string): boolean {
  return (
    [...value].find((x) => x === x.toUpperCase() && !isNumber(x)) !== undefined
  );
}

export function containsNumber(value: string): boolean {
  return [...value].find((x) => isNumber(x)) !== undefined;
}

export function isNumber(value: string): boolean {
  return !isNaN(+value);
}
//#endregion
