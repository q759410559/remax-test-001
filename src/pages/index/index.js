import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import VanGrid from '@vant/weapp/dist/grid'
import VanGridItem from '@vant/weapp/dist/grid-item'
import styles from './index.css';

export default () => {
  return (
      <View>
        <VanGrid>
          <VanGridItem icon="photo-o" text="文字" />
          <VanGridItem icon="photo-o" text="文字" />
          <VanGridItem icon="photo-o" text="文字" />
          <VanGridItem icon="photo-o" text="文字" />
        </VanGrid>

        <VanGrid>
          <VanGridItem icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
          <VanGridItem icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
          <VanGridItem icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
          <VanGridItem icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="文字" />
        </VanGrid>

        <VanGrid>
          <VanGridItem text="文字">
            <View slot="icon">
              <Image
                  style="width: 48px; height: 48px;"
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
              />
            </View>
          </VanGridItem>
          <VanGridItem text="文字">
            <View slot="icon">
              <Image
                  style="width: 48px; height: 48px;"
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
              />
            </View>
          </VanGridItem>
          <VanGridItem text="文字">
            <View slot="icon">
              <Image
                  style="width: 48px; height: 48px;"
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
              />
            </View>
          </VanGridItem>
          <VanGridItem text="文字">
            <View slot="icon">
              <Image
                  style="width: 48px; height: 48px;"
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
              />
            </View>
          </VanGridItem>
        </VanGrid>
      </View>
  );
};
