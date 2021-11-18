import React from 'react';
import {SafeAreaView,Text} from 'react-native';

import {
    COLORS,
    FONTS,
    constants,
    icons,
    dummyData,
    SIZES
} from '../../constants';

export const MainLayoutScreen = () => {
    return (
        <SafeAreaView  style={{flex:1,backgroundColor:COLORS.primary}}>
            <Text>MainLayout</Text>
        </SafeAreaView>
    );
}