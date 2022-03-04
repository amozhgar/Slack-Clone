import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const userData = localStorage.getItem("");
    dispatch({
      type: actionTypes.SET_USER,
      user: JSON.parse(userData),
    });
  }, []);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>

            {/* React-Router -> Chat screen */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
