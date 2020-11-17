import * as React from 'react';
import { useFetch } from './hooks';
import { useRoutes, A } from 'hookrouter';
import routes from './router';
import { siteUrl, baseUrlRel } from './staticVars';

const fetchItemsRequest = {
    siteUrl: siteUrl,
    listName: 'Tasks',
    select: ['*', 'Author/Title'],
    expand: ['Author'],
    filter: '',
    orderBy: '',
    orderAsc: true,
    getAll: false,
    requestedEntityType: 'items',
};

const fetchFieldsRequest = {
    siteUrl: siteUrl,
    listName: 'Tasks',
    // select: ['*', 'Author/Title'],
    // filter: '',


    // expand: ['Author'],
    // orderBy: '',
    // orderAsc: true,
    // getAll: false,
    requestedEntityType: 'fields',
};

const mcc = 'background:black;color:lime;';



const App = () => {

    const { status, error, data } = useFetch(fetchItemsRequest);
    console.log('%c { status, error, data }', mcc, { status, error, data });

    const { status: fieldsFetchStatus, error: fieldsFetchError, data: fieldsFetchData } = useFetch(fetchFieldsRequest);
    console.log('%c { fieldsFetchStatus, fieldsFetchError, fieldsFetchData }', mcc, { fieldsFetchStatus, fieldsFetchError, fieldsFetchData });

    const routeResult = useRoutes(routes(data, fieldsFetchData));
    return (
        <div className="App">
            <A href={baseUrlRel}>List</A>
            <A href={baseUrlRel + '/form/12'}>Form</A>
            {routeResult || 'need a 404 page'}
        </div>
    );
};

export default App;