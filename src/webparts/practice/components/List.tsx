import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';

const mcc = 'background:black;color:yellow;';

const _columns: IColumn[] = [
    { key: 'idColumn', name: 'ID', fieldName: 'Id', minWidth: 50, maxWidth: 50, isResizable: true },
    { key: 'titleColumn', name: 'Title', fieldName: 'Title', minWidth: 250, maxWidth: 300, isResizable: true },
];

const List = ({ items }) => {
    console.log('%c items', mcc, items);

    const _items = items.map(d => {

        const item = {};

        _columns.forEach(c => { // only fields matching a column defined for the listview
            item[c.fieldName] = d[c.fieldName];
        });

        return item;

    });

    return (
        <DetailsList
            compact={true}
            items={_items}
            columns={_columns}
            selectionMode={0}
            // onRenderItemColumn={this._onRenderItemColumn.bind(this)}
            // onItemInvoked={(item) => this._onClickItemLink('view', item.id)}
            layoutMode={DetailsListLayoutMode.justified}
        />
    );
};

export default List;