import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import GetDeviceInfo from "./pages/GetDeviceInfo.jsx";
import GetDeviceID from "./pages/GetDeviceID.jsx";
import UpdateEMVConfig from "./pages/UpdateEMVConfig.jsx";
import UpdateDeviceFirmware from "./pages/UpdateDeviceFirmware.jsx";
import SwitchToSerial from "./pages/SwitchToSerial.jsx";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-device-info" element={<GetDeviceInfo />} />
            <Route path="/get-device-id" element={<GetDeviceID />} />
            <Route path="/update-emv-config" element={<UpdateEMVConfig />} />
            <Route path="/update-device-firmware" element={<UpdateDeviceFirmware />} />
            <Route path="/switch-to-serial" element={<SwitchToSerial />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;