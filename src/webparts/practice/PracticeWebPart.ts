import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PracticeWebPartStrings';
import Practice from './components/Practice';
import { IPracticeProps } from './components/IPracticeProps';

import { sp } from "@pnp/sp/presets/all";


// import { WebPartContext } from '@microsoft/sp-webpart-base';




export interface IPracticeWebPartProps {
  description: string;
}

export default class PracticeWebPart extends BaseClientSideWebPart<IPracticeWebPartProps> {
  public onInit(): Promise<void> {
    console.log('PracticeWebPart -> this.context', this.context); // CAN'T GET THIS.CONTEXT?????????????????????????????????????????????????????????????????
    return super.onInit().then(_ => {
      console.log('PracticeWebPart -> this.context', this.context); // CAN'T GET THIS.CONTEXT?????????????????????????????????????????????????????????????????
      sp.setup({
        spfxContext: this.context // WHY DOES THIS WORK???????????????????????????????????????????/
      });
    });
  }

  public render(): void {
    console.log('PracticeWebPart -> this.context', this.context);
    const element: React.ReactElement<IPracticeProps> = React.createElement(
      Practice,
      {
        description: this.properties.description,
        context: this.context // WHY DOES THIS WORK???????????????????????????????????????????/
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
