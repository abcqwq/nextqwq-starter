const COMMON_COLORS = {
  '--color-white': 'hsl(0deg 0% 100%)',
  '--color-dark': 'hsl(230deg 20% 8%)',

  '--shadow-s': `inset 0 1px 2px hsl(0deg 0% 100% / 0.19),
                 0 1px 2px hsl(0deg 0% 0% / 0.19),      
                 0 2px 4px hsl(0deg 0% 0% / 0.08)`,

  '--shadow-m': `inset 0 1px 2px hsl(0deg 0% 100% / 0.31),
                 0 2px 4px hsl(0deg 0% 0% / 0.19),
                 0 4px 8px hsl(0deg 0% 0% / 0.08)`,

  '--shadow-l': `inset 0 1px 2px hsl(0deg 0% 100% / 0.44),
                 0 4px 6px hsl(0deg 0% 0% / 0.19),
                 0 6px 10px hsl(0deg 0% 0% / 0.08)`
};

export const LIGHT_COLORS = {
  '--color-bg-1': 'hsl(0deg 0% 90%)',
  '--color-bg-2': 'hsl(0deg 0% 95%)',
  '--color-bg-3': 'hsl(0deg 0% 100%)',

  '--color-text-1': 'hsl(0deg 0% 5%)',
  '--color-text-2': 'hsl(0deg 0% 30%)',

  ...COMMON_COLORS
};

export const DARK_COLORS = {
  '--color-bg-1': 'hsl(0deg 0% 0%)',
  '--color-bg-2': 'hsl(0deg 0% 5%)',
  '--color-bg-3': 'hsl(0deg 0% 10%)',

  '--color-text-1': 'hsl(0deg 0% 95%)',
  '--color-text-2': 'hsl(0deg 0% 70%)',

  ...COMMON_COLORS
};
