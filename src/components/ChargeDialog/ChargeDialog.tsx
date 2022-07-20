
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

interface ChargeDialogProps {
  open: boolean;
  onClose: () => void;
}

interface PriceProps {
  [index: string]: number;
}

export default function ChargeDialog(props: ChargeDialogProps) {
  const { onClose, open } = props;
  const item = useSelector(state => state.item);
  const [totalSum, setTotalSum] = useState(0);

  const price: PriceProps = {
    phone: 30,
    pc: 50,
    light: 90,
    print: 10,
    coffee: 100,
    dining: 200,
    desert: 150,
    drink: 120,
  };

  useEffect(() => {
    item.map((list: string) => {
      setTotalSum(totalSum + price[list]);
    });
  }, [item]);

  const Dash = styled.div`
    border-bottom: 1px dashed hsl(0, 0%, 0%);
    width: 92%;
    margin: 1rem 1rem 1rem 1rem;
  `;

  const ReceiptWrapper = styled.div`
    diplay: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
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

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <ReceiptWrapper>
        <h2>RECEIPT</h2>
        <Dash />
        {item.map((list: string) => {
          return (
            <Item key={list}>
              <span>{list}</span>
              <span>$ {price[list]}</span>
            </Item>
           );
         })}
       <Dash />
       <Total>
         <span>Total</span>
         <span>$ {totalSum}</span>
        </Total>
     </ReceiptWrapper>
  </Dialog>
  );
}