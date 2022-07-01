import { useSelector, useDispatch } from 'react-redux';
import Chip from '@mui/material/Chip';
import styled from 'styled-components';
import { removeItem } from 'redux/item';

interface RootStateProps {
  item: string[];
}

const ContentsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 2rem;
`;

export default function ChargeContentFoodItems() {
  const dispatch = useDispatch();

  const handleDelete = (label: string) => {
    dispatch(removeItem(label));
  };
  const item = useSelector((state: RootStateProps) => state.item);
  //console.log(item);
  return (
    <>
      <ContentsWrapper>
        {item.map((list: string) => {
          if (list === 'coffee') {
            return (
              <Chip
                label="Coffee"
                onDelete={() => handleDelete('coffee')}
                key={list}
              />
            );
          } else if (list === 'dining') {
            return (
              <Chip
                label="Dining"
                onDelete={() => handleDelete('dining')}
                key={list}
              />
            );
          } else if (list === 'desert') {
            return (
              <Chip
                label="Desert"
                onDelete={() => handleDelete('desert')}
                key={list}
              />
            );
          } else if (list === 'drink') {
            return (
              <Chip
                label="Drink"
                onDelete={() => handleDelete('drink')}
                key={list}
              />
            );
          }
        })}
      </ContentsWrapper>
    </>
  );
}
