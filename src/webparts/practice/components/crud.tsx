import { Web } from "@pnp/sp/presets/all";

export const getItems = (
    siteUrl,
    listName,
    select = ['*'],
    expand = [],
    filter = '',
    orderBy = 'Created',
    orderAsc = false,
    getAll = false
) => {
    try {
        const spWeb = Web(siteUrl);
        const items = spWeb.lists.getByTitle(listName).items
            .select(...select)
            .expand(...expand)
            .filter(filter)
            .orderBy(orderBy, orderAsc);

        if (getAll) return items.getAll();

        return items.get();
    }
    catch (err) {
        return err;
    }
};

export const getFields = (
    siteUrl,
    listName,
    select = ['TypeAsString', 'InternalName', 'Title', 'Required', 'Choices', 'Description', 'SchemaXml'],
    expand = [],
    filter = "Hidden eq false and ReadOnlyField eq false and InternalName ne 'ContentType'",
    // orderBy = 'Created',
    // orderAsc = false,
    // getAll = false
) => {
    try {
        const spWeb = Web(siteUrl);
        const fields = spWeb.lists.getByTitle(listName).fields
            .select(...select)
            .filter(filter)
            .expand(...expand)
            // .orderBy(orderBy, orderAsc)
            ;

        // if (getAll) return fields.getAll();

        const formFields = fields.get();

        return formFields;
    }
    catch (err) {
        return err;
    }
};

// export const getItemById = (
//     listName,
//     itemId,
//     select = ['*'],
//     expand = [],
// ) => {
//     try {
//         const items = sp.web.lists.getByTitle(listName).items
//             .getById(itemId)
//             .select(...select)
//             .expand(...expand)
//             ;

//         return items.get();
//     }
//     catch (err) {
//         return err;
//     }
// };