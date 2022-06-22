import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const ContentsWrapper = styled.div`
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
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

function Charge() {
  return (
    <>
      <ContentsWrapper>
        <ContentBox>
          <div>
            <AccessTimeIcon color="primary" fontSize="medium" />
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
      </ContentsWrapper>
    </>
  );
}

export default Charge;
