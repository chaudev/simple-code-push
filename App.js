import React from 'react';
import {SafeAreaView, StatusBar, Text, Image} from 'react-native';
import {ErrorNotification} from 'green-native';

// Code Push
import codePush from 'react-native-code-push';

const MY_AVATAR = 'https://avatars.githubusercontent.com/u/73950683?v=4';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Image
        resizeMode="contain"
        source={{uri: MY_AVATAR}}
        style={{width: 100, height: 100, borderRadius: 9999}}
      />

      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        Nguyễn Phúc Bảo Châu
      </Text>

      <ErrorNotification
        marginVertical={10}
        text="ĐÃ PUSH THÀNH CÔNG"
        fontSize={16}
      />
    </SafeAreaView>
  );
};

// Code Push
export default codePush(App);
