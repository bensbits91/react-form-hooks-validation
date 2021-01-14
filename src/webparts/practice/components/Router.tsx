import * as React from 'react';
import List from './List';
import Form from './Form';
import { baseUrlRel } from './staticVars';

const mcc = 'background:yellow;color:black;',

    routes = (items, fields, context) => {

        return ({

            [baseUrlRel]: () => <List items={items} />,

            [baseUrlRel + '/form/new']: () => <Form
                fields={fields}
                mode='new'
                context={context}
            />,

            [baseUrlRel + '/form/:mode/:itemId']: ({ mode, itemId }) => <Form
                item={items.find(d => d.Id == itemId)}
                fields={fields}
                mode={mode}
                context={context}
            />,

        });

    };
export default routes;