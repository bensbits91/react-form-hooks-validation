import * as React from 'react';
import FieldDatePicker from './fields/FieldDatePicker';
import FieldDropdown from './fields/FieldDropdown';
import FieldRadioButtons from './fields/FieldRadioButtons';
import FieldPeoplePicker from './fields/FieldPeoplePicker';
import FieldText from './fields/FieldText';

const FormFieldEdit = ({
    val,
    field,
    fieldOverrides,
    mode,
    context
}) => {

    const fieldType = fieldOverrides.TypeAsString || field.TypeAsString;

    switch (fieldType) {

        case 'Choice':
            if (field.SchemaXml.indexOf('RadioButtons') > -1) {
                return (
                    <div /* className={styles.fieldWrap} */>
                        <FieldRadioButtons
                            field={field}
                            value={val}
                            mode={mode}
                        />
                    </div>
                );
            }
            return (
                <div /* className={styles.fieldWrap} */>
                    <FieldDropdown
                        field={field}
                        value={val}
                        mode={mode}
                    />
                </div>
            );

        case 'Text':
        case 'Currency':
        case 'Number':
        case 'Note':
        case 'Email':
        case 'Phone':
        case 'Zip':
            return (
                <div /* className={styles.fieldWrap} */>
                    <FieldText
                        field={field}
                        fieldOverrides={fieldOverrides}
                        value={val}
                        mode={mode}
                    />
                </div>
            );

        case 'DateTime':
            return (
                <div /* className={styles.fieldWrap} */>
                    <FieldDatePicker
                        field={field}
                        dateValue={val}
                    />
                </div>
            );

        case 'User':
            return (
                <div /* className={styles.fieldWrap} */>
                    <FieldPeoplePicker
                        field={field}
                        value={val}
                        // labelOverride={labelOverride}
                        // handler={handlerMain}
                        // disabled={field.InternalName == 'ReviewedBy'}
                        context={context}
                    />
                </div>
            );

        default:
            return (
                <div>{field.Title}</div>
            );
    }
};

export default FormFieldEdit;