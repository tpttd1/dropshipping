import React from 'react';

const ExchangeRate = () => {
  const exchangeRate = 3700
  return (
    <React.Fragment>
      <div className='flex items-center '>
        <span className='mr-1'>Tỉ giá:</span>
        <span className='font-medium text-orange-400'>1¥ = {exchangeRate.toLocaleString()} VNĐ</span>
      </div>
    </React.Fragment>
  );
};

export default ExchangeRate;
