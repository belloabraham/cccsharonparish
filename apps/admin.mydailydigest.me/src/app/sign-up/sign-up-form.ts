import { FormControl } from '@angular/forms';

export type SignUpForm = {
  lastName: FormControl<string | null>;
  firstName: FormControl<string | null>;
  phone: FormControl<string | null>;
};
