import * as React from 'react';
import { useFetch } from './hooks';

const mcc = 'background:hotpink;color:black;';

const url = 'https://ntandem.sharepoint.com/sites/tests/depttasktabs';

export default async function ListWithHook() {
    const { status, error, data } = await useFetch(url);
    console.log('%c status', mcc, status);
    console.log('%c error', mcc, error);
    console.log('%c data', mcc, data);

    return <>{error}</>;
}