import { useColorScheme, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Colors } from '@/constants/Colors';

const CustomDrawerContent = (props: any) => {
    const theme = useColorScheme() ?? 'light';
    return (
        <DrawerContentScrollView {...props} style={styles.drawerContainer}>
            <View style={styles.header}>
                <Image source={require('@/assets/images/menu/menu.png')} />
            </View>
            <View style={styles.divider} />
            {/* <DrawerItemList {...props}  activeTintColor="#000" inactiveTintColor="#333"/> */}
            {props.state.routes.map((route: any, index: any) => (
                <TouchableOpacity
                    key={index}
                    style={props.state.index === index ? styles.activeContainer : styles.inActiveContainer}
                    onPress={() => {
                        props.navigation.navigate(route.name);
                    }}
                >
                    <Text
                        style={props.state.index === index ? styles.activeContainerText : styles.inActiveContainerText}
                    >
                        {route.name}
                    </Text>
                </TouchableOpacity>
            ))}
            <View style={styles.divider} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContainer: {
        marginHorizontal: 10,
        backgroundColor: Colors.light.surface, // Background color of the drawer
    },
    header: {
        padding: 10, // Background color of the header
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: Colors.light.secondary,
        marginVertical: 5, // Space between items
    },
    drawerItem: {
        padding: 10,
    },
    activeContainer: {
        padding: 10,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: Colors.light.secondary,
    },
    inActiveContainer: {
        padding: 10,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    activeContainerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.light.primary,
    },
    inActiveContainerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.light.primary,
    }
});

export default CustomDrawerContent;