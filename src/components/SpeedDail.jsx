import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const actions = [
  { icon: <PermIdentityIcon />, name: 'ABOUT' },
  { icon: <CodeIcon />, name: 'TOP SKILLS' },
  { icon: <WorkIcon />, name: 'EXPERIENCE' },
  { icon: <SchoolIcon />, name: 'EDUCATION' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, margin: "auto", paddingLeft: "8px" }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute' }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            color='primary'
            sx={{ letterSpacing: "1rem"}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}