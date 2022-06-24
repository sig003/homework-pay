import styled from 'styled-components';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { ChargeContentDateTime } from '/src/components';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

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
            <div>Contents</div>
            <SpeedDial
              ariaLabel="Add Item"
              FabProps={{ size: 'small' }}
              icon={<SpeedDialIcon />}
              direction="left"
            >
              {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </ContentBox>
          <ContentBox>
            <div>
              <FastfoodIcon color="primary" fontSize="medium" />
            </div>
            <div>Contents</div>
            <SpeedDial
              ariaLabel="Add Item"
              FabProps={{ size: 'small' }}
              icon={<SpeedDialIcon />}
              direction="left"
            >
              {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </ContentBox>
        </ContentsBoxWrapper>
        <ContentsRightBox>RECEIPIT</ContentsRightBox>
      </ContentsWrapper>
    </>
  );
}

export default Charge;
