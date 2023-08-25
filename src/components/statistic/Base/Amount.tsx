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
  if (data === undefined) return <div>...</div>;
  return (
    <div className="container-base">
      {data?.profit !== undefined ? (
        <div className="content-base">{text + ': ' + (data?.profit != null ? data.profit : 0) + '₽'}</div>
      ) : (
        <div className="content-base">
          {text + ': ' + (data?.avgCount ? data?.avgCount : data?.avarageDeposit + '₽')}
        </div>
      )}
    </div>
  );
};
export default Amount;
