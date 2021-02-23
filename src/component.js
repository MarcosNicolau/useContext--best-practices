import { useDarkThemeContext } from './dark-theme-context';
import './index.css';


const Component = () => {
  const darkMode = useDarkThemeContext();
  const styles = {
    height: '100vh',
    backgroundColor: darkMode.theme ? '#262626' : '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={styles}>
      <button onClick={darkMode.toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default Component;
