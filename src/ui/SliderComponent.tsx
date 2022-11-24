import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 10,
    label: '3',
  },
  {
    value: 20,
    label: '6',
  },
  {
    value: 40,
    label: '9',
  },
  {
    value: 60,
    label: '12',
  },
  {
    value: 100,
    label: '50',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function SliderComponent() {
  return (
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        // marks={marks}
        valueLabelDisplay="on"
      />
  );
}

export default SliderComponent;
