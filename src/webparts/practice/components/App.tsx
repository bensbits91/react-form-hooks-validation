import * as React from 'react';
import { useFetch } from './hooks';
import { useRoutes, A } from 'hookrouter';
import routes from './router';
import { siteUrl, baseUrlRel } from './staticVars';
import { ErrorBoundary } from 'react-error-boundary';


const fetchItemsRequest = {
    siteUrl: siteUrl,
    listName: 'Tasks',
    select: [
        '*',
        'Author/Title',
        'AssignedTo/Title',
        'AssignedTo/EMail',
        // 'AssignedTo/LoginName',
        'AssignedTo/Id',
        'AssignedTo/ID',
        'AssignedTo/SipAddress',
        'AssignedTo/UserName',
        // 'AssignedTo/ImnName',
        // 'AssignedTo/secondaryText',
    ],
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





function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}


const App = (context) => {
    const { status, error, data } = useFetch(fetchItemsRequest);

    const { status: fieldsStatus, error: fieldsError, data: fieldsData } = useFetch(fetchFieldsRequest);

    const routeResult = useRoutes(routes(data, fieldsData, context));

    const el =
        status == 'fetching' || fieldsStatus == 'fetching' ? 'need a loading component...'
            : status == 'error' || fieldsStatus == 'error' ? 'need an error thingy'
                : status == 'fetched' && fieldsStatus == 'fetched' ? (routeResult || 'need a 404 page')
                    : 'Oops, think we\'re lost :|';

    return (
        <div className="App">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <A href={baseUrlRel}>List</A>
                <A href={baseUrlRel + '/form/12'}>Form</A>
                {el}
            </ErrorBoundary>
        </div>
    );
};

export default App;