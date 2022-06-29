import { useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';

interface RootStateProps {
  item: string[];
}

export default function ChargeContentElectricItems() {
  const handleDelete = () => {
    console.log(11);
  };
  const item = useSelector((state: RootStateProps) => state.item);
  console.log(item);
  return (
    <>
      <div>
        {item.map((list: string) => {
          if (list === 'pc') {
            return <Chip label="Pc" onDelete={handleDelete} key={list} />;
          } else if (list === 'print') {
            return <Chip label="Print" onDelete={handleDelete} key={list} />;
          } else if (list === 'phone') {
            return <Chip label="Phone" onDelete={handleDelete} key={list} />;
          } else if (list === 'light') {
            return <Chip label="Light" onDelete={handleDelete} key={list} />;
          }
        })}
      </div>
    </>
  );
}
