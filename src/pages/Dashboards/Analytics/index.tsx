import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import Consignment from './Consignment';
import OtherPurchaseRequest from './OtherPurchaseRequest';
import PurchaseRequest from './PurchaseRequest';
import Widgets from './Widgets';

const Analytics = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Analytics" pageTitle="Dashboards" />
      <div>
        <Widgets />
        <PurchaseRequest />
        <OtherPurchaseRequest />
        <Consignment />
      </div>
    </React.Fragment>
  );
};

export default Analytics;
