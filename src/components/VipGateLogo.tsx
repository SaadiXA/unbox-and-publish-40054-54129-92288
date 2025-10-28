import React from 'react';
import logo from '../assets/vip-gate-logo.png';

const VipGateLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <img src={logo} alt="VIP Gate Logo" className={className} />
  );
};

export default VipGateLogo;
