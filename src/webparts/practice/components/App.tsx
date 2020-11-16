import * as React from 'react';
import { useFetch } from './hooks';
import Form from './Form';
import List from './List';

const url = 'https://ntandem.sharepoint.com/sites/tests/depttasktabs'; // programmatically changing this url should cause new fetch

const fetchRequest = { // TODO: use this instead of url
    siteUrl: 'https://ntandem.sharepoint.com/sites/tests/depttasktabs',
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
    console.time('fetching list data')
    const { status, error, data } = useFetch(url);
    console.timeEnd();
    console.log('%c { status, error, data }', mcc, { status, error, data });

    const elList = status == 'fetching' ? 'Loading...' // need loading component
        : status == 'error' ? 'Error!' // what to show????
            : status == 'fetched' ?

                <List items={data} />

                : 'Hmmmmmmmm';

    return (
        <>
            {elList}
            {/* <Form context={this.props.context} /> */}
        </>
    );
};

export default App;