import {durationUnits} from '../duration/units'

export const createDuration = (initialParams = null) => ({
  value: 0,
  unit: durationUnits.hour,
});
