import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MDDRoundedBadgeComponent } from './rounded-badge.component';
import { NgMaterialButtonModule } from '@cccsharonparish.org/angular';
import { MDDBadgedModule } from '../../mdd-badged.module';

const meta: Meta<MDDRoundedBadgeComponent> = {
  component: MDDRoundedBadgeComponent,
  title: 'Components/Badge',
  decorators: [
    moduleMetadata({
      imports: [NgMaterialButtonModule, MDDBadgedModule],
    }),
  ],
  argTypes: {
    background: {
      options: [
        'light',
        'danger',
        'warning',
        'danger',
        'info',
        'link',
        'dark',
        'secondary',
        'primary',
      ],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<MDDRoundedBadgeComponent>;

export const Pill: Story = {
  parameters: {
    storySource: {
      source: `
          <button ng-mat-button >Button <span mdd-badge [posTopRight]="true" [background]="'primary'">1</span></button>
        //Require the import of MDDBadgedModule from @mydailydigest/ui
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `
    <button class="me-5" ng-mat-button >Button <span mdd-badge [posTopRight]="posTopRight" [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    <button class="me-5" ng-mat-raised-button >Button <span mdd-badge [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    <button class="me-5" ng-mat-raised-button color="secondary" >Button <span mdd-badge [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    <button class="me-5" ng-mat-stroked-button>Button <span mdd-badge [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    `,
  }),
  args: {
    background: 'success',
    label: 1,
    posTopRight: true,
  },
};

export const RoundedPill: Story = {
  parameters: {
    storySource: {
      source: `
       <button ng-mat-raised-button color="secondary" >Button <span mdd-badge mdd-badge-rounded [background]="'primary'"></span></button>
        //Require the import of MDDBadgedModule from @mydailydigest/ui
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `
    <button class="me-5" ng-mat-button >Button <span mdd-badge  mdd-badge-rounded [background]="background"></span></button>
    <button class="me-5" ng-mat-raised-button >Button <span mdd-badge mdd-badge-rounded  [background]="background"></span></button>
    <button class="me-5" ng-mat-raised-button color="secondary" >Button <span mdd-badge mdd-badge-rounded [background]="background"></span></button>
    <button class="me-5" ng-mat-stroked-button  >Button <span mdd-badge mdd-badge-rounded [background]="background"></span></button>
    `,
  }),
  args: {
    background: 'success',
  },
};
