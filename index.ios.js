// index.ios.js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import ARKit from 'react-native-arkit';
export default class App extends Component {
  componentDidMount() {
    // add a 3D box into the scene (unit in meter)
    this.arkit.addBox({ x: 0, y: 0, z: 0, width: 0.1, height: 0.1, length: 0.1 });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          ref={arkit => this.arkit = arkit}
          style={{ flex: 1 }}
          debug // debug mode will show feature points detected and 3D axis
          planeDetection // turn on plane detection
          lightEstimation // turn on light estimation
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('MyFirstARKitApp', () => App);
