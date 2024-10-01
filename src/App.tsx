import React from 'react';
import LoadingComponent from "../src/Components/LoadingComponent"; // Import the loading component

const App: React.FC = () => {
  return (
    <div className="App">
      <LoadingComponent /> {/* This will handle the loading screen and transition */}
    </div>
  );
};

export default App;
