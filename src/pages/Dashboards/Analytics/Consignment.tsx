import { PurchaseRequestData } from 'Common/data';
import filterDataBySearch from 'Common/filterDataBySearch';
import TableContainer from 'Common/TableContainer';
import { Info, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getStatus } from './common';

const Consignment = () => {
  const { t } = useTranslation();

  const [data, setData] = useState(PurchaseRequestData);

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['productName', 'status'];
    filterDataBySearch(PurchaseRequestData, search, keysToSearch, setData);
  };

  const handleDetail = (_id: string) => {
    //
  }

  // Đã thanh toán => Paid
  // Đã cọc => Deposited
  // Shop phát hàng => Shipped
  // Hoàn thành => Done

 

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Ngày đặt',
        accessorKey: 'orderDate',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Tổng tiền',
        accessorKey: 'price',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span>
            {cell.row.original.price.toLocaleString()}
          </span>
        ),
      },
      {
        header: 'Số tiền phải cọc',
        accessorKey: 'depositAmount',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span>
            {cell.row.original.depositAmount.toLocaleString()}
          </span>
        ),
      },
      {
        header: 'Số tiền đã cọc',
        accessorKey: 'depositedAmount',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span>
            {cell.row.original.depositedAmount.toLocaleString()}
          </span>
        ),
      },

      {
        header: 'Status',
        accessorKey: 'status',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => getStatus(cell.row.original.status)
      },
      {
        header: 'Thao tác',
        accessorKey: '',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Link
            to="#!"
            className="text-blue-400 transition-all duration-300 ease-linear hover:text-blue-500"
            onClick={() => handleDetail(cell.row.original.id)}
          >
            <Info className="inline-block size-4 mr-1 align-middle" />{' '}
            <span className="align-middle">{t("View Detail")}</span>
          </Link>)
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="order-11 col-span-12 2xl:order-1 card 2xl:col-span-12">
        <div className="card-body">
          <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
            <div className="xl:col-span-3">
              <h6 className="text-15">{t("Consignment")}</h6>
            </div>
            <div className="xl:col-span-3 xl:col-start-10">
              <div className="flex gap-3">
                <div className="relative grow">
                  <input
                    type="text"
                    className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Search for ..."
                    autoComplete="off"
                    onChange={(e) => filterSearchData(e)}
                  />
                  <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"></Search>
                </div>
                <button
                  type="button"
                  className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20"
                >
                  <i className="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line"></i>{' '}
                  Export
                </button>
              </div>
            </div>
          </div>
          <TableContainer
            isPagination={true}
            columns={columns || []}
            data={data || []}
            customPageSize={10}
            divclassName="-mx-5 overflow-x-auto"
            tableclassName="w-full whitespace-nowrap"
            theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500 w-10"
            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Consignment;
