import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Router from './src/router';

const App = () => {

  return (
    <NavigationContainer>
      <Router />
      <Toast />
    </NavigationContainer>
  )
}

export default App;