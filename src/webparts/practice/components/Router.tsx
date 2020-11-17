import * as React from 'react';
import List from './List';
import Form from './Form';
import { baseUrlRel } from './staticVars';

const mcc = 'background:yellow;color:black;';

const routes = (items, fields) => {
    console.log('%c items', mcc, items);
    return ({
        [baseUrlRel]: () => <List items={items} />,
        [baseUrlRel + '/form/:itemId']: ({ itemId }) => <Form
            item={items.find(d => d.Id == itemId)} 
            fields={fields}
            />, // should this filtering happen here?
    });

};
export default routes;