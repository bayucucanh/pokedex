import React, {ReactNode} from 'react';
import {
  ScrollView,
  StyleSheet,
  ViewStyle,
  ScrollViewProps,
  StatusBar,
} from 'react-native';

interface ResponsiveViewProps extends ScrollViewProps {
  children: ReactNode;
  containerStyle?: ViewStyle;
}

const ResponsiveView: React.FC<ResponsiveViewProps> = ({
  children,
  containerStyle,
  ...scrollViewProps
}) => {
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle={'dark-content'} />

      <ScrollView
        contentContainerStyle={[styles.container, containerStyle]}
        {...scrollViewProps}>
        {children}
      </ScrollView>
    </>
  );
};

export default ResponsiveView;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    padding: 16,
    position: 'relative',
  },
});
