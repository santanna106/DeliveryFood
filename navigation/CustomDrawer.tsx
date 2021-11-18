import React, { ReactNode } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer";

import { MainLayoutScreen } from "../src/screens/MainLayout/MainLayoutScreen";

import {
    COLORS,
    FONTS,
    constants,
    icons,
    dummyData,
    SIZES
} from '../src/constants';

import {styles} from './customDrawer.styles';

const Drawer = createDrawerNavigator();

interface CustomDrawerContentProsps {
    navigation:any
}


const CustomDrawerContent : React.FC<CustomDrawerContentProsps>= ({navigation} :CustomDrawerContentProsps) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex:1}}
        >
            <View
                style={{
                    flex:1,
                    paddingHorizontal:SIZES.radius
                }}
            >
                <View 
                    style={{
                        alignItems:'flex-start',
                        justifyContent:'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems:'center',
                            justifyContent:'center'
                            
                        }}
                        onPress={() => {navigation.closeDrawer()}}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor:COLORS.white
                            }} 
                        /> 
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{
                        flexDirection:'row',
                        marginTop:SIZES.radius,
                        alignItems:'center'
                    }}
                    onPress={() => console.log('Profile')}
                >
                    <Image source={dummyData.myProfile.profile_image}
                        style={{
                            width:50,
                            height: 50,
                            borderRadius:SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            marginLeft:SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color:COLORS.white,... FONTS.h3
                            }}
                        >{dummyData.myProfile.name}</Text>
                        <Text
                            style={{color:COLORS.white,... FONTS.body4}}
                        >View your profile</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}


interface CustomDrawerProps{
    children:ReactNode;
}

export const CustomDrawer : React.FC<CustomDrawerProps> = ({children}) => {
    return (
        <View style={styles.drawerContainer}
        >
            <Drawer.Navigator
                 sceneContainerStyle={{ backgroundColor:'transparent'}}
                 screenOptions={{drawerType: "slide",
                                 overlayColor:"trasparent" ,
                                 headerShown:false,
                                
                                 drawerStyle: {
                                    flex: 1,
                                    width: '65%',
                                    paddingRight:20,
                                    backgroundColor:'transparent',
                                    
                                  }  
                                    
                                              
                }}
                initialRouteName={"MainLayoutScreen"}
                drawerContent={props => {
                    return(
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
            >
                <Drawer.Screen name={"MainLayoutScreen"} component={MainLayoutScreen}/>
            </Drawer.Navigator>
        </View>
    )
}