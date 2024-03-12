// rtl
// emotion
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// @mui
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const ThemeRtlLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default ThemeRtlLayout;
