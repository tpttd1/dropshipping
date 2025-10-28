import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import BorderBordered from './BorderBordered';
import ColorsTable from './ColorsTable';
import CustomCardTable from './CustomCardTable';
import DefaultWithout from './DefaultWithout';
import EvenOdd from './EvenOdd';
import HoverAbleStripedRows from './HoverAbleStripedRows';

const BasicTable = () => {
  return (
    <React.Fragment>
      <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
        <BreadCrumb title="Basic Table" pageTitle="Tables" />

        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
          <DefaultWithout />
          <EvenOdd />
          <HoverAbleStripedRows />
          <BorderBordered />
          <ColorsTable />
          <CustomCardTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BasicTable;
