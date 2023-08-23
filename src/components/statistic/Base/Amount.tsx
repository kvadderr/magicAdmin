import React from 'react';
interface AmountProps {
  text: string;
  data:
    | {
        profit?: number;
        avgCount: number;
        avarageDeposit: number;
      }
    | undefined;
}
const Amount = ({ text, data }: AmountProps) => {
  return (
    <div className="container-base">
      {data?.profit ? (
        <div className="content-base">{text + ': ' + data?.profit + '₽'}</div>
      ) : (
        <div className="content-base">
          {text + ': ' + (data?.avgCount ? data?.avgCount : data?.avarageDeposit + '₽')}
        </div>
      )}
    </div>
  );
};
export default Amount;
