import { FormControl, ValidationErrors } from '@angular/forms';

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
