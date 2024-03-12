// ----------------------------------------------------------------------

type ColorVariants = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type ThemeModeValue = 'light' | 'dark';
export type ThemeDirectionValue = 'rtl' | 'ltr';
export type ThemeContrastValue = 'default' | 'bold';
export type ThemeLayoutValue = 'vertical' | 'horizontal' | 'mini';
export type ThemeColorPresetsValue = 'default';
export type ThemeStretchValue = boolean;
export type ThemeColorPresets =
  | 'default'
  | 'purple'
  | 'cyan'
  | 'blue'
  | 'orange'
  | 'red';
export type ThemeStretch = boolean;

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  themeLayout: ThemeLayoutValue;
  themeStretch: ThemeStretchValue;
  themeContrast: ThemeContrastValue;
  themeDirection: ThemeDirectionValue;
  themeColorPresets: ThemeColorPresetsValue;
};

export type SettingsContextProps = SettingsValueProps & {
  presetsColor: ColorVariants;
  presetsOption: {
    name: string;
    value: string;
  }[];

  // Mode
  onToggleMode: VoidFunction;
  onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Direction
  onToggleDirection: VoidFunction;
  onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDirectionByLang: (lang: string) => void;

  // Layout
  onChangeLayout: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Contrast
  onToggleContrast: VoidFunction;
  onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Color
  onChangeColorPresets: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Stretch
  onToggleStretch: VoidFunction;

  // Reset
  onResetSetting: VoidFunction;
};
