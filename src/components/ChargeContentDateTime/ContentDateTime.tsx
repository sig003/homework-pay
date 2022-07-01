import { DateTimePicker } from 'components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from 'styled-components';

const DateWrapper = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem;
`;

export default function ContentDateTime() {
  return (
    <>
      <div>
        <AccessTimeIcon color="primary" fontSize="medium" />
      </div>
      <DateWrapper>
        <DateTimePicker label="Start" />
        <DateTimePicker label="End" />
      </DateWrapper>
    </>
  );
}
