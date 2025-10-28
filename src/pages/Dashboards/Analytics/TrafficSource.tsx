import React from 'react';
import { Link } from 'react-router-dom';

const TrafficSource = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-6 order-[15] 2xl:order-1 card 2xl:col-span-3">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-3">
            <h6 className="text-15 grow">Traffic Source</h6>
            <Link
              to="#"
              className="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-700"
            >
              See More
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h6>Google</h6>
                <span className="text-slate-500 dark:text-zink-200">
                  54,963
                </span>
              </div>
              <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                <div
                  className="h-3.5 rounded bg-custom-500"
                  style={{ width: '89%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h6>Social Media</h6>
                <span className="text-slate-500 dark:text-zink-200">
                  54,963
                </span>
              </div>
              <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                <div
                  className="h-3.5 rounded bg-yellow-500"
                  style={{ width: '81%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h6>Direct Message</h6>
                <span className="text-slate-500 dark:text-zink-200">
                  54,963
                </span>
              </div>
              <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                <div
                  className="h-3.5 rounded bg-green-500"
                  style={{ width: '63%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h6>Others</h6>
                <span className="text-slate-500 dark:text-zink-200">
                  54,963
                </span>
              </div>
              <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                <div
                  className="h-3.5 rounded bg-slate-500 dark:text-zink-500"
                  style={{ width: '25%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrafficSource;
