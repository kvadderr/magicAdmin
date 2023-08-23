import React from 'react';
interface AmountProps {
  text: string;
  data: number;
}
const Amount = ({ text, data }: AmountProps) => {
  return (
    <div className="container-base">
      <div className="content-base">{text + ': ' + data.profit + '₽'}</div>
    </div>
  );
};
export default Amount;
