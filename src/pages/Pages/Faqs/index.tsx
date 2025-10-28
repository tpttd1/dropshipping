import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import FaqSearch from './FaqSearch';
import PopularAskQuestions from './PopularAskQuestions';
import VideoTutorial from './VideoTutorial';

const Faqs = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="FAQ's" pageTitle="Pages" />
      <FaqSearch />
      <PopularAskQuestions />
      <VideoTutorial />
    </React.Fragment>
  );
};

export default Faqs;
