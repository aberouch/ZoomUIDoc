import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { ZoomButtonComponent } from '@zoomui/button';
import { RaetButtonComponent } from '../app/raet-button/raet-button.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)

.add(
    'Primary button',
    () => ({
      component: ZoomButtonComponent,
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'Secondary',
    () => ({
      component: ZoomButtonComponent,
      props: {
        raetId: 'button02',
        type: 'button',
        mode: 'secondary',
        onClick: action('raet button was clicked!'),
      },
    }),
    { notes: 'Label is missing' }
  )
  .add(
    'Disabled',
    () => ({
      component: ZoomButtonComponent,
      props: {
        raetId: 'button02',
        type: 'button',
        mode: 'primary',
        isDisabled: 'true',
     },
    }),
    { notes: 'Label is missing' }
  )
  ;



storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
