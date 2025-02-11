import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page31 from './Pages/page31';
import Page32 from './Pages/page32';
import Page33 from './Pages/page33';
import Page4 from './Pages/page4';


function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page31" element={<Page31/>}/>
        <Route path="/page32" element={<Page32/>}/>
        <Route path="/page33" element={<Page33/>}/>
        <Route path="/page4" element={<Page4/>}/>
      </Routes>
    </div>
  );
}

export default App;