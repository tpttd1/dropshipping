import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import AddRows from './AddRows';
import Basic from './Basic';
import BorderedTable from './BorderedTable';
import HiddenColumns from './HiddenColumns';
import HoverAble from './Hoverable';
import RowBorders from './RowBorders';

export interface column {
  header: string;
  accessorKey: string;
  enableColumnFilter: boolean;
  enableSorting: boolean;
}

const ReactDataTable = () => {
  return (
    <React.Fragment>
      <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
        <BreadCrumb title="Datatable" pageTitle="Tables" />

        <Basic />
        <RowBorders />
        <HoverAble />
        <BorderedTable />
        <HiddenColumns />
        <AddRows />
      </div>
    </React.Fragment>
  );
};

export default ReactDataTable;
