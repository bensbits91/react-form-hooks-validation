import * as React from 'react';
import { useFetch } from './hooks';
import { useRoutes, A } from 'hookrouter';
import routes from './router';
import { siteUrl, baseUrlRel } from './staticVars';

const fetchItemsRequest = {
    siteUrl: siteUrl,
    listName: 'Tasks',
    select: ['*', 'Author/Title', 'AssignedTo/Title'],
    expand: ['Author', 'AssignedTo'],
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



const App = (context) => {
    console.log('%c context', mcc, context);

    const { status, error, data } = useFetch(fetchItemsRequest);
    console.log('%c { status, error, data }', mcc, { status, error, data });

    const { status: fieldsStatus, error: fieldsError, data: fieldsData } = useFetch(fetchFieldsRequest);
    console.log('%c { fieldsStatus, fieldsError, fieldsData }', mcc, { fieldsStatus, fieldsError, fieldsData });

    const routeResult = useRoutes(routes(data, fieldsData, context));

    const el =
        status == 'fetching' || fieldsStatus == 'fetching' ? 'need a loading component...'
            : status == 'error' || fieldsStatus == 'error' ? 'need an error thingy'
                : status == 'fetched' && fieldsStatus == 'fetched' ? (routeResult || 'need a 404 page')
                    : 'Oops, think we\'re lost :|';

    return (
        <div className="App">
            <A href={baseUrlRel}>List</A>
            <A href={baseUrlRel + '/form/12'}>Form</A>
            {el}
        </div>
    );
};

export default App;