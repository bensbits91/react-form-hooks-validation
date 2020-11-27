import * as React from 'react';
import List from './List';
import Form from './Form';
import { baseUrlRel } from './staticVars';

const mcc = 'background:yellow;color:black;';

const routes = (items, fields, context) => {
    // console.log('%c context', mcc, context);
    // console.log('%c items', mcc, items);
    return ({
        [baseUrlRel]: () => <List items={items} />,
        [baseUrlRel + '/form/:mode/:itemId']: ({ mode, itemId }) => <Form
            item={items.find(d => d.Id == itemId)}
            fields={fields}
            mode={mode}
            context={context}
        />, // should this filtering happen here?
    });

};
export default routes;