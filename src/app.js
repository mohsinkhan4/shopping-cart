import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'emotion-theming';

import theme from './index.theme';
import List from './components/list'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <List title="Shopping List"></List>
            </div>
        </ThemeProvider>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));