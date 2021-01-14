import * as React from 'react';
import { IPracticeProps } from './IPracticeProps';
import App from './App';

export default class Practice extends React.Component<IPracticeProps, {}> {
  public render(): React.ReactElement<IPracticeProps> {
    return (
      <App context={this.props.context} />
    );
  }
}