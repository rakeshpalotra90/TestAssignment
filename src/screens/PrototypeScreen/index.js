import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Img} from '../../components/ImageComponent';
import {Colors} from '../../constants/colors';
import {globalStyles} from '../../constants/globalStyles';
import {IMAGES} from '../../constants/images';
import {STRING} from '../../constants/string';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

export const Prototype = () => {
  const [step, setStep] = useState(0);
  const onPressJoined = () => {
    setStep(step + 1);
    setTimeout(() => {
      setStep(2);
    }, 1000);
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>{STRING.HeadingText}</Text>
        <View style={styles.btnMainContainer}>
          {step !== 2 && (
            <TouchableOpacity
              style={styles.btnCotainer}
              onPress={onPressJoined}>
              <LinearGradient
                useAngle
                angle={45}
                angleCenter={{x: 0.5, y: 0.5}}
                colors={[
                  Colors.Begonia,
                  Colors.ElectricPink,
                  Colors.VioletsAreBlue,
                  Colors.UnitedNationsBlue,
                ]}
                style={styles.linearGradient}>
                {step === 0 && (
                  <Animatable.View>
                    <Img source={IMAGES.join} />
                  </Animatable.View>
                )}
                {step === 1 && (
                  <Animatable.View animation={'bounceIn'}>
                    <Img source={IMAGES.check} />
                  </Animatable.View>
                )}
              </LinearGradient>
            </TouchableOpacity>
          )}
          {step === 2 && (
            <Animatable.Text
              duration={1200}
              animation={'fadeIn'}
              style={[styles.buttonText, styles.joinedtext]}>
              {STRING.Joined}
            </Animatable.Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
