

import React from 'react';
import { Box, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import { MdDeviceThermostat } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

const WeeklyForecastItem = ({ value, type }) => {
  let IconContent;

  if (type === 'temperature') {
    IconContent = <MdDeviceThermostat fontSize={'18px'} />;
  } else if (type === 'wind') {
    IconContent = (
      <AirIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />
    );
  } else if (type === 'cloud') {
    IconContent = (
      <CloudIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />
    );
  } else if (type === 'humidity') {
    IconContent = <WiHumidity fontSize={'18px'} />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '31px',
        color: 'rgba(255, 255, 255, .7)',
        gap: { xs: '3px', sm: '4px', md: '6px' },
        width: '100%',
      }}
    >
      {IconContent}
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: { xs: '12px', sm: '13px' },
          fontWeight: { xs: '400', sm: '600' },
          color: 'white',
          fontFamily: 'Poppins',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
