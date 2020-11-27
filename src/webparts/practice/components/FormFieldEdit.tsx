import * as React from 'react';
import FieldDatePicker from './fields/FieldDatePicker';
import FieldDropdown from './fields/FieldDropdown';
import FieldPeoplePicker from './fields/FieldPeoplePicker';
import FieldText from './fields/FieldText';
import { debounce } from '@microsoft/sp-lodash-subset';

const mcc = 'background:magenta;color:yellow;';

const FormFieldEdit = ({
    val,
    field,
    context
}) => {

    // const handlerTextField = debounce((f, v) => {
    //     handlerMain(f, v);
    // }, 500);


    switch (field.TypeAsString) {
        // case 'Choice':
        // const options = field.options;
        // let optionsToHide = [];
        // for (const option in options) {
        //     if (options[option].visibility == 'hidden') {
        //         optionsToHide.push(option);
        //     }
        // }
        // if (fieldDefinition.isRadioButtons) {
        //     return (
        //         <div /* className={styles.fieldWrap} */>
        //                 <FieldRadioButtons
        //                     field={fieldDefinition}
        //                     optionsToHide={optionsToHide}
        //                     value={val}
        //                     labelOverride={labelOverride}
        //                     handler={handler}
        //                     disabled={fieldDefinition.InternalName == 'Rehireable'}
        //                     required={isFieldRequired || fieldDefinition.Required}
        //                 />
        //                 /* {helpText} */
        //         </div>
        //     );
        // }
        // return (
        //     <div /* className={styles.fieldWrap} */>
        //             <FieldDropdown
        //                 field={field}
        //                 // optionsToHide={options}
        //                 value={val}
        //                 // labelOverride={labelOverride}
        //                 // fieldMinWidth='200px'
        //                 handler={handlerMain}
        //                 // disabled={fieldDefinition.InternalName == 'ReviewStatus'}
        //                 // required={isFieldRequired || fieldDefinition.Required}
        //             />
        //             {/* {helpText} */}
        //     </div>
        // );
        case 'Text':
        case 'Currency':
        case 'Number':
        case 'Note':
            return (
                <div /* className={styles.fieldWrap} */>
                    <FieldText
                        field={field}
                        value={val}
                        readOnly={false} // pass mode param instead
                    />
                    {/* {helpText} */}
                </div>
            );
        // case 'DateTime':
        //     return (
        //         <div /* className={styles.fieldWrap} */>
        //             <FieldDatePicker
        //                 field={field}
        //                 value={val}
        //                 // labelOverride={labelOverride}
        //                 handler={handlerMain}
        //                 // disabled={field.InternalName == 'ReviewDate' || field.InternalName == 'EffectiveDateofChange'}
        //                 required={/* isFieldRequired ||  */field.Required}
        //             />
        //             {/* {helpText} */}
        //         </div>
        //     );
        // case 'User': // CAN'T GET THIS.CONTEXT?????????????????????????????????????????????????????????????????
        //     return (
        //         <div /* className={styles.fieldWrap} */>
        //                 <FieldPeoplePicker
        //                     field={field}
        //                     value={val}
        //                     // labelOverride={labelOverride}
        //                     handler={handlerMain}
        //                     context={context}
        //                     disabled={field.InternalName == 'ReviewedBy'}
        //                 />
        //                 {/* {helpText} */}
        //         </div>
        //     );
        default:
            return (
                <div>{field.Title}</div>
            );
    }
};

export default FormFieldEdit;