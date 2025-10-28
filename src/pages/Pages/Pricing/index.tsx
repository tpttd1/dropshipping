import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import HorizontalPricing from './HorizontalPricing';
import Plans from './Plans';

const Pricing = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Pricing" pageTitle="Pages" />
      <Plans />
      <HorizontalPricing />
    </React.Fragment>
  );
};

export default Pricing;
