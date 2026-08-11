import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import ContextProvider from './context/Context';

function App() {

    const [extended, setExtended] = useState(false);

    return (
        <ContextProvider>

            <div className="app">

                <Sidebar
                    extended={extended}
                    setExtended={setExtended}
                />

                <Main extended={extended} />

            </div>

        </ContextProvider>
    );
}

export default App;