import React from 'react';

// Dashboard
const Analytics = React.lazy(() => import('pages/Dashboards/Analytics'));

// Ecommerce
const Checkout = React.lazy(() => import('pages/Ecommerce/Checkout'));
const OrderOverview = React.lazy(() => import('pages/Ecommerce/OrderOverview'));
const Orders = React.lazy(() => import('pages/Ecommerce/Orders'));
const AddNew = React.lazy(() => import('pages/Ecommerce/Products/AddNew'));
const GridView = React.lazy(() => import('pages/Ecommerce/Products/GridView'));
const Overview = React.lazy(() => import('pages/Ecommerce/Products/Overview'));
const Sellers = React.lazy(() => import('pages/Ecommerce/Sellers'));
const ShoppingCart = React.lazy(() => import('pages/Ecommerce/ShoppingCart'));

// Purchase
const CreateOtherPurchase = React.lazy(() => import('pages/Purchase/CreateOtherPurchase'));
const OtherPurchaseRequest = React.lazy(() => import('pages/Purchase/OtherPurchaseRequest'));
const PurchaseRequest = React.lazy(() => import('pages/Purchase/PurchaseRequest'));

// Consignment
const Consignment = React.lazy(() => import('pages/Consignment/Consignment'));
const CreateConsignment = React.lazy(() => import('pages/Consignment/CreateConsignment'));

// PaymentList
const CreatePayment = React.lazy(() => import('pages/Payment/CreatePayment'));
const PaymentList = React.lazy(() => import('pages/Payment/PaymentList'));

// HR Management
const AttendanceHR = React.lazy(() => import('pages/HRManagement/Attendance/AttendanceHR'));
const MainAttendance = React.lazy(() => import('pages/HRManagement/Attendance/MainAttendance'));
const Departments = React.lazy(() => import('pages/HRManagement/Departments'));
const EmployeeList = React.lazy(() => import('pages/HRManagement/EmployeeList'));
const Holidays = React.lazy(() => import('pages/HRManagement/Holidays'));
const AddLeaveEmployee = React.lazy(() => import('pages/HRManagement/Leaves Manage/AddLeaveEmployee'));
const AddLeaveHR = React.lazy(() => import('pages/HRManagement/Leaves Manage/AddLeaveHR'));
const LeaveManageEmployee = React.lazy(() => import('pages/HRManagement/Leaves Manage/LeaveManageEmployee'));
const LeaveManageHR = React.lazy(() => import('pages/HRManagement/Leaves Manage/LeaveManageHR'));
const CreatePayslip = React.lazy(() => import('pages/HRManagement/Payroll/CreatePayslip'));
const EmployeeSalary = React.lazy(() => import('pages/HRManagement/Payroll/EmployeeSalary'));
const Payslip = React.lazy(() => import('pages/HRManagement/Payroll/Payslip'));
const Estimates = React.lazy(() => import('pages/HRManagement/Sales/Estimates'));
const Expenses = React.lazy(() => import('pages/HRManagement/Sales/Expenses'));
const Payments = React.lazy(() => import('pages/HRManagement/Sales/Payments'));

// Invoices
const InvoiceAddNew = React.lazy(() => import('pages/Invoices/AddNew'));
const InvoiceListView = React.lazy(() => import('pages/Invoices/ListView'));
const InvoiceOverview = React.lazy(() => import('pages/Invoices/Overview'));

// Users
const UserListView = React.lazy(() => import('pages/Users/ListView'));

// Auth - Login
const Basic = React.lazy(() => import('pages/AuthenticationInner/Login/Basic'));
const LoginBoxed = React.lazy(() => import('pages/AuthenticationInner/Login/LoginBoxed'));
const LoginCover = React.lazy(() => import('pages/AuthenticationInner/Login/LoginCover'));
const LoginModern = React.lazy(() => import('pages/AuthenticationInner/Login/LoginModern'));

// Auth - Register
const BasicRegister = React.lazy(() => import('pages/AuthenticationInner/Register/Basic'));
const RegisterBoxed = React.lazy(() => import('pages/AuthenticationInner/Register/RegisterBoxed'));
const RegisterCover = React.lazy(() => import('pages/AuthenticationInner/Register/RegisterCover'));
const RegisterModern = React.lazy(() => import('pages/AuthenticationInner/Register/RegisterModern'));

