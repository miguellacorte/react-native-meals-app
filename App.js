import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/mealsOverviewScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title:'Meals categories'}}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{title:'Meals Overview'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
