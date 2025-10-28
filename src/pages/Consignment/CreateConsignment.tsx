import BreadCrumb from 'Common/BreadCrumb';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Flatpickr from 'react-flatpickr';

// icons
import {
  Eye,
  FileEdit,
  MoreHorizontal,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Dropdown } from 'Common/Components/Dropdown';
import Modal from 'Common/Components/Modal';
import DeleteModal from 'Common/DeleteModal';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import filterDataBySearch from 'Common/filterDataBySearch';
import { ToastContainer } from 'react-toastify';
import {
  addOrders as onAddOrders,
  deleteOrders as onDeleteOrders,
  getOrders as onGetOrders,
  updateOrders as onUpdateOrders,
} from 'slices/thunk';

const CreateConsignment = () => {
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.Ecommerce,
    (state) => ({
      dataList: state.orders,
    })
  );

  const { dataList } = useSelector(selectDataList);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Get Data
  useEffect(() => {
    dispatch(onGetOrders());
  }, [dispatch]);

  useEffect(() => {
    setData(dataList);
  }, [dataList]);

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  // Delete Data
  const onClickDelete = (cell: any) => {
    setDeleteModal(true);
    if (cell.id) {
      setEventData(cell);
    }
  };

  const handleDelete = () => {
    if (eventData) {
      dispatch(onDeleteOrders(eventData.id));
      setDeleteModal(false);
    }
  };
  //

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    setEventData({ ...ele });
    setIsEdit(true);
    setShow(true);
  };

  // validation
  const validation: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (eventData && eventData.orderId) || '',
      orderDate: (eventData && eventData.orderDate) || '',
      deliveryDate: (eventData && eventData.deliveryDate) || '',
      customerName: (eventData && eventData.customerName) || '',
      paymentMethod: (eventData && eventData.paymentMethod) || '',
      amount: (eventData && eventData.amount) || '',
      deliveryStatus: (eventData && eventData.deliveryStatus) || '',
    },
    validationSchema: Yup.object({
      // orderId: Yup.string().required("Please Enter Id"),
      orderDate: Yup.string().required('Please Enter Date'),
      deliveryDate: Yup.string().required('Please Enter Date'),
      customerName: Yup.string().required('Please Enter Name'),
      paymentMethod: Yup.string().required('Please Enter Payment Method'),
      amount: Yup.string().required('Please Enter Amount'),
      deliveryStatus: Yup.string().required('Please Enter Status'),
    }),

    onSubmit: (values) => {
      if (isEdit) {
        const updateData = {
          id: eventData ? eventData.id : 0,
          ...values,
        };
        // update user
        dispatch(onUpdateOrders(updateData));
      } else {
        const newData = {
          ...values,
          id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          orderId:
            '#TWT50151003' +
            (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        };
        // save new user
        dispatch(onAddOrders(newData));
      }
      toggle();
    },
  });

  //
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData('');
      setIsEdit(false);
    } else {
      setShow(true);
      setEventData('');
      validation.resetForm();
    }
  }, [show, validation]);

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = [
      'orderId',
      'customerName',
      'paymentMethod',
      'deliveryStatus',
    ];
    filterDataBySearch(dataList, search, keysToSearch, setData);
  };

  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab: any, type: any) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      let filteredOrders = dataList;
      if (type !== 'all') {
        filteredOrders = dataList.filter(
          (order: any) => order.deliveryStatus === type
        );
      }
      setData(filteredOrders);
    }
  };

  // columns
  const Status = ({ item }: any) => {
    switch (item) {
      case 'Delivered':
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
            {item}
          </span>
        );
      case 'Shipping':
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">
            {item}
          </span>
        );
      case 'New':
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">
            {item}
          </span>
        );
      case 'Pending':
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">
            {item}
          </span>
        );
      case 'Cancelled':
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20">
            {item}
          </span>
        );
      case 'Return':
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">
            {item}
          </span>
        );
      default:
        return (
          <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
            {item}
          </span>
        );
    }
  };

  const columns = useMemo(
    () => [
      {
        header: (
          <div className="flex items-center h-full">
            <input
              id="CheckboxAll"
              className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
              type="checkbox"
            />
          </div>
        ),
        enableSorting: false,
        id: 'checkAll',
        cell: (cell: any) => {
          return (
            <div className="flex items-center h-full">
              <input
                id={'Checkbox' + cell.row.original.id}
                className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
                type="checkbox"
              />
            </div>
          );
        },
      },
      {
        header: 'Order ID',
        accessorKey: 'orderId',
        enableColumnFilter: false,
        enableSorting: false,
        cell: (cell: any) => (
          <>
            <Link
              to="#!"
              className="transition-all duration-150 ease-linear order_id text-custom-500 hover:text-custom-600"
            >
              {cell.getValue()}
            </Link>
          </>
        ),
      },
      {
        header: 'Order Date',
        accessorKey: 'orderDate',
        enableColumnFilter: false,
      },
      {
        header: 'Delivery Date',
        accessorKey: 'deliveryDate',
        enableColumnFilter: false,
      },
      {
        header: 'Customer Name',
        accessorKey: 'customerName',
        enableColumnFilter: false,
      },
      {
        header: 'Payment Method',
        accessorKey: 'paymentMethod',
        enableColumnFilter: false,
      },
      {
        header: 'Amount',
        accessorKey: 'amount',
        enableColumnFilter: false,
      },
      {
        header: 'Delivery Status',
        accessorKey: 'deliveryStatus',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => <Status item={cell.getValue()} />,
      },
      {
        header: 'Action',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Dropdown className="relative">
            <Dropdown.Trigger
              id="orderAction1"
              data-bs-toggle="dropdown"
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
            >
              <MoreHorizontal className="size-3" />
            </Dropdown.Trigger>
            <Dropdown.Content
              placement={cell.row.index ? 'top-end' : 'right-end'}
              className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600"
              aria-labelledby="orderAction1"
            >
              <li>
                <Link
                  to="/apps-ecommerce-order-overview"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                >
                  <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{' '}
                  <span className="align-middle">Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  data-modal-target="addOrderModal"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  onClick={() => {
                    const data = cell.row.original;
                    handleUpdateDataClick(data);
                  }}
                >
                  <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{' '}
                  <span className="align-middle">Edit</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  onClick={() => {
                    const data = cell.row.original;
                    onClickDelete(data);
                  }}
                >
                  <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{' '}
                  <span className="align-middle">Delete</span>
                </Link>
              </li>
            </Dropdown.Content>
          </Dropdown>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <BreadCrumb title="Create Consignment" pageTitle="Consignment" />
      <DeleteModal
        show={deleteModal}
        onHide={deleteToggle}
        onDelete={handleDelete}
      />
      <ToastContainer closeButton={false} limit={1} />

      <div className="card" id="ordersTable">
        <div className="card-body">
          create
        </div>
      </div>

      <Modal
        show={show}
        onHide={toggle}
        modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-4 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">
            {!!isEdit ? 'Edit Order' : 'Add Order'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          <form
            action="#!"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <label
                  htmlFor="orderId"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  disabled
                  value={validation.values.orderId || '#TWT5015100365'}
                  required
                />
              </div>
              <div className="xl:col-span-6">
                <label
                  htmlFor="orderDateInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Order Date
                </label>
                <Flatpickr
                  id="orderDateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  options={{
                    dateFormat: 'd M, Y',
                  }}
                  placeholder="Select date"
                  name="orderDate"
                  onChange={(date: any) =>
                    validation.setFieldValue(
                      'orderDate',
                      moment(date[0]).format('DD MMMM ,YYYY')
                    )
                  }
                  value={validation.values.orderDate || ''}
                />
                {validation.touched.orderDate && validation.errors.orderDate ? (
                  <p className="text-red-400">{validation.errors.orderDate}</p>
                ) : null}
              </div>
              <div className="xl:col-span-6">
                <label
                  htmlFor="deliveryDateInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Delivery Date
                </label>
                <Flatpickr
                  id="deliveryDateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  options={{
                    dateFormat: 'd M, Y',
                  }}
                  placeholder="Select date"
                  name="deliveryDate"
                  onChange={(date: any) =>
                    validation.setFieldValue(
                      'deliveryDate',
                      moment(date[0]).format('DD MMMM ,YYYY')
                    )
                  }
                  value={validation.values.deliveryDate || ''}
                />
                {validation.touched.deliveryDate &&
                  validation.errors.deliveryDate ? (
                  <p className="text-red-400">
                    {validation.errors.deliveryDate}
                  </p>
                ) : null}
              </div>
              <div className="xl:col-span-12">
                <label
                  htmlFor="customerNameInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Customer Name
                </label>
                <input
                  type="text"
                  id="customerNameInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Customer name"
                  name="customerName"
                  onChange={validation.handleChange}
                  value={validation.values.customerName || ''}
                />
                {validation.touched.customerName &&
                  validation.errors.customerName ? (
                  <p className="text-red-400">
                    {validation.errors.customerName}
                  </p>
                ) : null}
              </div>
              <div className="xl:col-span-12">
                <label
                  htmlFor="paymentMethodSelect"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Payment Method
                </label>
                <select
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  data-choices
                  data-choices-search-false
                  id="paymentMethodSelect"
                  name="paymentMethod"
                  onChange={validation.handleChange}
                  value={validation.values.paymentMethod || ''}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Paypal">Paypal</option>
                  <option value="Visa Card">Visa Card</option>
                  <option value="COD">COD</option>
                  <option value="American Express">American Express</option>
                </select>
                {validation.touched.paymentMethod &&
                  validation.errors.paymentMethod ? (
                  <p className="text-red-400">
                    {validation.errors.paymentMethod}
                  </p>
                ) : null}
              </div>
              <div className="xl:col-span-12">
                <label
                  htmlFor="amountInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amountInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="12345 67890"
                  name="amount"
                  onChange={validation.handleChange}
                  value={validation.values.amount || ''}
                />
                {validation.touched.amount && validation.errors.amount ? (
                  <p className="text-red-400">{validation.errors.amount}</p>
                ) : null}
              </div>
              <div className="xl:col-span-12">
                <label
                  htmlFor="deliveryStatusSelect"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Delivery Status
                </label>
                <select
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  data-choices
                  data-choices-search-false
                  id="deliveryStatusSelect"
                  name="deliveryStatus"
                  onChange={validation.handleChange}
                  value={validation.values.deliveryStatus || ''}
                >
                  <option value="Delivered">Delivered</option>
                  <option value="Shipping">Shipping</option>
                  <option value="New">New</option>
                  <option value="Pending">Pending</option>
                  <option value="Return">Return</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                {validation.touched.deliveryStatus &&
                  validation.errors.deliveryStatus ? (
                  <p className="text-red-400">
                    {validation.errors.deliveryStatus}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="reset"
                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                onClick={toggle}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                {!!isEdit ? 'Update' : 'Add Order'}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default CreateConsignment;
