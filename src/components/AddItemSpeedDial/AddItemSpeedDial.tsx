import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function AddItemSpeedDial({ actions }) {
  return (
    <>
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
    </>
  );
}
