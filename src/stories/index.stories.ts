import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, text, select, radios, withKnobs } from '@storybook/addon-knobs';


import { Welcome, Button } from '@storybook/angular/demo';
import { ZoomButtonComponent } from '@zoomui/button';
import { ZoomCard } from '@zoomui/card';
import {ZoomLoadingComponent} from '@zoomui/loading';
import {ZoomNotificationComponent} from '@zoomui/notification';
import { RaetButtonComponent } from '../app/raet-button/raet-button.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module);

const buttonStories = storiesOf('Button', module);
const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  link: 'link'
};
buttonStories.addDecorator(withKnobs);
buttonStories.add(
    'Button',
    () => ({
      component: ZoomButtonComponent,
      props: {
        mode: radios('mode', buttonTypes, 'primary', 'Button types'),
        size: radios('size', {normal: '', medium: 'medium', small: 'small' }, '', 'Size')
      }
    }),
    { notes: 'This is the button documentation...' }
  )
;

// NOTIFICATION COMPONENT

const notificationStories = storiesOf('Notification', module);
const notificationTypes = {
  success: 'success',
  alert: 'alert',
  warning: 'warning',
  black: 'black'
};
notificationStories.addDecorator(withKnobs);

notificationStories.add(
  'Warning notification',
  () => ({
    component: ZoomNotificationComponent,
    props: {
      mode: radios('mode', notificationTypes, 'success', '01'),
    }
  }),
  { notes: 'My notes on a button with emojis' }
);
