
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

interface ChargeDialogProps {
  open: boolean;
  onClose: () => void;
}

interface RootStateProps {
  item: string[];
}

interface PriceProps {
  [index: string]: number;
}

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
  @media screen and (max-width: 600px) {
    width: 300px;
  }
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

const ChargedStamp = styled.div`
  border: 4px dashed red;
  border-radius: 90%;
  width: 100px;
  height: 100px;
  color: red;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  top: 40%;
  left: 40%;
  animation-delay: 1s;
  @media screen and (max-width: 600px) {
    left: 35%;
  }
`;

export default function ChargeDialog(props: ChargeDialogProps) {
  const { onClose, open } = props;
  const item = useSelector((state: RootStateProps) => state.item);
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
    let sum = 0;
    item.map((list: string) => {
      sum = sum + price[list];
    });
    setTotalSum(sum);
  }, [item]);

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
          <ChargedStamp>Charged</ChargedStamp>
          <span>Total</span>
          <span>$ {totalSum}</span>
        </Total>
      </ReceiptWrapper>
    </Dialog>
  );
}