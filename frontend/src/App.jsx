import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import '/src/index.css'; 
import UserDashboard from './pages/userDashboard'


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/userDashboard" element={<UserDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