// Auth - Email Verify
const BasicEmailVerify = React.lazy(() => import('pages/AuthenticationInner/VerifyEmail/Basic'));
const EmailCover = React.lazy(() => import('pages/AuthenticationInner/VerifyEmail/EmailCover'));
const EmailModern = React.lazy(() => import('pages/AuthenticationInner/VerifyEmail/EmailModern'));

// Auth - Two Steps
const BasicTwoSteps = React.lazy(() => import('pages/AuthenticationInner/TwoSteps/Basic'));
const TwoStepsBoxed = React.lazy(() => import('pages/AuthenticationInner/TwoSteps/TwoStepsBoxed'));
const TwoStepsCover = React.lazy(() => import('pages/AuthenticationInner/TwoSteps/TwoStepsCover'));
const TwoStepsModern = React.lazy(() => import('pages/AuthenticationInner/TwoSteps/TwoStepsModern'));

// Auth - Logout
const BasicLogout = React.lazy(() => import('pages/AuthenticationInner/Logout/Basic'));
const LogoutBoxed = React.lazy(() => import('pages/AuthenticationInner/Logout/LogoutBoxed'));
const LogoutCover = React.lazy(() => import('pages/AuthenticationInner/Logout/LogoutCover'));
const LogoutModern = React.lazy(() => import('pages/AuthenticationInner/Logout/LogoutModern'));

// Auth - Reset Password
const BasicResetPassword = React.lazy(() => import('pages/AuthenticationInner/ResetPassword/Basic'));
const ResetPasswordBoxed = React.lazy(() => import('pages/AuthenticationInner/ResetPassword/ResetPasswordBoxed'));
const ResetPasswordCover = React.lazy(() => import('pages/AuthenticationInner/ResetPassword/ResetPasswordCover'));
const ResetPasswordModern = React.lazy(() => import('pages/AuthenticationInner/ResetPassword/ResetPasswordModern'));

// Auth - Create Password
const Login = React.lazy(() => import('pages/Authentication/Login'));
const Logout = React.lazy(() => import('pages/Authentication/LogOut'));
const Register = React.lazy(() => import('pages/Authentication/Register'));
const UserProfile = React.lazy(() => import('pages/Authentication/UserProfile'));
const ComingSoon = React.lazy(() => import('pages/AuthenticationInner/ComingSoon'));
const BasicCreatePassword = React.lazy(() => import('pages/AuthenticationInner/CreatePassword/Basic'));
const CreatePasswordBoxed = React.lazy(() => import('pages/AuthenticationInner/CreatePassword/CreatePasswordBoxed'));
const CreatePasswordCover = React.lazy(() => import('pages/AuthenticationInner/CreatePassword/CreatePasswordCover'));
const CreatePasswordModern = React.lazy(() => import('pages/AuthenticationInner/CreatePassword/CreatePasswordModern'));
const Maintenance = React.lazy(() => import('pages/AuthenticationInner/Maintenance'));
const Offline = React.lazy(() => import('pages/AuthenticationInner/Offline'));
const Pages404 = React.lazy(() => import('pages/AuthenticationInner/Pages404'));

