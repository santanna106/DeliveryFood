import { COLORS } from './../src/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    drawerContainer : {
        flex:1,
        backgroundColor:COLORS.primary
    }
})

export const drawerStyle = {
    screenOptions: {
        drawerType: "slide"
    }
    
}