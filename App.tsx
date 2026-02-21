import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}
