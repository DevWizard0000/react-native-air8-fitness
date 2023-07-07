import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Constants from 'expo-constants';
import 'react-native-gesture-handler'
const statusBarHeight = Constants.statusBarHeight;

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PaperProvider } from 'react-native-paper'
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context'

import Store from './redux/store'
import HomeScreen from './screens/home/index'
import ExerciseScreen from './screens/home/exercises/exercises'
import ExerciseDetailScreen from './screens/home/exercises/exercise.detail'

import WorkoutsScreen from './screens/home/workouts';
import WorkoutScreen from './screens/home/workouts/workout'

const Stack = createStackNavigator();

const App = () =>  {

  return (
    <Provider store={Store}>
      <PaperProvider>
        <SafeAreaProvider style={{paddingTop: statusBarHeight}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
              <Stack.Screen name="ExerciseList" options={{ headerShown: false }} component={ExerciseScreen} />
              <Stack.Screen name="Exercise" options={{ headerShown: false }} component={ExerciseDetailScreen} />

              <Stack.Screen name="Workouts" options={{ headerShown: false }} component={WorkoutsScreen} />
              <Stack.Screen name="Workout" options={{ headerShown: false }} component={WorkoutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          
          <StatusBar backgroundColor={'black'} />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;