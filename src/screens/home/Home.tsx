import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Linking,
  ScrollView,
} from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from '../../stores/UIStore';
import { codePushConfig } from '../../utils/code-push';
import { COUNTER, IScreen } from '../../screens';
import { Card } from '../../components/card/Card';
import firebase from 'react-native-firebase';

import { getVar } from 'react-native-ueno-css-modules';
import { normalize } from '../../helpers/normalize.js';

const s = require('./Home.scss');

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {
  static get options() {
    return {
      drawBehind: true,
      topBar: {
        barStyle: 'default' | 'black',
        title: {
          text: 'Home',
          color: 'white',
        },
        drawBehind: true,
        height: 70, // TopBar height in dp
        visible: true,

        background: {
          color: '#242A37',
          translucent: true,
          blur: false,
        },
        backButton: {
          color: 'red',
        },
        hideOnScroll: true,
      },
      bottomTab: {
        text: 'Home',

        badgeColor: 'red',
        testID: 'bottomTabTestID',
        icon: require('../../assets/Home.png'),
        iconColor: '#979191',
        textColor: '#979191',
        selectedTextColor: '#F54B64',
        selectedIconColor: '#F54B64',
        fontSize: normalize(10),
      },
      bottomTabs: {
        elevation: 8, // BottomTabs elevation in dp
        titleDisplayMode: 'alwaysShow', // Sets the title state for each tab.
      },
    };
  }

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COUNTER,
      },
    });
  }

  public drawer = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  public _goToURL = () => {
    Linking.openURL('https://github.com/hmdevelop/rigel-app');
  }

  public render() {
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    const unitId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/2934735716'
        : 'ca-app-pub-3940256099942544/6300978111';
    return (
      <ScrollView
        style={s.host}
        contentContainerStyle={{ alignItems: 'center' }}
        testID='HOME_SCREEN'
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    width: 300,
    height: 100,
  },
});
