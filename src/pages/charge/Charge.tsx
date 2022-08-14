import styled from 'styled-components';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {
  ChargeContentDateTime,
  AddItemSpeedDial,
  ChargeContentElectricItems,
  ChargeContentFoodItems,
  Receipt,
} from 'components';
import {
  electricActions,
  foodActions,
} from 'components/ChargeContentActions/ContentActions';

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 834px) {
    flex-direction: column;
    justifi-content: center;
    align-items: center;
    min-height: 1350px;
  }
`;

const ContentsBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  width: 70rem;
  @media screen and (max-width: 834px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  min-width: 660px;
  height: 10rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  @media screen and (max-width: 1000px) {
    width: 600px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    min-width: 350px;
    padding: 10px;
  }
`;

const ContentsRightBox = styled.div`
  width: 20rem;
  height: 39rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  margin-top: 5rem;
  @media screen and (max-width: 834px) {
    margin-top: 1rem;
  }
`;

function Charge() {
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
            <div>
              <ChargeContentFoodItems />
            </div>
            <AddItemSpeedDial actions={foodActions} />
          </ContentBox>
        </ContentsBoxWrapper>
        <ContentsRightBox>
          <Receipt />
        </ContentsRightBox>
      </ContentsWrapper>
    </>
  );
}

export default Charge;
