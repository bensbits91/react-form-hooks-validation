import * as React from 'react';
import { useFetch } from './hooks';
import { useRoutes, A } from 'hookrouter';
import routes from './router';
import { siteUrl, baseUrlRel } from './staticVars';

const fetchRequest = {
    siteUrl: siteUrl,
    listName: 'Tasks',
    select: ['*', 'Author/Title'],
    expand: ['Author'],
    filter: '',
    orderBy: '',
    orderAsc: true,
    getAll: false,
};

const mcc = 'background:black;color:lime;';



const App = () => {

    const { status, error, data } = useFetch(fetchRequest);
    console.log('%c { status, error, data }', mcc, { status, error, data });

    const routeResult = useRoutes(routes(data));
    return (
        <div className="App">
            <A href={baseUrlRel}>List</A>
            <A href={baseUrlRel + '/form'}>Form</A>
            {routeResult || 'need a 404 page'}
        </div>
    );
};

export default App;