import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import BusinessInfoSystems from "./frontend/subjects/BusinessInfoSystems/BusinessInfoSystems";
import Grid from "./frontend/subjects/Grid/Grid";
import Urs from "./frontend/subjects/Urs/Urs";
import Multimedija from "./frontend/subjects/Multimedija/Multimedija";
import Medicinski from "./frontend/subjects/Medicinski/Medicinski";
import Paralelno from "./frontend/subjects/Paralelno/Paralelno";
import LandingPage from "./LandingPage";
import QRCodeScanner from "./frontend/scanner/QRCodeScanner";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/business-info-systems"
          element={<BusinessInfoSystems />}
        />{" "}
        {/* Dodano */}
        <Route path="/grid-computer-systems" element={<Grid />} />{" "}
        {/* Dodano */}
        <Route path="/urs" element={<Urs />} /> {/* Dodano */}
        <Route path="/multimedija" element={<Multimedija />} /> {/* Dodano */}
        <Route path="/medicinski" element={<Medicinski />} /> {/* Dodano */}
        <Route path="/paralelno" element={<Paralelno />} /> {/* Dodano */}
        <Route path="/scanner" element={<QRCodeScanner />} /> {/* Dodano */}
      </Routes>
    </Router>
  );
};

export default App;


/*
// src/App.jsx
import React from "react";
import Html5QrcodePlugin from "./scanner/Html5QrcodePlugin";

const App = () => {
  // Callback funkcija koja obrađuje rezultate skeniranja
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("Decoded text: ", decodedText); // Ispisuje podatke iz QR koda
  };

  return (
    <div className="App">
      <h1>QR Scanner</h1>
      <Html5QrcodePlugin
        fps={10} // Frames per second
        qrbox={250} // Veličina okvira za skeniranje
        disableFlip={false} // Omogućava ili onemogućava flip kamere
        qrCodeSuccessCallback={onNewScanResult} // Callback za uspješan rezultat
        qrCodeErrorCallback={(error) => console.error("QR Error: ", error)} // Callback za greške
      />
    </div>
  );
};

export default App;
*/