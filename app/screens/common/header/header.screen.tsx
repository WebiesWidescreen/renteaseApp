import React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesome6, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CommonHeaderScreen = ({title}: any) => {
    const navigation = useNavigation<any>();
    return (
        <Appbar.Header style={{ backgroundColor: '#FEF7FF' }}>
            <Appbar.Action
                icon={() => (
                    <AntDesign
                        name="menu-fold"
                        size={25}
                    // color={Colors.theme.white}
                    />
                )}
                isLeading
                onPress={() => navigation.openDrawer()}
            />
            <Appbar.Content title={title} />
            <Appbar.Action
                icon={() => (
                    <FontAwesome6
                        name="circle-user"
                        size={24}
                    // color={Colors.theme.white}
                    />
                )}
                isLeading
            // onPress={goBackCheck}
            />
        </Appbar.Header>
    );
};
export default React.memo(CommonHeaderScreen);