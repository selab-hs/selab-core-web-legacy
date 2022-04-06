export const deviceSize = {
  mobile: 768,
  tablet: 1023,
};
export const mediaQuery = {
  mobile: `screen and (max-width: ${deviceSize.mobile}px)`,
  tablet: `screen and (min-width: ${deviceSize.mobile + 1}px and max-width: ${deviceSize.tablet})`,
  laptop: `screen and (min-width: 1024px)`,
};
