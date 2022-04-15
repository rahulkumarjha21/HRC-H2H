import './App.css';
import Header from './components/Header';
import { Box , makeStyles, Toolbar } from '@material-ui/core';
import Footer from './components/Footer';
import Main from './components/Main';
const useStyles=makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    backgroundColor: '#2A3E4C'
  }
}));
function App() {
  const classes=useStyles();
  return (
    <Box className={classes.main}>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </Box>
  );
}
export default App;