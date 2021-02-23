import Component from './component';
import DarkThemeProvider from './dark-theme-context';


const App = () => {
  return (
    <DarkThemeProvider>
      <Component/>
      </DarkThemeProvider>
  );
}

export default App;