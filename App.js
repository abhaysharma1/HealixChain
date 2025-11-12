import { ScreenContent } from './components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text } from 'react-native';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.js"><Text>Hellor</Text></ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
