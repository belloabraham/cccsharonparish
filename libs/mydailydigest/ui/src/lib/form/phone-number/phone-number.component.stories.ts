import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { PhoneNumberComponent } from './phone-number.component';
import {
  PHONE_NUMBER_VALIDATOR_TOKEN,
  PhoneNumberValidator,
} from '@cccsharonparish.org/common/utils';
import { CountriesDiallingCode } from '../../mock';

const meta: Meta<PhoneNumberComponent> = {
  component: PhoneNumberComponent,
  title: 'Form/Input',
  decorators: [
    moduleMetadata({
      imports: [PhoneNumberComponent],
      providers: [
        {
          provide: PHONE_NUMBER_VALIDATOR_TOKEN,
          useClass: PhoneNumberValidator,
        },
      ],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
      diallingCodes: CountriesDiallingCode,
    },
    template: `
      <div class="my-4" style="width: 30rem;">
      <mdd-phone-number
       [disabled]="disabled"
       [size]="size" [placeholder]="placeholder">
       <option *ngFor="let i of diallingCodes" [value]="i.alpha2Code">{{i.diallingCode}} ({{i.name}})</option>
      </mdd-phone-number>
    </div>
            `,
  }),
  argTypes: {
    size: {
      options: ['sm', 'lg', 'md'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<PhoneNumberComponent>;

export const Phone: Story = {
  parameters: {
    storySource: {
      source: `
        <mdd-phone-number
        [disabled]="false"
        [placeholder]="12345678">
        <option *ngFor="let i of diallingCodes" [value]="i.alpha2Code">{{i.diallingCode}} ({{i.name}})</option>
      </mdd-phone-number>

      //Require the import of PhoneNumberComponent from from libs/mydailydigest-ui
      `,
    },
  },
  args: {
    disabled: false,
    size: 'md',
    placeholder: '12345678',
  },
};
