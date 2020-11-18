import * as React from 'react';
import styles from './Practice.module.scss';
import { IPracticeProps } from './IPracticeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';

export default class Practice extends React.Component<IPracticeProps, {}> {
  public render(): React.ReactElement<IPracticeProps> {
    return (
      <App
        context={this.props.context} // WHY NO CONTEXT?????????????????
      />
    );
  }
}

/*
to try

  react hook forms
    componentRef
      use choicegroup instead of dropdown


  debugger
  error boundaries?
  scss modules better
  convert classes to functional components
    fields


  x   lodash - debounce form inputs
  x   hookrouter
  x   async
  x   try/catch
  x   fetch in children NOT GOOD FOR COMPONENTS THAT SHARE DATA
*/