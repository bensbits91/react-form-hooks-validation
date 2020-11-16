import * as React from 'react';
import List from './List';
import Form from './Form';
import { baseUrlRel } from './staticVars';


const routes = data => {
    return ({
        [baseUrlRel]: () => <List items={data} />,
        // "/_layouts/15/workbench.aspx": () => <List items={data} />,
        [baseUrlRel + '/form']: () => <Form />,
    });

};
export default routes;