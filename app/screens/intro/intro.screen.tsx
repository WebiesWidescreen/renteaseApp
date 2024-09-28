import { useLayoutEffect } from "react";
import { Text, View, Image, useColorScheme, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import  themeStyle  from './intro.styles';
import { Colors } from '@/constants/Colors';
import { isIntroDone } from '@/redux/common/common-actions';
import { isIntroCompleted } from '@/redux/common/common-selectors';

const IntroScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const theme = useColorScheme() ?? 'light';
  const subStyles = themeStyle(theme); 
  

  const isIntroStatus = useSelector(isIntroCompleted);
  useLayoutEffect(() => {
    if (isIntroStatus) {
      navigation.navigate('SIGNUP');
      // navigation.dispatch(StackActions.replace('HOMEINITIAL'));
    }
  }, [isIntroStatus]);

  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('@/assets/images/intial/slide.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('@/assets/images/intial/slide.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('@/assets/images/intial/slide.png'),
      backgroundColor: '#22bcb5',
    }
  ];

  const _renderItem = ({ item }: any) => {
    return (
      <View style={subStyles.slide}>
        <Text style={subStyles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={subStyles.text}>{item.text}</Text>
      </View>
    )
  };

  const _renderNextButton = () => {
    return (
      <View style={subStyles.buttonCircle}>
        <Icon
          name="arrow-forward"
          color={Colors[theme].background}
          size={24}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity style={subStyles.buttonCircle} onPress={() => dispatch(isIntroDone())}>
        <Icon
          name="checkmark"
          color={Colors[theme].background}
          size={24}
        />
      </TouchableOpacity>
    );
  };
  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} renderDoneButton={_renderDoneButton}
    renderNextButton={_renderNextButton}/>
  );
};
export default IntroScreen;
