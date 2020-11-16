import * as React from 'react';
import styles from './Practice.module.scss';
import { IPracticeProps } from './IPracticeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';

export default class Practice extends React.Component<IPracticeProps, {}> {
  public render(): React.ReactElement<IPracticeProps> {
    return (
      <App />
    );
  }
}

/*
to try
  routing with hookrouter
  css in js
    emotion?
    without library?
  x   async
  x   try/catch
  x   fetch in children NOT GOOD FOR COMPONENTS THAT SHARE DATA
  lodash
    debounce form inputs
  debugger


to do
  add to githumb
  issues
 */