import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { ChargeDialog } from 'components';

interface PriceProps {
  [index: string]: number;
}

interface RootStateProps {
  item: string[];
}

export default function Receipt() {
  const [open, setOpen] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const item = useSelector((state: RootStateProps) => state.item);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const ReceiptMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 680px;
  `;

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

  useEffect(() => {
    if (totalSum > 0) {
      setButtonDisabled(false);
    }
  }, [totalSum]);

  const handleClickCharge = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ReceiptMainWrapper>
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
        <Button
          variant="contained"
          style={{ textTransform: 'none' }}
          onClick={handleClickCharge}
          disabled={buttonDisabled}
        >
          Charge
        </Button>
        <ChargeDialog
          open={open}
          onClose={handleClose}
        />
      </ReceiptMainWrapper>
    </>
  );
}
