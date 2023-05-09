import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10, Validate, Result, Splash, Thank, ThankSplash, Loading, Login, Register } from '../pages';
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
        <Stack.Screen name='Validate' component={Validate} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Result' component={Result} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Thank' component={Thank} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='ThankSplash' component={ThankSplash} options={{ headerShown: false, animation: 'simple_push' }} />
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false, animation: 'simple_push' }} />
    </Stack.Navigator>
  )
}

export default Router