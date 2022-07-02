import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Receipt() {
  const item = useSelector(state => state.item);

  const ReceiptWrapper = styled.div`
    diplay: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const Dash = styled.div`
    border-bottom: 1px dashed hsl(0, 0%, 0%);
    width: 90%;
    margin: 1rem 1rem 1rem 1rem;
  `;

  return (
    <>
      <ReceiptWrapper>
        <h2>RECEIPT</h2>
        <Dash />
        {item.map(list => {
          return <div key={list}>{list}</div>;
        })}
        <Dash />
      </ReceiptWrapper>
    </>
  );
}
