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
  1. routing with hookrouter <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  css in js
    emotion?
    without library?
  lodash
    debounce form inputs
  debugger


  x   async
  x   try/catch
  x   fetch in children NOT GOOD FOR COMPONENTS THAT SHARE DATA
*/