import * as React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';
// import { TextField } from 'office-ui-fabric-react/lib/TextField';


const mcc = 'background:lime;color:black';

const FieldMasked = ({
    field,
    fieldOverrides,
    value,
    // mode,
}) => {
    console.log('%c field', mcc, field);
    console.log('%c value', mcc, value);

    const methods = useFormContext();
    const { control } = methods;

    // const inp = createNumberMask({
    //     prefix: '$'
    // });

    const fieldType = fieldOverrides.TypeAsString || field.TypeAsString;
    console.log('%c fieldType', mcc, fieldType);

    // const currencyMask = createNumberMask({
    //     prefix: '$ ',
    //     suffix: '',
    //     includeThousandsSeparator: true,
    //     thousandsSeparatorSymbol: ',',
    //     allowDecimal: true,
    //     decimalSymbol: '.',
    //     decimalLimit: 2, // how many digits allowed after the decimal
    //     integerLimit: 7, // limit length of integer numbers
    //     requireDecimal: true,
    //     allowNegative: false,
    //     allowLeadingZeroes: false,
    // });

    // const emailMaskAsdf = emailMask();

    // const mask = () => {
    //     switch (fieldType) {
    //         case 'Phone':
    //             return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    //         case 'Email':
    //             return emailMaskAsdf();
    //         case 'Currency':
    //             return currencyMask();
    //         default:
    //             return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    //     }
    // }
    // console.log('%c mask', mcc, mask);

    const el = <Controller
        name={field.InternalName}
        control={control}
        defaultValue={value}
        // rules={{
        //     required: true,
        //     // minLength: {
        //     //     value: 10,
        //     //     message: 'minLength error message' // <p>error message</p>
        //     // }
        // }}
        render={({ onChange, /* onBlur,  */value, name, ref }) => (
            <MaskedInput
                ref={ref}
                id={name}
                mask={emailMask}
                // mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="form-control"
                placeholder="ASDF a phone number ASDF"
                // guide={false}
                // id={field.InternalName}
                defaultValue={value}
                onChange={onChange}
            />
        )}
    />

    // const inp = <MaskedInput
    //     mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    //     className="form-control"
    //     placeholder="ASDF a phone number ASDF"
    //     // guide={false}
    //     id={field.InternalName}
    //     defaultValue={fieldValue}
    // // onBlur={() => { }}
    // // onChange={() => { }}
    // // render={(ref, props/* , fieldValue */) => (
    // //     <TextField
    // //         // id={name}
    // //         componentRef={ref}
    // //         // value={fieldValue}
    // //         // defaultValue={fieldValue}
    // //         {...props}
    // //     // placeholder={placeholder}
    // //     // defaultValue={'1'}
    // //     // readOnly={readOnly}
    // //     // required={field.Required}
    // //     // multiline={field.TypeAsString == 'Note'}
    // //     // rows={field.TypeAsString == 'Note' ? 10 : null}
    // //     // cols={field.TypeAsString == 'Note' ? 50 : null}
    // //     // onChange={onChange}
    // //     // onRenderLabel={this._onRenderLabel}
    // //     // onChange={(e, t) => this._onChange(field, t)}
    // //     //     styles={/* readOnly ? {
    // //     //     subComponentStyles: {
    // //     //         label: {
    // //     //             root: {
    // //     //                 display: 'inline-block',
    // //     //                 verticalAlign: 'top'
    // //     //             }
    // //     //         }
    // //     //     },
    // //     //     fieldGroup: {
    // //     //         border: 'none',
    // //     //         display: 'inline-block',
    // //     //         verticalAlign: 'top'
    // //     //     },
    // //     // } :  */{
    // //     //             subComponentStyles: {
    // //     //                 label: {
    // //     //                     root: {
    // //     //                         display: 'inline-block',
    // //     //                         verticalAlign: 'middle'
    // //     //                     }
    // //     //                 }
    // //     //             },
    // //     //             fieldGroup: {
    // //     //                 display: 'inline-block',
    // //     //                 verticalAlign: 'middle'
    // //     //             }
    // //     //         }}
    // //     />
    // // )}
    // />;

    return (el);

};

export default FieldMasked;