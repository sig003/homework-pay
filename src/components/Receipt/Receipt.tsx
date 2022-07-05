import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Receipt() {
  const item = useSelector(state => state.item);

  const ReceiptWrapper = styled.div`
    diplay: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 800px;
  `;

  const Dash = styled.div`
    border-bottom: 1px dashed hsl(0, 0%, 0%);
    width: 90%;
    margin: 1rem 1rem 1rem 1rem;
  `;

  const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  `;

  const Total = styled.div`
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  `;

  return (
    <>
      <ReceiptWrapper>
        <h2>RECEIPT</h2>
        <Dash />
        {item.map((list: string) => {
          return (
            <Item key={list}>
              <span>{list}</span>
              <span>$12,000</span>
            </Item>
          );
        })}
        <Dash />
        <Total>Total</Total>
      </ReceiptWrapper>
    </>
  );
}
