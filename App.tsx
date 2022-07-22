import { NativeBaseProvider, StatusBar } from 'native-base';
import { Home } from './src/screens/Home'
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import {useFonts,Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      
      />
      { fontLoaded ? <Home /> : <Loading/>}
    </NativeBaseProvider>

  );
}

