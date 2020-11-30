import * as React from 'react';
import styles from './Practice.module.scss';
import { IPracticeProps } from './IPracticeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';

export default class Practice extends React.Component<IPracticeProps, {}> {
  public render(): React.ReactElement<IPracticeProps> {
    return (
      <App context={this.props.context} />
    );
  }
}

/*
to try

  react-hook-form
    conditional
      rules
      visibility

  react-text-mask
    https://www.npmjs.com/package/react-text-mask
    https://github.com/text-mask/text-mask
    https://codesandbox.io/s/react-currency-input-with-react-text-mask-4es23?file=/src/CurrencyInput.js
    https://codesandbox.io/examples/package/react-text-mask




  scss modules better
  debugger


  x   convert classes to functional components
  x   error boundaries
  x   react hook forms
  x   lodash - debounce form inputs
  x   hookrouter
  x   async
  x   try/catch
  x   fetch in children NOT GOOD FOR COMPONENTS THAT SHARE DATA
*/