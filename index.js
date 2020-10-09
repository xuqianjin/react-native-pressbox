import React, { Component } from 'react';
import { LongPressGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default class PressBox extends Component {
  doubleTapRef = React.createRef();
  _onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      this.props.onLongTap && this.props.onLongTap();
    }
  };

  _onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      this.props.onSingleTap && this.props.onSingleTap();
    }
  };

  _onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      this.props.onDoubleTap && this.props.onDoubleTap();
    }
  };

  render() {
    const { LongTapDurationMs, DoubleTapDelayMs } = this.props;

    return (
      <LongPressGestureHandler
        onHandlerStateChange={this._onHandlerStateChange}
        minDurationMs={LongTapDurationMs}
      >
        <TapGestureHandler onHandlerStateChange={this._onSingleTap} waitFor={this.doubleTapRef}>
          <TapGestureHandler
            ref={this.doubleTapRef}
            onHandlerStateChange={this._onDoubleTap}
            maxDelayMs={DoubleTapDelayMs}
            numberOfTaps={2}
          >
            {this.props.children}
          </TapGestureHandler>
        </TapGestureHandler>
      </LongPressGestureHandler>
    );
  }
}

PressBox.propTypes = {
  onSingleTap: PropTypes.func,
  onDoubleTap: PropTypes.func,
  onLongTap: PropTypes.func,
  LongTapDurationMs: PropTypes.number,
  DoubleTapDelayMs: PropTypes.number,
};

PressBox.defaultProps = {
  LongTapDurationMs: 500,
  DoubleTapDelayMs: 130,
};
