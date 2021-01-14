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

    const methods = useFormContext(),

        { control } = methods;

    return (
        <Controller
            name={field.InternalName}
            control={control}
            defaultValue={value.EMail || value.SipAddress || value.UserName}
            render={({ onChange, /* onBlur,  */value/* , name, ref */ }) => (
                <PeoplePicker
                    // key={name}
                    // ref={ref}
                    context={context.context}
                    defaultSelectedUsers={[value]}
                    personSelectionLimit={1}
                    groupName={''} // Leave this blank in case you want to filter from all users
                    showtooltip={true}
                    // required={true}
                    // disabled={disabled}
                    // ensureUser={true}
                    onChange={(items: any[]) => {
                        const newUserEmail = items && items[0]
                            ? items[0].id.split('i:0#.f|membership|')[1]
                            : null;
                        // _getPeoplePickerItems.bind(this)
                        onChange(newUserEmail);
                    }}
                    showHiddenInUI={true}
                    principalTypes={[PrincipalType.User, PrincipalType.DistributionList, PrincipalType.SecurityGroup, PrincipalType.SharePointGroup]}
                    resolveDelay={500}
                    placeholder='Please select a person'
                    peoplePickerWPclassName='styledPeoplePicker'
                    peoplePickerCntrlclassName='styledPeoplePickerControls'
                />
            )}
        />
    );
};

export default FieldPeoplePicker;