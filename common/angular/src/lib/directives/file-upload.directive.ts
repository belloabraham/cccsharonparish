import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[sddFileUpload][sddFileUpload]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SDDFileUploadDirective),
      multi: true,
    },
  ],
})
export class SDDFileUploadDirective implements ControlValueAccessor {
  multiple = input(false);
  el = inject(ElementRef);

  private onChange: (value: File | File[] | null) => void = () => {};
  private onTouched: () => void = () => {};

  @HostListener('change', ['$event.target.files']) handleFileInput(
    fileList: FileList
  ): void {
    if (this.multiple()) {
      const files = Array.from(fileList);
      this.onChange(files);
    } else {
      const file = fileList.length > 0 ? fileList[0] : null;
      this.onChange(file);
    }
  }

  @HostListener('blur') handleBlur(): void {
    this.onTouched();
  }

  writeValue(value: null): void {
    const inputElement = this.getHostElement();
    if (inputElement) {
      inputElement.value = '';
    }
  }

  registerOnChange(fn: (value: File | File[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const inputElement = this.getHostElement();
    if (inputElement) {
      inputElement.disabled = isDisabled;
    }
  }

  private getHostElement(): HTMLInputElement | null {
    const el = this.el.nativeElement;
    return el instanceof HTMLInputElement ? el : null;
  }
}
