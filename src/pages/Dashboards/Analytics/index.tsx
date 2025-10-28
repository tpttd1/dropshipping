import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import DailyVisit from './DailyVisit';
import Interaction from './Interaction';
import LocationBased from './LocationBased';
import MonthlyCampaign from './MonthlyCampaign';
import ProductsStatistics from './ProductsStatistics';
import Reports from './Reports';
import Satisfaction from './Satisfaction';
import Subscription from './Subscription';
import TrafficSource from './TrafficSource';
import UserDevice from './UserDevice';
import Widgets from './Widgets';

const Analytics = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Analytics" pageTitle="Dashboards" />
      <div className="grid grid-cols-12 gap-x-5">
        <Widgets />
        <LocationBased />
        <Interaction />
        <UserDevice />
        <Satisfaction />
        <DailyVisit />
        <ProductsStatistics />
        <Reports />
        <MonthlyCampaign />
        <Subscription />
        <TrafficSource />
      </div>
    </React.Fragment>
  );
};

export default Analytics;
