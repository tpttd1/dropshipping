import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import DefaultTabs from './DefaultTabs';
import IconArrow from './IconArrow';
import PillsJustified from './PillsJustified';
import SimpleBorder from './SimpleBorder';
import VerticalTabs from './VerticalTabs';

const NavTabs = () => {
  return (
    <React.Fragment>
      <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
        <BreadCrumb title="Tabs" pageTitle="Navigation" />

        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
          <DefaultTabs />
          <PillsJustified />
          <SimpleBorder />
          <IconArrow />
          <VerticalTabs />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavTabs;
