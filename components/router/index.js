import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10, Test11, Test12, Test13, Test14, Test15, Test16, Test17, Test18, Test19, Test20, Validate, Result, Splash, Thank, ThankSplash, Loading, Login, Register } from '../pages';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Test1' component={Test1} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Test2' component={Test2} options={{ headerShown: false, animation: 'slide_from_right', }} />
        <Stack.Screen name='Test3' component={Test3} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test4' component={Test4} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test5' component={Test5} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test6' component={Test6} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test7' component={Test7} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test8' component={Test8} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test9' component={Test9} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test10' component={Test10} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test11' component={Test11} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test12' component={Test12} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test13' component={Test13} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test14' component={Test14} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test15' component={Test15} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test16' component={Test16} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test17' component={Test17} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test18' component={Test18} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test19' component={Test19} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Test20' component={Test20} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='Validate' component={Validate} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Result' component={Result} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Thank' component={Thank} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='ThankSplash' component={ThankSplash} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false, animation: 'simple_push' }} />
    </Stack.Navigator>
  )
}

export default Router