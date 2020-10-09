# react-native-pressbox

RN 点击封装

## Getting started

`$ npm install react-native-pressbox --save`

## Usage

```javascript
import PressBox from 'react-native-pressbox';

<PressBox onSingleTap={() => {}} onDoubleTap={() => {}} onLongTap={() => {}}>
  <Text>click</Text>
</PressBox>;
```

## Props

| name              | description  |
| ----------------- | ------------ |
| onSingleTap       | 单击         |
| onSingleTap       | 双击击       |
| onLongTap         | 长按         |
| LongTapDurationMs | 长按时间     |
| DoubleTapDelayMs  | 双击间隔时间 |
