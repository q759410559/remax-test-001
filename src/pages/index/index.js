import * as React from 'react';
import {View} from 'remax/wechat';

export default () => {
  function handleFooClick(event) {
    console.log('bar')
  }
  function handleBarClick() {
    console.log('foo')
  }
  return (
      <View>
        <View onClick={handleBarClick} style={{padding: '16', background: '#f44'}}>
          bar
          <View onClick={handleFooClick}  style={{padding: '16', background: '#00c6ff'}}>
            foo
          </View>
        </View>
      </View>
  );
};
