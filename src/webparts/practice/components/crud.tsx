import { sp } from "@pnp/sp/presets/all";

const mcc = 'background:lime;color:black;';

export const getItems = ( // should accept webUrl, then build sp.Web, so we can get data from other sites in the tenant
    listName,
    select = ['*'],
    expand = [],
    filter = '',
    orderBy = 'Created',
    orderAsc = false,
    getAll = false
) => {
    try {
        const items = sp.web.lists.getByTitle(listName).items
            .select(...select)
            .expand(...expand)
            .filter(filter)
            .orderBy(orderBy, orderAsc)
            ;

        if (getAll) return items.getAll();

        return items.get();
    }
    catch (err) {
        return err;
    }
};

export const getItemById = (
    listName,
    itemId,
    select = ['*'],
    expand = [],
) => {
    try {
        const items = sp.web.lists.getByTitle(listName).items
            .getById(itemId)
            .select(...select)
            .expand(...expand)
            ;

        return items.get();
    }
    catch (err) {
        return err;
    }
};