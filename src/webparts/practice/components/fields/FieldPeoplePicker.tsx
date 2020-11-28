import * as React from 'react';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Controller, useFormContext } from "react-hook-form";

const mcc = 'color:magenta;';


// const _getPeoplePickerItems = (items: any[]) => {
//     console.log('Items:', items);
    // this.props.handler(this.props.field.InternalName, items[0]); // assumes only one user can be picked
// }


const FieldPeoplePicker = ({
    field,
    value,
    context
}) => {

    const methods = useFormContext();
    const { control } = methods;

    const val = value
        ? value.EMail || value.Title || value
        : null;

    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={val}
            render={({ onChange, /* onBlur,  */value, name/* , ref */ }) => (
                <PeoplePicker
                    context={context.context}
                    personSelectionLimit={1}
                    groupName={''} // Leave this blank in case you want to filter from all users
                    showtooltip={true}
                    // required={true}
                    // disabled={disabled}
                    // onChange={_getPeoplePickerItems.bind(this)}
                    onChange={onChange}
                    defaultSelectedUsers={[value]}
                    showHiddenInUI={false}
                    principalTypes={[PrincipalType.User, PrincipalType.DistributionList, PrincipalType.SecurityGroup, PrincipalType.SharePointGroup]}
                    resolveDelay={500}
                    ensureUser={true}
                    placeholder='Please select a person'
                    peoplePickerWPclassName='styledPeoplePicker'
                    peoplePickerCntrlclassName='styledPeoplePickerControls'
                />
            )}
        />
    );
};

export default FieldPeoplePicker;