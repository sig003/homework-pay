import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import { SvgIconProps } from '@mui/core/SvgIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addPhone, addPc, addPrint, addLight } from '/src/redux/Item';

interface ActionProps {
  name: string;
  icon: React.ComponentType<SvgIconProps>;
}

interface ActionsProps {
  actions: [ActionProps];
}

export default function AddItemSpeedDial({ actions }: ActionsProps) {
  const dispatch = useDispatch();

  const onPhone = () => dispatch(addPhone());
  const onPc = () => dispatch(addPc());
  const onPrint = () => dispatch(addPrint());
  const onLight = () => dispatch(addLight());

  //const { item } = useSelector(state => state);
  //console.log(item);
  const defaultValue = {
    name: 'no data',
    icon: <DoNotDisturbAltIcon />,
  };

  const handleClickItem = (name: string) => {
    if (name === 'Phone') {
      onPhone();
    } else if (name === 'Pc') {
      onPc();
    } else if (name === 'Print') {
      onPrint();
    } else {
      onLight();
    }
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
          actions.map((action: ActionProps) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleClickItem(action.name)}
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
