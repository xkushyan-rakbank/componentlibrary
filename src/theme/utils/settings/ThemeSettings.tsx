import ThemeRtlLayout from './ThemeRtlLayout'; // Adjust the path as necessary

type Props = {
  children: React.ReactNode;
};

const ThemeSettings = ({ children }: Props) => {
  return <ThemeRtlLayout>{children}</ThemeRtlLayout>;
};

export default ThemeSettings;
