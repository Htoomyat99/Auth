import {View, Text} from 'react-native';
import React from 'react';
import CustomInput from './src/components/CustomInput/CustomInput';
import CustomButton from './src/components/CustomButton/CustomButton';

const App = () => {
  return (
    <View>
      <CustomInput />
      <CustomButton />
    </View>
  );
};

export default App;
