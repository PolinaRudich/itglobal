
import { Transition } from 'react-transition-group';
import './App.css'
import { Menu } from './components/menu/Menu';
import { useState, useRef } from 'react';

function App() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const closeMenu = () => {
    setInProp(false)
  }
  return (
    <div className="App" onClick={() => !inProp && setInProp(true)}>
      {!inProp && <>
        Click anywhere to Enter
      </>}
      <Transition nodeRef={nodeRef} in={inProp} timeout={500}>
        {() => (
          <Menu in={inProp} closeMenu={closeMenu} />
        )}
      </Transition>
    </div>
  )
}

export default App
