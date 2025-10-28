import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import DefaultGroupSearch from './DefaultGroupSearch';
import DefaultSelect from './DefaultSelect';
import OptionLimitPasting from './OptionLimitPasting';
import OptionsMultipleRemove from './OptionsMultipleRemove';

const FormSelect = () => {
  return (
    <React.Fragment>
      <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
        <BreadCrumb title="Form Select" pageTitle="Forms" />

        <DefaultSelect />

        <h5 className="mb-5 underline">Choices</h5>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
          <DefaultGroupSearch />
          <OptionsMultipleRemove />
          <OptionLimitPasting />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormSelect;
