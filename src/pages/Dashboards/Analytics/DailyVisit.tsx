import { Dropdown } from 'Common/Components/Dropdown';
import { Info, MoreVertical } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { DailyVisitChart } from './Charts';

const DailyVisit = () => {
  return (
    <React.Fragment>
      <div className="order-10 col-span-12 2xl:order-1 card 2xl:col-span-4">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-3">
            <h6 className="text-15 grow">
              Daily Visit Insights{' '}
              <Link
                to="#!"
                data-tooltip="default"
                data-tooltip-content="Analyst or business user discovering a pattern in data or a relationship between variables"
                className="inline-block align-middle ltr:ml-1 rtl:mr-1 text-slate-500 dark:text-zink-200"
              >
                <Info className="size-4"></Info>
              </Link>
            </h6>
            <Dropdown className="relative shrink-0">
              <Dropdown.Trigger
                type="button"
                className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle"
                id="dailyVisitInsightsDropdown"
                data-bs-toggle="dropdown"
              >
                <MoreVertical className="inline-block size-4"></MoreVertical>
              </Dropdown.Trigger>

              <Dropdown.Content
                placement="right-end"
                className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                aria-labelledby="dailyVisitInsightsDropdown"
              >
                <li>
                  <Link
                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                    to="#!"
                  >
                    1 Weekly
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                    to="#!"
                  >
                    1 Monthly
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                    to="#!"
                  >
                    3 Monthly
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                    to="#!"
                  >
                    6 Monthly
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                    to="#!"
                  >
                    This Yearly
                  </Link>
                </li>
              </Dropdown.Content>
            </Dropdown>
          </div>
          <DailyVisitChart
            chartId="dailyVisitInsightsChart"
            data-chart-colors='["bg-green-500", "bg-purple-500"]'
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DailyVisit;
