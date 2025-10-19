const COMMON_COLORS = {
  '--color-white': 'hsl(0deg 0% 100%)',
  '--color-dark': 'hsl(230deg 20% 8%)'
};

export const LIGHT_COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-background': 'hsl(0deg 0% 100%)',

  ...COMMON_COLORS
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0deg 0% 100%)',
  '--color-background': 'hsl(230deg 20% 8%)',

  ...COMMON_COLORS
};
