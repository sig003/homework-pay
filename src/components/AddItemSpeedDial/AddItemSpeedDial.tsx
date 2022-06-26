import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

export default function AddItemSpeedDial({ actions }) {
  const defaultValue = {
    name: 'no data',
    icon: <DoNotDisturbAltIcon />,
  };

  return (
    <>
      <SpeedDial
        ariaLabel="Add Item"
        FabProps={{ size: 'small' }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions ? (
          actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))
        ) : (
          <SpeedDialAction
            key={defaultValue.name}
            icon={defaultValue.icon}
            tooltipTitle={defaultValue.name}
          />
        )}
      </SpeedDial>
    </>
  );
}
