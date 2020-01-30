import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../index';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const defaultRender = () => {
  const _text = text('Text', 'Click me!');
  const _size = select('Size', {
    Small: 'small',
    Large: 'large',
  }, 'small');
  const _disabled = boolean('Disabled', false);
  const _onClick = action('button-click');
  return <Button text={_text} size={_size} disabled={_disabled} onClick={_onClick} />
};
