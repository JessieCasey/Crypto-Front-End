import Landing from "./pages/landing/Landing";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </>
    );
};

export default App;