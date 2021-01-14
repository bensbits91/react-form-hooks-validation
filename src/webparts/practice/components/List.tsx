import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { navigate } from 'hookrouter';
import { baseUrlRel } from './staticVars';


const mcc = 'background:black;color:yellow;',

    _columns: IColumn[] = [
        { key: 'idColumn', name: 'ID', fieldName: 'Id', minWidth: 50, maxWidth: 50, isResizable: true },
        { key: 'titleColumn', name: 'Title', fieldName: 'Title', minWidth: 250, maxWidth: 300, isResizable: true },
    ],

    _onClickItemLink = (itemId) => {
        navigate(baseUrlRel + '/form/view/' + itemId);
    },

    List = ({ items }) => {
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
                onItemInvoked={(item) => _onClickItemLink(/* 'view',  */item.Id)}
                layoutMode={DetailsListLayoutMode.justified}
            />
        );
    };

export default List;