// Pages
const Account = React.lazy(() => import('pages/Pages/Account'));
const ContactUs = React.lazy(() => import('pages/Pages/ContactUs'));
const Faqs = React.lazy(() => import('pages/Pages/Faqs'));
const Settings = React.lazy(() => import('pages/Pages/Settings'));

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: '/', component: Analytics },
  { path: '/dashboard', component: Analytics },

  // Ecommerce
  { path: '/apps-product', component: GridView },
  { path: '/apps-product/:id', component: Overview },
  { path: '/apps-ecommerce-product-overview', component: Overview },
  { path: '/apps-ecommerce-product-create', component: AddNew },
  { path: '/apps-shopping-cart', component: ShoppingCart },
  { path: '/apps-ecommerce-checkout', component: Checkout },
  { path: '/apps-ecommerce-orders', component: Orders },
  { path: '/apps-ecommerce-order-overview', component: OrderOverview },
  { path: '/apps-ecommerce-sellers', component: Sellers },

  // Purchase
  { path: '/apps-purchase-request', component: PurchaseRequest },
  { path: '/apps-other-purchase-request', component: OtherPurchaseRequest },
  { path: '/apps-create-other-purchase', component: CreateOtherPurchase },

  // Consignment
  { path: '/apps-consignment-list', component: Consignment },
  { path: '/apps-create-consignment', component: CreateConsignment },

  // Payment
  { path: '/apps-payment-list', component: PaymentList },
  { path: '/apps-create-payment', component: CreatePayment },


  // HR Management
  { path: '/apps-hr-employee', component: EmployeeList },
  { path: '/apps-hr-holidays', component: Holidays },
  { path: '/apps-hr-leave-employee', component: LeaveManageEmployee },
  { path: '/apps-hr-create-leave-employee', component: AddLeaveEmployee },
  { path: '/apps-hr-leave', component: LeaveManageHR },
  { path: '/apps-hr-create-leave', component: AddLeaveHR },
  { path: '/apps-hr-attendance', component: AttendanceHR },
  { path: '/apps-hr-attendance-main', component: MainAttendance },
  { path: '/apps-hr-department', component: Departments },
  { path: '/apps-hr-sales-estimates', component: Estimates },
  { path: '/apps-hr-sales-payments', component: Payments },
  { path: '/apps-hr-sales-expenses', component: Expenses },
  { path: '/apps-hr-payroll-employee-salary', component: EmployeeSalary },
  { path: '/apps-hr-payroll-payslip', component: Payslip },
  { path: '/apps-hr-payroll-create-payslip', component: CreatePayslip },

  // Invoices
  { path: '/apps-invoice-list', component: InvoiceListView },
  { path: '/apps-invoice-add-new', component: InvoiceAddNew },
  { path: '/apps-invoice-overview', component: InvoiceOverview },

  // Users
  { path: '/apps-users-list', component: UserListView },

  // pages
  { path: '/pages-account', component: Account },
  { path: '/pages-account-settings', component: Settings },
  { path: '/pages-faqs', component: Faqs },
  { path: '/pages-contact-us', component: ContactUs },

  // profile
  { path: '/user-profile', component: UserProfile },
];

const publicRoutes = [
  // auth
  { path: '/auth-login-basic', component: Basic },
  { path: '/auth-login-cover', component: LoginCover },
  { path: '/auth-login-boxed', component: LoginBoxed },
  { path: '/auth-login-modern', component: LoginModern },

  // Register
  { path: '/auth-register-basic', component: BasicRegister },
  { path: '/auth-register-cover', component: RegisterCover },
  { path: '/auth-register-boxed', component: RegisterBoxed },
  { path: '/auth-register-modern', component: RegisterModern },

  // Verify Email
  { path: '/auth-verify-email-basic', component: BasicEmailVerify },
  { path: '/auth-verify-email-cover', component: EmailCover },
  { path: '/auth-verify-email-modern', component: EmailModern },

  // two steps
  { path: '/auth-two-steps-basic', component: BasicTwoSteps },
  { path: '/auth-two-steps-cover', component: TwoStepsCover },
  { path: '/auth-two-steps-boxed', component: TwoStepsBoxed },
  { path: '/auth-two-steps-modern', component: TwoStepsModern },

  // logout
  { path: '/auth-logout-basic', component: BasicLogout },
  { path: '/auth-logout-cover', component: LogoutCover },
  { path: '/auth-logout-boxed', component: LogoutBoxed },
  { path: '/auth-logout-modern', component: LogoutModern },

  //Reset Password
  { path: '/auth-reset-password-basic', component: BasicResetPassword },
  { path: '/auth-reset-password-cover', component: ResetPasswordCover },
  { path: '/auth-reset-password-boxed', component: ResetPasswordBoxed },
  { path: '/auth-reset-password-modern', component: ResetPasswordModern },

  //Create Password
  { path: '/auth-create-password-basic', component: BasicCreatePassword },
  { path: '/auth-create-password-cover', component: CreatePasswordCover },
  { path: '/auth-create-password-boxed', component: CreatePasswordBoxed },
  { path: '/auth-create-password-modern', component: CreatePasswordModern },

  // coming soon
  { path: '/pages-coming-soon', component: ComingSoon },

  // Error
  { path: '/pages-offline', component: Offline },
  { path: '/pages-404', component: Pages404 },

  // Maintenance
  { path: '/pages-maintenance', component: Maintenance },

  // authentication
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/register', component: Register },
];

export { authProtectedRoutes, publicRoutes };

