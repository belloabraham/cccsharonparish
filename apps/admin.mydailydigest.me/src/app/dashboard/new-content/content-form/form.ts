import { FormControl } from "@angular/forms";

export type ContentForm = {
  topic: FormControl<string | null>;
  message: FormControl<string | null>;
  reference: FormControl<string | null>;
  verses: FormControl<string | null>;
  keyVerse: FormControl<string | null>;
  tags: FormControl<string[] | null>;
  date: FormControl<Date | null>;
};
