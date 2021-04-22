import 'react-native-gesture-handler';
import React from 'react';

import Navigations from "./routes/route"
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
export default function App() {
  return (
           <Navigations/>
  );
}

