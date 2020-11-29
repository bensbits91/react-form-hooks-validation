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


react-input-enhancements


debugger
scss modules better
convert classes to functional components


  x   error boundaries
  x   react hook forms
  x   lodash - debounce form inputs
  x   hookrouter
  x   async
  x   try/catch
  x   fetch in children NOT GOOD FOR COMPONENTS THAT SHARE DATA
*/