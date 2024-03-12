// theme
import palette from '../../palette'
//
import { ThemeColorPresetsValue } from './Types'

// ----------------------------------------------------------------------

const themePalette = palette.light
export const presets = [
  // DEFAULT
  {
    name: 'default',
    ...themePalette.primary,
  },
]
export const defaultPreset = presets[0]

export const presetsOption = presets.map((color) => ({
  name: color.name,
  value: color.main,
}))
export function getPresets(key: ThemeColorPresetsValue) {
  return {
    default: defaultPreset,
  }[key]
}
