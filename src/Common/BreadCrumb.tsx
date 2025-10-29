import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface BreadCrumbProps {
  title: string;
  pageTitle: string;
}

const BreadCrumb = ({ title, pageTitle }: BreadCrumbProps) => {
  const { t } = useTranslation();
  document.title = `${t(title)}`;

  return (
    <React.Fragment>
      <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
        <div className="grow">
          <h5 className="text-16">{t(title)}</h5>
        </div>
        <ul className="flex items-center gap-2 text-sm font-normal shrink-0">
          <li className="relative before:content-['\ea54'] before:font-remix ltr:before:-right-1 rtl:before:-left-1  before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:text-slate-400 dark:text-zink-200">
            <Link to="#" className="text-slate-400 dark:text-zink-200">
              {t(pageTitle)}
            </Link>
          </li>
          <li className="text-slate-700 dark:text-zink-100">{t(title)}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BreadCrumb;
