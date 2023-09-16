import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {styles} from '../style';

interface MyComponentProps extends TouchableOpacityProps {
  children: ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<MyComponentProps> = ({
  children,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={[styles.textButton, {...textStyle}]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
