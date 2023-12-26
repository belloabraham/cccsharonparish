import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  DIALING_CODE_PREFIX,
  PHONE_NUMBER_VALIDATOR_TOKEN,
  PhoneValidatorInterface,
} from '@cccsharonparish.org/common/utils';
import { PhoneNumberValueInterface } from './phone-number-value.interface';
import { PhoneNgValidator } from './phone-ng.validator';

@Component({
  selector: 'mdd-phone-number',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneNumberComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneNumberComponent),
      multi: true,
    },
  ],
})
export class PhoneNumberComponent
  extends PhoneNgValidator
  implements OnChanges, ControlValueAccessor
{
  countryCode?: string;
  formattedPhoneNumber: string | null = null;
  phoneNumber?: string;
  value: PhoneNumberValueInterface | null = null;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = (value: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  constructor(
    @Inject(PHONE_NUMBER_VALIDATOR_TOKEN)
    private phoneNumberValidator: PhoneValidatorInterface
  ) {
    super(phoneNumberValidator);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }
  @Input() placeholder = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  hostElementClasses = this.getHostElementClasses();

  getHostElementClasses(): string {
    return `input-group-${this.size}`;
  }

  onCountryCodeSelect() {
    const thisComponentFormControlWasInitializedWithData = this.value !== null;

    this.updateControlValueWithCountryCode(
      thisComponentFormControlWasInitializedWithData
    );
    this.updateControlValueWithDiallingCode(
      thisComponentFormControlWasInitializedWithData
    );
    this.notifyParentFormThatThisControlValueWasUpdated(this.value!);
  }

  private updateControlValueWithCountryCode(
    thisComponentFormControlWasInitializedWithData: boolean
  ) {
    if (thisComponentFormControlWasInitializedWithData) {
      this.value = {
        ...this.value,
        countryCode: this.countryCode,
      };
    }
    if (!thisComponentFormControlWasInitializedWithData) {
      this.value = {
        countryCode: this.countryCode,
      };
    }
  }

  private updateControlValueWithDiallingCode(
    thisComponentFormControlWasInitializedWithData: boolean
  ) {
    const diallingCode = this.phoneNumberValidator.getDiallingCode(
      this.countryCode!
    );

    const diallingCodeWithPrefix = `${DIALING_CODE_PREFIX}${diallingCode}`;

    if (thisComponentFormControlWasInitializedWithData) {
      this.value = {
        ...this.value,
        diallingCode: diallingCodeWithPrefix,
      };
    }
    if (!thisComponentFormControlWasInitializedWithData) {
      this.value = {
        diallingCode: diallingCodeWithPrefix,
      };
    }
  }

  private updatePhoneNumber() {
    const userHaveTypedAtLeastANumber = this.formattedPhoneNumber !== null;
    if (userHaveTypedAtLeastANumber) {
      const unFormattedNumber = this.getNumbersOnlyFrom(
        this.formattedPhoneNumber!
      );
      this.phoneNumber =
        unFormattedNumber === '' ? undefined : unFormattedNumber;
    }
  }

  indexOfSpacesInPreviouslyFormattedNumber: number[] = [];
  onPhoneNumberChanged(e: KeyboardEvent) {
    const phoneInput = e.target as HTMLInputElement;
    const cursorPositionBeforePhoneInputGetsFormatted =
      phoneInput.selectionStart;
    this.updatePhoneNumber();
    const phoneInputFieldIsNotEmpty = this.phoneNumber !== undefined;
    if (phoneInputFieldIsNotEmpty) {
      this.formattedPhoneNumber =
        this.phoneNumberValidator.getFormattedPhoneNumber(
          this.countryCode!,
          this.phoneNumber!
        );
    }

    if (!phoneInputFieldIsNotEmpty) {
      this.formattedPhoneNumber = '';
    }

    const indexOfSpacesInJustFormattedNumber: number[] = [];
    for (
      let index = 0;
      index <= cursorPositionBeforePhoneInputGetsFormatted! + 1;
      index++
    ) {
      const characterAtIndex = this.formattedPhoneNumber![index];
      const theCharacterAtTheCurrentIndexOfFormattedPhoneNumberIsFormatCharacter =
        characterAtIndex === ' ' ||
        characterAtIndex === '(' ||
        characterAtIndex === ')' ||
        characterAtIndex === '-';
      if (
        theCharacterAtTheCurrentIndexOfFormattedPhoneNumberIsFormatCharacter
      ) {
        indexOfSpacesInJustFormattedNumber.push(index);
      }
    }

    const indexOfSpacesInPreviouslyFormattedNumber = [
      ...this.indexOfSpacesInPreviouslyFormattedNumber,
    ];

    setTimeout(() => {
      const indexOfSpacesBeforeTheCurrentCursorPosition =
        indexOfSpacesInPreviouslyFormattedNumber.filter(
          (item) => item < cursorPositionBeforePhoneInputGetsFormatted!
        );

      const currentCursorPosition =
        cursorPositionBeforePhoneInputGetsFormatted! +
        (indexOfSpacesInJustFormattedNumber.length -
          indexOfSpacesBeforeTheCurrentCursorPosition.length);

      phoneInput.selectionStart = currentCursorPosition;
      phoneInput.selectionEnd = currentCursorPosition;

      this.indexOfSpacesInPreviouslyFormattedNumber =
        indexOfSpacesInJustFormattedNumber;
    });

    this.value = {
      ...this.value,
      phoneNumber: this.formattedPhoneNumber!,
    };

    this.indexOfSpacesInPreviouslyFormattedNumber = [
      ...indexOfSpacesInJustFormattedNumber,
    ];
    this.notifyParentFormThatThisControlValueWasUpdated(this.value);
  }

  private getNumbersOnlyFrom(value: string) {
    return value.replace(/[^0-9]/g, '');
  }

  private notifyParentFormThatThisControlValueWasUpdated(
    value: PhoneNumberValueInterface
  ) {
    if (value.phoneNumber) {
      const e164PhoneNumber = this.phoneNumberValidator.getE164Format(
        value.phoneNumber,
        this.countryCode!
      );
      const valueWithE164 = {
        ...value,
        e164: e164PhoneNumber,
      };
      this.onChange(valueWithE164);
    }

    if (!this.phoneNumber) {
      this.onChange(value);
    }
    this.onTouched();
  }

  writeValue(value: PhoneNumberValueInterface | null): void {
    this.value = value;
    this.countryCode = this.value?.countryCode;
    //If a default phone number was provided to this component's form control
    if (this.value?.countryCode && this.value?.phoneNumber) {
      this.formattedPhoneNumber =
        this.phoneNumberValidator.getFormattedPhoneNumber(
          this.countryCode!,
          this.value.phoneNumber
        );
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled || this.disabled;
  }

  @HostListener('focusout')
  onFocusOut() {
    this.onTouched();
  }
}
