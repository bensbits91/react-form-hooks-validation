// import * as React from 'react';
// import { IBasePickerSuggestionsProps, NormalPeoplePicker, ValidationState } from 'office-ui-fabric-react/lib/Pickers';
// import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
// import { people, mru } from '@uifabric/example-data';


// const suggestionProps: IBasePickerSuggestionsProps = {
//     suggestionsHeaderText: 'Suggested People',
//     mostRecentlyUsedHeaderText: 'Suggested Contacts',
//     noResultsFoundText: 'No results found',
//     loadingText: 'Loading',
//     showRemoveButtons: true,
//     suggestionsAvailableAlertText: 'People Picker Suggestions available',
//     suggestionsContainerAriaLabel: 'Suggested contacts',
//   };
  
//   const onFilterChanged = (
//     filterText: string,
//     currentPersonas: IPersonaProps[],
//     limitResults?: number,
//   ): IPersonaProps[] | Promise<IPersonaProps[]> => {
//     if (filterText) {
//       let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);

//       filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
//       filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
//       return filterPromise(filteredPersonas);
//     } else {
//       return [];
//     }
//   };


//   const filterPersonasByText = (filterText: string): IPersonaProps[] => {
//     return peopleList.filter(item => doesTextStartWith(item.text as string, filterText));
//   };

//   const filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
//     // if (delayResults) {
//     //   return convertResultsToPromise(personasToReturn);
//     // } else {
//       return personasToReturn;
//     // }
//   };

//   const returnMostRecentlyUsed = (currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
//     return filterPromise(removeDuplicates(mostRecentlyUsed, currentPersonas));
//   };

//   const onRemoveSuggestion = (item: IPersonaProps): void => {
//     const indexPeopleList: number = peopleList.indexOf(item);
//     const indexMostRecentlyUsed: number = mostRecentlyUsed.indexOf(item);

//     if (indexPeopleList >= 0) {
//       const newPeople: IPersonaProps[] = peopleList
//         .slice(0, indexPeopleList)
//         .concat(peopleList.slice(indexPeopleList + 1));
//       setPeopleList(newPeople);
//     }

//     if (indexMostRecentlyUsed >= 0) {
//       const newSuggestedPeople: IPersonaProps[] = mostRecentlyUsed
//         .slice(0, indexMostRecentlyUsed)
//         .concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
//       setMostRecentlyUsed(newSuggestedPeople);
//     }
//   };

// //   const onDisabledButtonClick = (): void => {
// //     setIsPickerDisabled(!isPickerDisabled);
// //   };

// //   const onToggleDelayResultsChange = (): void => {
// //     setDelayResults(!delayResults);
// //   };



// export interface FieldPeoplePickerProps {
    
// }
 
// export interface FieldPeoplePickerState {
    
// }
 
// class FieldPeoplePicker extends React.Component<FieldPeoplePickerProps, FieldPeoplePickerState> {
//     constructor(props: FieldPeoplePickerProps) {
//         super(props);
//         this.state = {};
//     }
//     render() { 
//         return (
//             <NormalPeoplePicker
//             onResolveSuggestions={onFilterChanged}
//             />
//         );
//     }
// }
 
// export default FieldPeoplePicker;





// function doesTextStartWith(text: string, filterText: string): boolean {
//     return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
//   }
  
//   function removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
//     return personas.filter(persona => !listContainsPersona(persona, possibleDupes));
//   }
  
//   function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
//     if (!personas || !personas.length || personas.length === 0) {
//       return false;
//     }
//     return personas.filter(item => item.text === persona.text).length > 0;
//   }
  
//   function convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
//     return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
//   }
  
//   function getTextFromItem(persona: IPersonaProps): string {
//     return persona.text as string;
//   }
  
//   function validateInput(input: string): ValidationState {
//     if (input.indexOf('@') !== -1) {
//       return ValidationState.valid;
//     } else if (input.length > 1) {
//       return ValidationState.warning;
//     } else {
//       return ValidationState.invalid;
//     }
//   }
  
//   /**
//    * Takes in the picker input and modifies it in whichever way
//    * the caller wants, i.e. parsing entries copied from Outlook (sample
//    * input: "Aaron Reid <aaron>").
//    *
//    * @param input The text entered into the picker.
//    */
//   function onInputChange(input: string): string {
//     const outlookRegEx = /<.*>/g;
//     const emailAddress = outlookRegEx.exec(input);
  
//     if (emailAddress && emailAddress[0]) {
//       return emailAddress[0].substring(1, emailAddress[0].length - 1);
//     }
  
//     return input;
//   }
  