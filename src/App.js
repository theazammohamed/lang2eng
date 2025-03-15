import './App.scss';
import AppHeader from './AppHeader';
import TranslateBox from './components/TranslateBox';

function App() {
  return (
    <>
      <div className='landing'>
        <AppHeader/>
        <TranslateBox/>
      </div>
      <div className='onTranslated'>

      </div>
    </>
  );
}

export default App;
