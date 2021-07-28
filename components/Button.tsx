import { useTheme } from 'next-themes';

export const Button: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        darkMode
      </button>
    </>
  );
};
