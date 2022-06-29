import { useSelector, useDispatch } from 'react-redux';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import styled from 'styled-components';
import { removeItem } from '/src/redux/item';

interface RootStateProps {
  item: string[];
}

const ContentsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 2rem;
`;

export default function ChargeContentElectricItems() {
  const dispatch = useDispatch();

  const handleDelete = label => {
    dispatch(removeItem(label));
  };
  const item = useSelector((state: RootStateProps) => state.item);
  //console.log(item);
  return (
    <>
      <ContentsWrapper>
        {item.map((list: string) => {
          if (list === 'pc') {
            return (
              <Chip label="Pc" onDelete={() => handleDelete('pc')} key={list} />
            );
          } else if (list === 'print') {
            return (
              <Chip
                label="Print"
                onDelete={() => handleDelete('print')}
                key={list}
              />
            );
          } else if (list === 'phone') {
            return (
              <Chip
                label="Phone"
                onDelete={() => handleDelete('phone')}
                key={list}
              />
            );
          } else if (list === 'light') {
            return (
              <Chip
                label="Light"
                onDelete={() => handleDelete('light')}
                key={list}
              />
            );
          }
        })}
      </ContentsWrapper>
    </>
  );
}
