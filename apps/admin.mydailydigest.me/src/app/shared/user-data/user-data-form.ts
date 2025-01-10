import { FormControl } from '@angular/forms';

export type UserDataForm = {
  lastName: FormControl<string | null>;
  firstName: FormControl<string | null>;
  phone: FormControl<string | null>;
};
