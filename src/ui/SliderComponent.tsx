import Slider from '@mui/material/Slider';
interface SliderComponentProps {
  onSliderChange: (value:number | number[]) => void
}

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 50,
    label: '50',
  },
];

function SliderComponent( { onSliderChange } : SliderComponentProps ) {
  return (
      <Slider
        marks={marks}
        min={3}
        max={50}
        onChange={(_, value) => onSliderChange(value)}
        track={false}
      />
  );
}

export default SliderComponent;
