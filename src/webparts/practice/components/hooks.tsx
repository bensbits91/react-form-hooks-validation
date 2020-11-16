import { useEffect, useRef, useReducer } from 'react';
import { getItems } from './crud';

const mcc = 'background:aqua;color:navy;';

export const useFetch = (fetchRequest) => {
    const cache = useRef({}); // I don't fully understand how this works, only fectches if data isn't cached

    const initialState = {
        status: 'idle',
        error: null,
        data: [],
    };

    const [state, dispatch] = useReducer((reducerState, action) => {
        switch (action.type) {
            case 'FETCHING':
                return { ...initialState, status: 'fetching' };
            case 'FETCHED':
                return { ...initialState, status: 'fetched', data: action.payload };
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return reducerState;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;
        if (!fetchRequest) return;

        const { siteUrl, listName, select, expand, filter, orderBy, orderAsc, getAll } = fetchRequest;

        const url = siteUrl + listName;

        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[url]) { // probably need to be able to override this to force refetch, e.g. after save data
                const data = cache.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    console.time('fetch');
                    const response = await getItems(
                        siteUrl,
                        listName,
                        select,
                        expand,
                        // filter,
                        // orderBy,
                        // orderAsc,
                        // getAll
                    );
                    console.log('%c response', mcc, response);
                    cache.current[url] = response;
                    if (cancelRequest) {
                        console.timeEnd('fetch');
                        return;
                    }
                    dispatch({ type: 'FETCHED', payload: response });
                    console.timeEnd('fetch');
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                    console.timeEnd('fetch');
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true; // I don't fully understand how this works
        };
    }, [fetchRequest]);

    console.log('%c state', mcc, state);
    return state;
};