import React from 'react';
import { useSelector } from 'react-redux';

import './Alert.scss';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <div className='alert-inner'>
      {alerts !== null && alerts.length > 0 && alerts.map(item => (
        <div className="alert-item__box">
          <div key={item.id} className={`alert alert-${item.alertType} text-center`}>
            <span>{item.msg}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alert;
