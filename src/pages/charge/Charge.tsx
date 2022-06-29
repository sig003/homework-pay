import styled from 'styled-components';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {
  ChargeContentDateTime,
  AddItemSpeedDial,
  ChargeContentElectricItems,
} from '/src/components';
import {
  electricActions,
  foodActions,
} from '/src/components/ChargeContentActions/ContentActions';
import { useSelector } from 'react-redux';

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentsBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
`;

const ContentBox = styled.div`
  width: 60rem;
  height: 10rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const ContentsRightBox = styled.div`
  width: 20rem;
  height: 34rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;

function Charge() {
  const item = useSelector(state => state.item);

  return (
    <>
      <ContentsWrapper>
        <ContentsBoxWrapper>
          <ContentBox>
            <ChargeContentDateTime />
          </ContentBox>
          <ContentBox>
            <div>
              <ElectricBoltIcon color="primary" fontSize="medium" />
            </div>
            <div>
              <ChargeContentElectricItems />
            </div>
            <AddItemSpeedDial actions={electricActions} />
          </ContentBox>
          <ContentBox>
            <div>
              <FastfoodIcon color="primary" fontSize="medium" />
            </div>
            <div>Contents</div>
            <AddItemSpeedDial actions={foodActions} />
          </ContentBox>
        </ContentsBoxWrapper>
        <ContentsRightBox>RECEIPIT {item}</ContentsRightBox>
      </ContentsWrapper>
    </>
  );
}

export default Charge;
