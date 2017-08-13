export interface IFilter {
  name: string;
  value: number;
  unit: string;
  min: number;
  max: number;
}

export const filters: IFilter[] = [
  {
    name: 'blur',
    value: 0,
    unit: 'px',
    min: 0,
    max: 10
  },
  {
    name: 'brightness',
    value: 100,
    unit: '%',
    min: 0,
    max: 200
  },
  {
    name: 'contrast',
    value: 100,
    unit: '%',
    min: 0,
    max: 200
  },
  {
    name: 'grayscale',
    value: 0,
    unit: '%',
    min: 0,
    max: 100
  },
  {
    name: 'hue-rotate',
    value: 0,
    unit: 'deg',
    min: 0,
    max: 360
  },
  {
    name: 'invert',
    value: 0,
    unit: '%',
    min: 0,
    max: 100
  },
  {
    name: 'opacity',
    value: 100,
    unit: '%',
    min: 0,
    max: 100
  },
  {
    name: 'saturate',
    value: 100,
    unit: '%',
    min: 0,
    max: 2000
  },
  {
    name: 'sepia',
    value: 0,
    unit: '%',
    min: 0,
    max: 100
  }
];
