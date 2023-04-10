import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// use fonts 
import { useFonts } from 'expo-font';

const _layout = () => {

    // use fonts
    let [fontsLoaded] = useFonts({
        'Righteous-Regular': require('../assets/fonts/Righteous-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <>
            <Stack />
            <StatusBar style="light" />
        </>
    );
};

export default _layout;