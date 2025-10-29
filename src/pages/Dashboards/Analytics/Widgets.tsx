import { Cog, Coins, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

enum IType {
  PurchaseRequest = 'PurchaseRequest',
  OtherPurchaseRequest = 'OtherPurchaseRequest',
  Consignment = 'Consignment',
  Payment = 'Payment',
}

const Widgets = () => {
  const navigate = useNavigate();

  const handleViewDetail = (type: IType) => {
    if (type === IType.PurchaseRequest) {
      navigate('apps-purchase-request');
      return;
    }
    if (type === IType.OtherPurchaseRequest) {
      navigate('apps-other-purchase-request');
      return;
    }
    if (type === IType.Consignment) {
      navigate('apps-consignment-list');
      return;
    }
    navigate('apps-payment-list');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        className="cursor-pointer bg-green-100 dark:bg-green-500/20 card group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden shadow-md hover:shadow-none"
        onClick={() => handleViewDetail(IType.PurchaseRequest)}
      >
        <div className="card-body">
          <p className="text-slate-500 dark:text-slate-200">Mua hàng hộ</p>
          <div className="flex items-center justify-between">
            <div>
              <CountUp end={15876} className="counter-value" />
            </div>
            <div className="flex items-center justify-center size-12 bg-green-500 rounded-md text-15 text-green-50">
              <Users />
            </div>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer bg-orange-100 dark:bg-orange-500/20 card group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden shadow-md hover:shadow-none"
        onClick={() => handleViewDetail(IType.OtherPurchaseRequest)}
      >
        <div className="card-body">
          <p className="text-slate-500 dark:text-slate-200">Mua hàng hộ khác</p>
          <div className="flex items-center justify-between">
            <div>
              <CountUp end={103.15} decimals={2} className="counter-value" />k
            </div>
            <div className="flex items-center justify-center size-12 bg-orange-500 rounded-md text-15 text-orange-50">
              <Cog />
            </div>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer bg-sky-100 dark:bg-sky-500/20 card group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden shadow-md hover:shadow-none"
        onClick={() => handleViewDetail(IType.Consignment)}
      >
        <div className="card-body">
          <p className="text-slate-500 dark:text-slate-200">Ký gửi</p>
          <div className="flex items-center justify-between">
            <div>
              <CountUp end={15876} className="counter-value" />
            </div>
            <div className="flex items-center justify-center size-12 rounded-md bg-sky-500 text-15 text-sky-50">
              <Coins />
            </div>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer bg-purple-100 dark:bg-purple-500/20 card group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden shadow-md hover:shadow-none"
        onClick={() => handleViewDetail(IType.Payment)}
      >
        <div className="card-body">
          <p className="text-slate-500 dark:text-slate-200">Thanh toán hộ</p>
          <div className="flex items-center justify-between">
            <div>
              <CountUp end={15876} className="counter-value" />
            </div>
            <div className="flex items-center justify-center size-12 bg-purple-500 rounded-md text-15 text-purple-50">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
