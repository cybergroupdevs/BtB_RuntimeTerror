import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    {console.log(props) }
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
