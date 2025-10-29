import {
  EmailPerformanceData,
  EmployeePerformanceData,
  MessageData,
  PopularEventsData,
  ProductOrdersData,
  ProductsStatisticsData,
  PurchaseRequestData,
  RecentPayrollData,
  UpcomingBirthdayData,
  UpcomingInterviewData,
  UpcomingScheduledData,
  activeFriendsData,
  storyData,
  widgetsData,
  widgetsData2,
} from './dashboard';

// Chat
import {
  ChatUser,
  ContactList,
  Documents,
  RecentChats,
  RecentFind,
} from './chat';

// Email
import { MailList } from './mailbox';

// Calendar
import { CalenderCategories, Events } from './calendar';

// Ecommerce
import {
  ListViewData,
  OrderListData,
  ProductGridViewData,
  ProductReviewsData,
  SellersData,
  ShoppingCartData,
} from './ecommerce';

// HR Management
import {
  AttendanceData,
  DepartmentsListData,
  EmployeeListData,
  EmployeeSalaryData,
  EstimatesData,
  ExpensesData,
  HolidaysData,
  LeaveManageEmployeeData,
  LeaveManageHRData,
  MainAttendanceData,
  PaymentsData,
} from './hrmanagement';

// Notes
import { NotesData } from './notes';

// Social Media
import { EventData, FriendsData } from './socialMedia';

// Invoice
import { InvoiceList } from './invoice';

// Users
import { GridViewData, UserListViewData } from './users';

// table
import { basic, reactTableData } from './table';

// pricing
import { cardData, pricingData } from './pages';

export {
  AttendanceData,
  // Calendar
  CalenderCategories, ChatUser,
  // Chat
  ContactList,
  // HR Management
  DepartmentsListData, Documents, EmailPerformanceData, EmployeeListData,
  // HR Dashborad
  EmployeePerformanceData, EmployeeSalaryData,
  EstimatesData, EventData, Events, ExpensesData,
  // Social Media
  FriendsData, GridViewData, HolidaysData,
  // Invoice
  InvoiceList, LeaveManageEmployeeData,
  LeaveManageHRData,
  // Ecommerce
  ListViewData,
  // Email
  MailList, MainAttendanceData, MessageData,
  // Notes
  NotesData, OrderListData, PaymentsData, PopularEventsData, ProductGridViewData, ProductOrdersData, ProductReviewsData, ProductsStatisticsData,
  PurchaseRequestData, RecentChats,
  RecentFind, RecentPayrollData, SellersData, ShoppingCartData, UpcomingBirthdayData, UpcomingInterviewData,
  UpcomingScheduledData,
  // Users
  UserListViewData,
  // Social Media Dashborad
  activeFriendsData,
  // table
  basic, cardData,
  // pricing
  pricingData, reactTableData, storyData, widgetsData,
  widgetsData2
};

