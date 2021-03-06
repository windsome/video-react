import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { createStore } from 'redux';
import { findDOMNode } from 'react-dom';

var LOAD_START = 'video-react/LOAD_START';
var CAN_PLAY = 'video-react/CAN_PLAY';
var WAITING = 'video-react/WAITING';
var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
var PLAYING = 'video-react/PLAYING';
var PLAY = 'video-react/PLAY';
var PAUSE = 'video-react/PAUSE';
var END = 'video-react/END';
var SEEKING = 'video-react/SEEKING';
var SEEKED = 'video-react/SEEKED';
var SEEKING_TIME = 'video-react/SEEKING_TIME';
var END_SEEKING = 'video-react/END_SEEKING';
var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
var TIME_UPDATE = 'video-react/TIME_UPDATE';
var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
var RATE_CHANGE = 'video-react/RATE_CHANGE';
var SUSPEND = 'video-react/SUSPEND';
var ABORT = 'video-react/ABORT';
var EMPTIED = 'video-react/EMPTIED';
var STALLED = 'video-react/STALLED';
var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
var LOADED_DATA = 'video-react/LOADED_DATA';
var RESIZE = 'video-react/RESIZE';
var ERROR = 'video-react/ERROR';

function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps: videoProps
  };
}

function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps: videoProps
  };
}

function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps: videoProps
  };
}

function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps: videoProps
  };
}

function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps: videoProps
  };
}

function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps: videoProps
  };
}

function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps: videoProps
  };
}

function handleEnd(videoProps) {
  return {
    type: END,
    videoProps: videoProps
  };
}

function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps: videoProps
  };
}

function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps: videoProps
  };
}

function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps: videoProps
  };
}

function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps: videoProps
  };
}

function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps: videoProps
  };
}

function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps: videoProps
  };
}

function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps: videoProps
  };
}

function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps: videoProps
  };
}

function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps: videoProps
  };
}

function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps: videoProps
  };
}

function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps: videoProps
  };
}

function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps: videoProps
  };
}

function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps: videoProps
  };
}

function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps: videoProps
  };
}

function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps: videoProps
  };
}

function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time: time
  };
}

function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time: time
  };
}

var videoActions = Object.freeze({
	LOAD_START: LOAD_START,
	CAN_PLAY: CAN_PLAY,
	WAITING: WAITING,
	CAN_PLAY_THROUGH: CAN_PLAY_THROUGH,
	PLAYING: PLAYING,
	PLAY: PLAY,
	PAUSE: PAUSE,
	END: END,
	SEEKING: SEEKING,
	SEEKED: SEEKED,
	SEEKING_TIME: SEEKING_TIME,
	END_SEEKING: END_SEEKING,
	DURATION_CHANGE: DURATION_CHANGE,
	TIME_UPDATE: TIME_UPDATE,
	VOLUME_CHANGE: VOLUME_CHANGE,
	PROGRESS_CHANGE: PROGRESS_CHANGE,
	RATE_CHANGE: RATE_CHANGE,
	SUSPEND: SUSPEND,
	ABORT: ABORT,
	EMPTIED: EMPTIED,
	STALLED: STALLED,
	LOADED_META_DATA: LOADED_META_DATA,
	LOADED_DATA: LOADED_DATA,
	RESIZE: RESIZE,
	ERROR: ERROR,
	handleLoadStart: handleLoadStart,
	handleCanPlay: handleCanPlay,
	handleWaiting: handleWaiting,
	handleCanPlayThrough: handleCanPlayThrough,
	handlePlaying: handlePlaying,
	handlePlay: handlePlay,
	handlePause: handlePause,
	handleEnd: handleEnd,
	handleSeeking: handleSeeking,
	handleSeeked: handleSeeked,
	handleDurationChange: handleDurationChange,
	handleTimeUpdate: handleTimeUpdate,
	handleVolumeChange: handleVolumeChange,
	handleProgressChange: handleProgressChange,
	handleRateChange: handleRateChange,
	handleSuspend: handleSuspend,
	handleAbort: handleAbort,
	handleEmptied: handleEmptied,
	handleStalled: handleStalled,
	handleLoadedMetaData: handleLoadedMetaData,
	handleLoadedData: handleLoadedData,
	handleResize: handleResize,
	handleError: handleError,
	handleSeekingTime: handleSeekingTime,
	handleEndSeeking: handleEndSeeking
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Fullscreen = function () {
  function Fullscreen() {
    classCallCheck(this, Fullscreen);
  }

  createClass(Fullscreen, [{
    key: 'request',
    value: function request(elm) {
      if (elm.requestFullscreen) {
        elm.requestFullscreen();
      } else if (elm.webkitRequestFullscreen) {
        elm.webkitRequestFullscreen();
      } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullScreen();
      } else if (elm.msRequestFullscreen) {
        elm.msRequestFullscreen();
      }
    }
  }, {
    key: 'exit',
    value: function exit() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(handler) {
      document.addEventListener('fullscreenchange', handler);
      document.addEventListener('webkitfullscreenchange', handler);
      document.addEventListener('mozfullscreenchange', handler);
      document.addEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(handler) {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
      document.removeEventListener('mozfullscreenchange', handler);
      document.removeEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: 'isFullscreen',
    get: function get$$1() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }
  }, {
    key: 'enabled',
    get: function get$$1() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    }
  }]);
  return Fullscreen;
}();

var fullscreen = new Fullscreen();

var OPERATE = 'video-react/OPERATE';
var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
var USER_ACTIVATE = 'video-react/USER_ACTIVATE';

function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: isFullscreen
  };
}

function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity: activity
  };
}

function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity: activity
  };
}

function play() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'play',
    source: ''
  };

  this.video.play();

  return {
    type: OPERATE,
    operation: operation
  };
}

function pause() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'pause',
    source: ''
  };

  this.video.pause();

  return {
    type: OPERATE,
    operation: operation
  };
}

function togglePlay() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'toggle-play',
    source: ''
  };

  this.video.togglePlay();

  return {
    type: OPERATE,
    operation: operation
  };
}

// seek video by time
function seek(time) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'seek',
    source: ''
  };

  this.video.seek(time);

  return {
    type: OPERATE,
    operation: operation
  };
}

// jump forward x seconds
function forward(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'forward-' + seconds,
    source: ''
  };

  this.video.forward(seconds);

  return {
    type: OPERATE,
    operation: operation
  };
}

// jump back x seconds
function replay(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'replay-' + seconds,
    source: ''
  };

  this.video.replay(seconds);

  return {
    type: OPERATE,
    operation: operation
  };
}

function changeRate(rate) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-rate',
    source: ''
  };

  this.video.playbackRate = rate;

  return {
    type: OPERATE,
    operation: operation
  };
}

function changeVolume(volume) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-volume',
    source: ''
  };

  var v = volume;
  if (volume < 0) {
    v = 0;
  }
  if (volume > 1) {
    v = 1;
  }
  this.video.volume = v;

  return {
    type: OPERATE,
    operation: operation
  };
}

function mute(muted) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  };

  this.video.muted = muted;

  return {
    type: OPERATE,
    operation: operation
  };
}

function toggleFullscreen(player) {
  if (fullscreen.enabled) {
    if (fullscreen.isFullscreen) {
      fullscreen.exit();
    } else {
      fullscreen.request(this.rootElement);
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }

  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}

var playerActions = Object.freeze({
	OPERATE: OPERATE,
	FULLSCREEN_CHANGE: FULLSCREEN_CHANGE,
	PLAYER_ACTIVATE: PLAYER_ACTIVATE,
	USER_ACTIVATE: USER_ACTIVATE,
	handleFullscreenChange: handleFullscreenChange,
	activate: activate,
	userActivate: userActivate,
	play: play,
	pause: pause,
	togglePlay: togglePlay,
	seek: seek,
	forward: forward,
	replay: replay,
	changeRate: changeRate,
	changeVolume: changeVolume,
	mute: mute,
	toggleFullscreen: toggleFullscreen
});

var initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false
};

function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case USER_ACTIVATE:
      return _extends({}, state, {
        userActivity: action.activity
      });
    case PLAYER_ACTIVATE:
      return _extends({}, state, {
        isActive: action.activity
      });
    case FULLSCREEN_CHANGE:
      return _extends({}, state, {
        isFullscreen: !!action.isFullscreen
      });
    case SEEKING_TIME:
      return _extends({}, state, {
        seekingTime: action.time
      });
    case END_SEEKING:
      return _extends({}, state, {
        seekingTime: 0
      });
    case LOAD_START:
      return _extends({}, state, action.videoProps, {
        hasStarted: false,
        ended: false
      });
    case CAN_PLAY:
      return _extends({}, state, action.videoProps, {
        waiting: false
      });
    case WAITING:
      return _extends({}, state, action.videoProps, {
        waiting: true
      });
    case CAN_PLAY_THROUGH:
    case PLAYING:
      return _extends({}, state, action.videoProps, {
        waiting: false
      });
    case PLAY:
      return _extends({}, state, action.videoProps, {
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      });
    case PAUSE:
      return _extends({}, state, action.videoProps, {
        paused: true
      });
    case END:
      return _extends({}, state, action.videoProps, {
        ended: true
      });
    case SEEKING:
      return _extends({}, state, action.videoProps, {
        seeking: true
      });
    case SEEKED:
      return _extends({}, state, action.videoProps, {
        seeking: false
      });
    case ERROR:
      return _extends({}, state, action.videoProps, {
        error: 'UNKNOWN ERROR',
        ended: true
      });
    case DURATION_CHANGE:
    case TIME_UPDATE:
    case VOLUME_CHANGE:
    case PROGRESS_CHANGE:
    case RATE_CHANGE:
    case SUSPEND:
    case ABORT:
    case EMPTIED:
    case STALLED:
    case LOADED_META_DATA:
    case LOADED_DATA:
    case RESIZE:
      var newState = _extends({}, state, action.videoProps);
      if (action.videoProps.paused === false) {
        newState.hasStarted = true;
        newState.waiting = false;
      }
      return newState;
    default:
      return state;
  }
}

var initialState$1 = {
  count: 0,
  operation: {
    action: '',
    source: ''
  }
};

function operation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments[1];

  switch (action.type) {
    case OPERATE:
      return _extends({}, state, {
        count: state.count + 1,
        operation: _extends({}, state.operation, action.operation)
      });
    default:
      return state;
  }
}

var reducer = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    player: player(state.player, action),
    operation: operation(state.operation, action)
  };
};

var playerReducer = player;
var operationReducer = operation;

var Manager = function () {
  function Manager(store) {
    classCallCheck(this, Manager);

    this.store = store || createStore(reducer);

    this.video = null;
    this.rootElement = null;
  }

  createClass(Manager, [{
    key: 'getActions',
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;

      var actions = _extends({}, playerActions, videoActions);

      function bindActionCreator(actionCreator) {
        return function bindAction() {
          // eslint-disable-next-line prefer-rest-params
          var action = actionCreator.apply(manager, arguments);
          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(actions).filter(function (key) {
        return typeof actions[key] === 'function';
      }).reduce(function (boundActions, key) {
        boundActions[key] = bindActionCreator(actions[key]);
        return boundActions;
      }, {});
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.store.getState();
    }

    // subscribe state change

  }, {
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener, getState) {
      if (!getState) {
        getState = this.getState.bind(this);
      }

      var prevState = getState();

      var handleChange = function handleChange() {
        var state = getState();
        if (state === prevState) {
          return;
        }
        var prevStateCopy = prevState;
        prevState = state;
        listener(state, prevStateCopy);
      };

      return this.store.subscribe(handleChange);
    }

    // subscribe to operation state change

  }, {
    key: 'subscribeToOperationStateChange',
    value: function subscribeToOperationStateChange(listener) {
      var _this = this;

      return this.subscribeToStateChange(listener, function () {
        return _this.getState().operation;
      });
    }

    // subscribe to player state change

  }, {
    key: 'subscribeToPlayerStateChange',
    value: function subscribeToPlayerStateChange(listener) {
      var _this2 = this;

      return this.subscribeToStateChange(listener, function () {
        return _this2.getState().player;
      });
    }
  }]);
  return Manager;
}();

var propTypes$1 = {
  actions: PropTypes.object,
  player: PropTypes.object,
  position: PropTypes.string,
  className: PropTypes.string
};

var defaultProps$1 = {
  position: 'left'
};

var BigPlayButton = function (_Component) {
  inherits(BigPlayButton, _Component);

  function BigPlayButton(props, context) {
    classCallCheck(this, BigPlayButton);

    var _this = possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(BigPlayButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var actions = this.props.actions;

      actions.play();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          player = _props.player,
          position = _props.position;

      return React.createElement(
        'button',
        {
          className: classNames('video-react-big-play-button', 'video-react-big-play-button-' + position, this.props.className, {
            'big-play-button-hide': player.hasStarted || !player.currentSrc
          }),
          type: 'button',
          'aria-live': 'polite',
          tabIndex: '0',
          onClick: this.handleClick
        },
        React.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Play Video'
        )
      );
    }
  }]);
  return BigPlayButton;
}(Component);

BigPlayButton.propTypes = propTypes$1;
BigPlayButton.defaultProps = defaultProps$1;
BigPlayButton.displayName = 'BigPlayButton';

var propTypes$2 = {
  player: PropTypes.object,
  className: PropTypes.string
};

function LoadingSpinner(_ref) {
  var player = _ref.player,
      className = _ref.className;

  if (player.error) {
    return null;
  }
  return React.createElement('div', {
    className: classNames('video-react-loading-spinner', className)
  });
}

LoadingSpinner.propTypes = propTypes$2;
LoadingSpinner.displayName = 'LoadingSpinner';

var propTypes$3 = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string
};

function PosterImage(_ref) {
  var poster = _ref.poster,
      player = _ref.player,
      actions = _ref.actions,
      className = _ref.className;

  // if (!poster || player.hasStarted) {
  //   return null;
  // }

  return React.createElement('div', {
    className: classNames('video-react-poster', className),
    style: {
      backgroundImage: 'url("' + poster + '")'
    },
    onClick: function onClick() {
      if (player.paused) {
        actions.play();
      }
    }
  });
}

PosterImage.propTypes = propTypes$3;
PosterImage.displayName = 'PosterImage';

/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
function formatTime() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;

  var s = Math.floor(seconds % 60);
  var m = Math.floor(seconds / 60 % 60);
  var h = Math.floor(seconds / 3600);
  var gm = Math.floor(guide / 60 % 60);
  var gh = Math.floor(guide / 3600);

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  }

  // Check if we need to show hours
  h = h > 0 || gh > 0 ? h + ':' : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

  // Check if leading zero is need for seconds
  s = s < 10 ? '0' + s : s;

  return h + m + s;
}

// Check if the element belongs to a video element
// only accept <source />, <track />,
// <MyComponent isVideoChild />
// elements
function isVideoChild(c) {
  if (c.props && c.props.isVideoChild) {
    return true;
  }
  return c.type === 'source' || c.type === 'track';
}

var find = function find(elements, func) {
  return elements.filter(func)[0];
};

// check if two components are the same type
var isTypeEqual = function isTypeEqual(component1, component2) {
  var type1 = component1.type;
  var type2 = component2.type;

  if (typeof type1 === 'string' || typeof type2 === 'string') {
    return type1 === type2;
  }

  if (typeof type1 === 'function' && typeof type2 === 'function') {
    return type1.displayName === type2.displayName;
  }

  return false;
};

// merge default children
// sort them by `order` property
// filter them by `disabled` property
function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var children = React.Children.toArray(_children);
  var parentProps = _extends({}, _parentProps);
  return children.filter(function (e) {
    return !e.props.disabled;
  }) // filter the disabled components
  .concat(defaultChildren.filter(function (c) {
    return !find(children, function (component) {
      return isTypeEqual(component, c);
    });
  })).map(function (element) {
    var defaultComponent = find(defaultChildren, function (c) {
      return isTypeEqual(c, element);
    });
    delete parentProps.order;
    var defaultProps = defaultComponent ? defaultComponent.props : {};
    var props = _extends({}, parentProps, defaultProps, element.props);
    var e = React.cloneElement(element, props, element.props.children);
    return e;
  }).sort(function (a, b) {
    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
  });
}

/**
 * Temporary utility for generating the warnings
 */
function deprecatedWarning(oldMethodCall, newMethodCall) {
  // eslint-disable-next-line no-console
  console.warn('WARNING: ' + oldMethodCall + ' will be deprecated soon! Please use ' + newMethodCall + ' instead.');
}

function throttle(callback, limit) {
  var _arguments = arguments;

  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, _arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];

var propTypes$4 = {
  actions: PropTypes.object,
  player: PropTypes.object,
  children: PropTypes.any,
  startTime: PropTypes.number,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,

  playsInline: PropTypes.bool,
  webkitPlaysInline: PropTypes.string,
  x5PlaysInline: PropTypes.string,
  x5VideoPlayerType: PropTypes.string,

  src: PropTypes.string,
  poster: PropTypes.string,
  className: PropTypes.string,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  crossOrigin: PropTypes.string,

  onLoadStart: PropTypes.func,
  onWaiting: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onPlaying: PropTypes.func,
  onEnded: PropTypes.func,
  onSeeking: PropTypes.func,
  onSeeked: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onProgress: PropTypes.func,
  onDurationChange: PropTypes.func,
  onError: PropTypes.func,
  onSuspend: PropTypes.func,
  onAbort: PropTypes.func,
  onEmptied: PropTypes.func,
  onStalled: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  onLoadedData: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onRateChange: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onResize: PropTypes.func
};

var defaultProps$2 = {
  preload: 'auto'
};

var Video = function (_Component) {
  inherits(Video, _Component);

  function Video(props) {
    classCallCheck(this, Video);

    var _this = possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this.video = null; // the html5 video
    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    _this.seek = _this.seek.bind(_this);
    _this.forward = _this.forward.bind(_this);
    _this.replay = _this.replay.bind(_this);
    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
    _this.getProperties = _this.getProperties.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
    _this.handlePlay = _this.handlePlay.bind(_this);
    _this.handlePlaying = _this.handlePlaying.bind(_this);
    _this.handlePause = _this.handlePause.bind(_this);
    _this.handleEnded = _this.handleEnded.bind(_this);
    _this.handleWaiting = _this.handleWaiting.bind(_this);
    _this.handleSeeking = _this.handleSeeking.bind(_this);
    _this.handleSeeked = _this.handleSeeked.bind(_this);
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    _this.handleSuspend = _this.handleSuspend.bind(_this);
    _this.handleAbort = _this.handleAbort.bind(_this);
    _this.handleEmptied = _this.handleEmptied.bind(_this);
    _this.handleStalled = _this.handleStalled.bind(_this);
    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
    _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
    _this.handleRateChange = _this.handleRateChange.bind(_this);
    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
    _this.handleProgress = throttle(_this.handleProgress.bind(_this), 250);
    _this.handleKeypress = _this.handleKeypress.bind(_this);
    return _this;
  }

  createClass(Video, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.forceUpdate(); // make sure the children can get the video property
    }

    // get all video properties

  }, {
    key: 'getProperties',
    value: function getProperties() {
      var _this2 = this;

      if (!this.video) {
        return null;
      }

      return mediaProperties.reduce(function (properties, key) {
        properties[key] = _this2.video[key];
        return properties;
      }, {});
    }

    // get playback rate

  }, {
    key: 'play',


    // play the video
    value: function play() {
      var promise = this.video.play();
      if (promise !== undefined) {
        promise.catch(function (error) {}).then(function () {});
      }
    }

    // pause the video

  }, {
    key: 'pause',
    value: function pause() {
      var promise = this.video.pause();
      if (promise !== undefined) {
        promise.catch(function (error) {}).then(function () {});
      }
    }

    // Change the video source and re-load the video:

  }, {
    key: 'load',
    value: function load() {
      this.video.load();
    }

    // Add a new text track to the video

  }, {
    key: 'addTextTrack',
    value: function addTextTrack() {
      var _video;

      (_video = this.video).addTextTrack.apply(_video, arguments);
    }

    // Check if your browser can play different types of video:

  }, {
    key: 'canPlayType',
    value: function canPlayType() {
      var _video2;

      (_video2 = this.video).canPlayType.apply(_video2, arguments);
    }

    // toggle play

  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    }

    // seek video by time

  }, {
    key: 'seek',
    value: function seek(time) {
      try {
        this.video.currentTime = time;
      } catch (e) {
        // console.log(e, 'Video is not ready.')
      }
    }

    // jump forward x seconds

  }, {
    key: 'forward',
    value: function forward(seconds) {
      this.seek(this.video.currentTime + seconds);
    }

    // jump back x seconds

  }, {
    key: 'replay',
    value: function replay(seconds) {
      this.forward(-seconds);
    }

    // enter or exist full screen

  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.toggleFullscreen(player);
    }

    // Fired when the user agent
    // begins looking for media data

  }, {
    key: 'handleLoadStart',
    value: function handleLoadStart() {
      var _props2 = this.props,
          actions = _props2.actions,
          onLoadStart = _props2.onLoadStart;

      actions.handleLoadStart(this.getProperties());
      if (onLoadStart) {
        onLoadStart.apply(undefined, arguments);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handleCanPlay',
    value: function handleCanPlay() {
      var _props3 = this.props,
          actions = _props3.actions,
          onCanPlay = _props3.onCanPlay;


      actions.handleCanPlay(this.getProperties());

      if (onCanPlay) {
        onCanPlay.apply(undefined, arguments);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handleCanPlayThrough',
    value: function handleCanPlayThrough() {
      var _props4 = this.props,
          actions = _props4.actions,
          onCanPlayThrough = _props4.onCanPlayThrough;

      actions.handleCanPlayThrough(this.getProperties());

      if (onCanPlayThrough) {
        onCanPlayThrough.apply(undefined, arguments);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handlePlaying',
    value: function handlePlaying() {
      var _props5 = this.props,
          actions = _props5.actions,
          onPlaying = _props5.onPlaying;

      actions.handlePlaying(this.getProperties());

      if (onPlaying) {
        onPlaying.apply(undefined, arguments);
      }
    }

    // Fired whenever the media has been started

  }, {
    key: 'handlePlay',
    value: function handlePlay() {
      var _props6 = this.props,
          actions = _props6.actions,
          onPlay = _props6.onPlay;

      actions.handlePlay(this.getProperties());

      if (onPlay) {
        onPlay.apply(undefined, arguments);
      }
    }

    // Fired whenever the media has been paused

  }, {
    key: 'handlePause',
    value: function handlePause() {
      var _props7 = this.props,
          actions = _props7.actions,
          onPause = _props7.onPause;

      actions.handlePause(this.getProperties());

      if (onPause) {
        onPause.apply(undefined, arguments);
      }
    }

    // Fired when the duration of
    // the media resource is first known or changed

  }, {
    key: 'handleDurationChange',
    value: function handleDurationChange() {
      var _props8 = this.props,
          actions = _props8.actions,
          onDurationChange = _props8.onDurationChange;

      actions.handleDurationChange(this.getProperties());

      if (onDurationChange) {
        onDurationChange.apply(undefined, arguments);
      }
    }

    // Fired while the user agent
    // is downloading media data

  }, {
    key: 'handleProgress',
    value: function handleProgress() {
      var _props9 = this.props,
          actions = _props9.actions,
          onProgress = _props9.onProgress;

      if (this.video) {
        actions.handleProgressChange(this.getProperties());
      }

      if (onProgress) {
        onProgress.apply(undefined, arguments);
      }
    }

    // Fired when the end of the media resource
    // is reached (currentTime == duration)

  }, {
    key: 'handleEnded',
    value: function handleEnded() {
      var _props10 = this.props,
          loop = _props10.loop,
          player = _props10.player,
          actions = _props10.actions,
          onEnded = _props10.onEnded;

      if (loop) {
        this.seek(0);
        this.play();
      } else if (!player.paused) {
        this.pause();
      }
      actions.handleEnd(this.getProperties());

      if (onEnded) {
        onEnded.apply(undefined, arguments);
      }
    }

    // Fired whenever the media begins waiting

  }, {
    key: 'handleWaiting',
    value: function handleWaiting() {
      var _props11 = this.props,
          actions = _props11.actions,
          onWaiting = _props11.onWaiting;

      actions.handleWaiting(this.getProperties());

      if (onWaiting) {
        onWaiting.apply(undefined, arguments);
      }
    }

    // Fired whenever the player
    // is jumping to a new time

  }, {
    key: 'handleSeeking',
    value: function handleSeeking() {
      var _props12 = this.props,
          actions = _props12.actions,
          onSeeking = _props12.onSeeking;

      actions.handleSeeking(this.getProperties());

      if (onSeeking) {
        onSeeking.apply(undefined, arguments);
      }
    }

    // Fired when the player has
    // finished jumping to a new time

  }, {
    key: 'handleSeeked',
    value: function handleSeeked() {
      var _props13 = this.props,
          actions = _props13.actions,
          onSeeked = _props13.onSeeked;

      actions.handleSeeked(this.getProperties());

      if (onSeeked) {
        onSeeked.apply(undefined, arguments);
      }
    }

    // Handle Fullscreen Change

  }, {
    key: 'handleFullscreenChange',
    value: function handleFullscreenChange() {}

    // Fires when the browser is
    // intentionally not getting media data

  }, {
    key: 'handleSuspend',
    value: function handleSuspend() {
      var _props14 = this.props,
          actions = _props14.actions,
          onSuspend = _props14.onSuspend;

      actions.handleSuspend(this.getProperties());
      if (onSuspend) {
        onSuspend.apply(undefined, arguments);
      }
    }

    // Fires when the loading of an audio/video is aborted

  }, {
    key: 'handleAbort',
    value: function handleAbort() {
      var _props15 = this.props,
          actions = _props15.actions,
          onAbort = _props15.onAbort;

      actions.handleAbort(this.getProperties());
      if (onAbort) {
        onAbort.apply(undefined, arguments);
      }
    }

    // Fires when the current playlist is empty

  }, {
    key: 'handleEmptied',
    value: function handleEmptied() {
      var _props16 = this.props,
          actions = _props16.actions,
          onEmptied = _props16.onEmptied;

      actions.handleEmptied(this.getProperties());
      if (onEmptied) {
        onEmptied.apply(undefined, arguments);
      }
    }

    // Fires when the browser is trying to
    // get media data, but data is not available

  }, {
    key: 'handleStalled',
    value: function handleStalled() {
      var _props17 = this.props,
          actions = _props17.actions,
          onStalled = _props17.onStalled;

      actions.handleStalled(this.getProperties());

      if (onStalled) {
        onStalled.apply(undefined, arguments);
      }
    }

    // Fires when the browser has loaded
    // meta data for the audio/video

  }, {
    key: 'handleLoadedMetaData',
    value: function handleLoadedMetaData() {
      var _props18 = this.props,
          actions = _props18.actions,
          onLoadedMetadata = _props18.onLoadedMetadata,
          startTime = _props18.startTime;


      if (startTime && startTime > 0) {
        this.video.currentTime = startTime;
      }

      actions.handleLoadedMetaData(this.getProperties());

      if (onLoadedMetadata) {
        onLoadedMetadata.apply(undefined, arguments);
      }
    }

    // Fires when the browser has loaded
    // the current frame of the audio/video

  }, {
    key: 'handleLoadedData',
    value: function handleLoadedData() {
      var _props19 = this.props,
          actions = _props19.actions,
          onLoadedData = _props19.onLoadedData;

      actions.handleLoadedData(this.getProperties());

      if (onLoadedData) {
        onLoadedData.apply(undefined, arguments);
      }
    }

    // Fires when the current
    // playback position has changed

  }, {
    key: 'handleTimeUpdate',
    value: function handleTimeUpdate() {
      var _props20 = this.props,
          actions = _props20.actions,
          onTimeUpdate = _props20.onTimeUpdate;

      actions.handleTimeUpdate(this.getProperties());

      if (onTimeUpdate) {
        onTimeUpdate.apply(undefined, arguments);
      }
    }

    /**
     * Fires when the playing speed of the audio/video is changed
     */

  }, {
    key: 'handleRateChange',
    value: function handleRateChange() {
      var _props21 = this.props,
          actions = _props21.actions,
          onRateChange = _props21.onRateChange;

      actions.handleRateChange(this.getProperties());

      if (onRateChange) {
        onRateChange.apply(undefined, arguments);
      }
    }

    // Fires when the volume has been changed

  }, {
    key: 'handleVolumeChange',
    value: function handleVolumeChange() {
      var _props22 = this.props,
          actions = _props22.actions,
          onVolumeChange = _props22.onVolumeChange;

      actions.handleVolumeChange(this.getProperties());

      if (onVolumeChange) {
        onVolumeChange.apply(undefined, arguments);
      }
    }

    // Fires when an error occurred
    // during the loading of an audio/video

  }, {
    key: 'handleError',
    value: function handleError() {
      var _props23 = this.props,
          actions = _props23.actions,
          onError = _props23.onError;

      actions.handleError(this.getProperties());
      if (onError) {
        onError.apply(undefined, arguments);
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _props24 = this.props,
          actions = _props24.actions,
          onResize = _props24.onResize;

      actions.handleResize(this.getProperties());
      if (onResize) {
        onResize.apply(undefined, arguments);
      }
    }
  }, {
    key: 'handleKeypress',
    value: function handleKeypress() {}
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var props = _extends({}, this.props, {
        video: this.video
      });

      // to make sure the children can get video property
      if (!this.video) {
        return null;
      }

      // only keep <source />, <track />, <MyComponent isVideoChild /> elements
      return React.Children.toArray(this.props.children).filter(isVideoChild).map(function (c) {
        var cprops = void 0;
        if (typeof c.type === 'string') {
          // add onError to <source />
          if (c.type === 'source') {
            cprops = _extends({}, c.props);
            var preOnError = cprops.onError;
            cprops.onError = function () {
              if (preOnError) {
                preOnError.apply(undefined, arguments);
              }
              _this3.handleError.apply(_this3, arguments);
            };
          }
        } else {
          cprops = props;
        }
        return React.cloneElement(c, cprops);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props25 = this.props,
          loop = _props25.loop,
          poster = _props25.poster,
          preload = _props25.preload,
          src = _props25.src,
          autoPlay = _props25.autoPlay,
          muted = _props25.muted,
          crossOrigin = _props25.crossOrigin,
          videoId = _props25.videoId,
          playsInline = _props25.playsInline,
          webkitPlaysInline = _props25.webkitPlaysInline,
          x5PlaysInline = _props25.x5PlaysInline,
          x5VideoPlayerType = _props25.x5VideoPlayerType;


      var specialProps = {
        playsInline: playsInline,
        'webkit-playsinline': webkitPlaysInline,
        'x5-playsinline': x5PlaysInline,
        'x5-video-player-type': x5VideoPlayerType
      };
      console.log('render:', specialProps);
      return React.createElement(
        'video',
        _extends({
          className: classNames('video-react-video', this.props.className),
          id: videoId,
          crossOrigin: crossOrigin,
          ref: function ref(c) {
            _this4.video = c;
          },
          muted: muted,
          preload: preload,
          loop: loop
        }, specialProps, {
          autoPlay: autoPlay,
          poster: poster,
          src: src,
          onLoadStart: this.handleLoadStart,
          onWaiting: this.handleWaiting,
          onCanPlay: this.handleCanPlay,
          onCanPlayThrough: this.handleCanPlayThrough,
          onPlaying: this.handlePlaying,
          onEnded: this.handleEnded,
          onSeeking: this.handleSeeking,
          onSeeked: this.handleSeeked,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onProgress: this.handleProgress,
          onDurationChange: this.handleDurationChange,
          onError: this.handleError,
          onSuspend: this.handleSuspend,
          onAbort: this.handleAbort,
          onEmptied: this.handleEmptied,
          onStalled: this.handleStalled,
          onLoadedMetadata: this.handleLoadedMetaData,
          onLoadedData: this.handleLoadedData,
          onTimeUpdate: this.handleTimeUpdate,
          onRateChange: this.handleRateChange,
          onVolumeChange: this.handleVolumeChange
        }),
        this.renderChildren()
      );
    }
  }, {
    key: 'playbackRate',
    get: function get$$1() {
      return this.video.playbackRate;
    }

    // set playback rate
    // speed of video
    ,
    set: function set$$1(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: 'muted',
    get: function get$$1() {
      return this.video.muted;
    },
    set: function set$$1(val) {
      this.video.muted = val;
    }
  }, {
    key: 'volume',
    get: function get$$1() {
      return this.video.volume;
    },
    set: function set$$1(val) {
      if (val > 1) {
        val = 1;
      }
      if (val < 0) {
        val = 0;
      }
      this.video.volume = val;
    }

    // video width

  }, {
    key: 'videoWidth',
    get: function get$$1() {
      return this.video.videoWidth;
    }

    // video height

  }, {
    key: 'videoHeight',
    get: function get$$1() {
      return this.video.videoHeight;
    }
  }]);
  return Video;
}(Component);

Video.propTypes = propTypes$4;
Video.defaultProps = defaultProps$2;
Video.displayName = 'Video';

var propTypes$5 = {
  manager: PropTypes.object,
  className: PropTypes.string
};

var Bezel = function (_Component) {
  inherits(Bezel, _Component);

  function Bezel(props, context) {
    classCallCheck(this, Bezel);

    var _this = possibleConstructorReturn(this, (Bezel.__proto__ || Object.getPrototypeOf(Bezel)).call(this, props, context));

    _this.timer = null;
    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind(_this));

    _this.state = {
      hidden: true,
      operation: {}
    };
    return _this;
  }

  createClass(Bezel, [{
    key: 'handleStateChange',
    value: function handleStateChange(state, prevState) {
      var _this2 = this;

      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
        if (this.timer) {
          // previous animation is not finished
          clearTimeout(this.timer); // cancel it
          this.timer = null;
        }

        // show it
        // update operation
        this.setState({
          hidden: false,
          count: state.count,
          operation: state.operation
        });

        // hide it after 0.5s
        this.timer = setTimeout(function () {
          _this2.setState({
            hidden: true
          });
          _this2.timer = null;
        }, 500);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // only displays for shortcut so far
      if (this.state.operation.source !== 'shortcut') {
        return null;
      }
      var style = this.state.hidden ? {
        display: 'none'
      } : null;

      return React.createElement(
        'div',
        {
          className: classNames({
            'video-react-bezel': true,
            'video-react-bezel-animation': this.state.count % 2 === 0,
            'video-react-bezel-animation-alt': this.state.count % 2 === 1
          }, this.props.className),
          style: style,
          role: 'status',
          'aria-label': this.state.operation.action
        },
        React.createElement('div', {
          className: classNames('video-react-bezel-icon', 'video-react-bezel-icon-' + this.state.operation.action)
        })
      );
    }
  }]);
  return Bezel;
}(Component);

Bezel.propTypes = propTypes$5;
Bezel.displayName = 'Bezel';

/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {Element} el Element from which to get offset
 * @return {Object}
 */
function findElPosition(el) {
  var box = void 0;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  var docEl = document.documentElement;
  var body = document.body;

  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {Element} el Element on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */
function getPointerPosition(el, event) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;

  var boxY = box.top;
  var boxX = box.left;
  var pageY = event.pageY;
  var pageX = event.pageX;

  if (event.changedTouches) {
    pageX = event.changedTouches[0].pageX;
    pageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));

  return position;
}

// blur an element


// check if an element has a class name
function hasClass(elm, cls) {
  var classes = elm.className.split(' ');
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true;
    }
  }
  return false;
}

var propTypes$6 = {
  clickable: PropTypes.bool,
  dblclickable: PropTypes.bool,
  manager: PropTypes.object,
  actions: PropTypes.object,
  player: PropTypes.object,
  shortcuts: PropTypes.array
};

var defaultProps$3 = {
  clickable: true,
  dblclickable: true
};

var Shortcut = function (_Component) {
  inherits(Shortcut, _Component);

  function Shortcut(props, context) {
    classCallCheck(this, Shortcut);

    var _this = possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));

    _this.defaultShortcuts = [{
      keyCode: 32, // spacebar
      handle: _this.togglePlay
    }, {
      keyCode: 75, // k
      handle: _this.togglePlay
    }, {
      keyCode: 70, // f
      handle: _this.toggleFullscreen
    }, {
      keyCode: 37, // Left arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(5, {
          action: 'replay-5',
          source: 'shortcut'
        }); // Go back 5 seconds
      }
    }, {
      keyCode: 74, // j
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(10, {
          action: 'replay-10',
          source: 'shortcut'
        }); // Go back 10 seconds
      }
    }, {
      keyCode: 39, // Right arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(5, {
          action: 'forward-5',
          source: 'shortcut'
        }); // Go forward 5 seconds
      }
    }, {
      keyCode: 76, // l
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(10, {
          action: 'forward-10',
          source: 'shortcut'
        }); // Go forward 10 seconds
      }
    }, {
      keyCode: 36, // Home
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.seek(0); // Go to beginning of video
      }
    }, {
      keyCode: 35, // End
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        // Go to end of video
        actions.seek(player.duration);
      }
    }, {
      keyCode: 38, // Up arrow
      handle: function handle(player, actions) {
        // Increase volume 5%
        var v = player.volume + 0.05;
        if (v > 1) {
          v = 1;
        }
        actions.changeVolume(v, {
          action: 'volume-up',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 40, // Down arrow
      handle: function handle(player, actions) {
        // Decrease volume 5%
        var v = player.volume - 0.05;
        if (v < 0) {
          v = 0;
        }
        var action = v > 0 ? 'volume-down' : 'volume-off';
        actions.changeVolume(v, {
          action: action,
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 190, // Shift + >
      shift: true,
      handle: function handle(player, actions) {
        // Increase speed
        var playbackRate = player.playbackRate;
        if (playbackRate >= 1.5) {
          playbackRate = 2;
        } else if (playbackRate >= 1.25) {
          playbackRate = 1.5;
        } else if (playbackRate >= 1.0) {
          playbackRate = 1.25;
        } else if (playbackRate >= 0.5) {
          playbackRate = 1.0;
        } else if (playbackRate >= 0.25) {
          playbackRate = 0.5;
        } else if (playbackRate >= 0) {
          playbackRate = 0.25;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-forward',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 188, // Shift + <
      shift: true,
      handle: function handle(player, actions) {
        // Decrease speed
        var playbackRate = player.playbackRate;
        if (playbackRate <= 0.5) {
          playbackRate = 0.25;
        } else if (playbackRate <= 1.0) {
          playbackRate = 0.5;
        } else if (playbackRate <= 1.25) {
          playbackRate = 1.0;
        } else if (playbackRate <= 1.5) {
          playbackRate = 1.25;
        } else if (playbackRate <= 2) {
          playbackRate = 1.5;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-rewind',
          source: 'shortcut'
        });
      }
    }];

    _this.shortcuts = [].concat(toConsumableArray(_this.defaultShortcuts));

    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  createClass(Shortcut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mergeShortcuts();
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('click', this.handleClick);
      document.addEventListener('dblclick', this.handleDoubleClick);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.shortcuts !== this.props.shortcuts) {
        this.mergeShortcuts();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('dblclick', this.handleDoubleClick);
    }

    // merge the shortcuts from props

  }, {
    key: 'mergeShortcuts',
    value: function mergeShortcuts() {
      var getShortcutKey = function getShortcutKey(_ref) {
        var _ref$keyCode = _ref.keyCode,
            keyCode = _ref$keyCode === undefined ? 0 : _ref$keyCode,
            _ref$ctrl = _ref.ctrl,
            ctrl = _ref$ctrl === undefined ? false : _ref$ctrl,
            _ref$shift = _ref.shift,
            shift = _ref$shift === undefined ? false : _ref$shift,
            _ref$alt = _ref.alt,
            alt = _ref$alt === undefined ? false : _ref$alt;
        return keyCode + ':' + ctrl + ':' + shift + ':' + alt;
      };
      var defaultShortcuts = this.defaultShortcuts.reduce(function (shortcuts, shortcut) {
        return Object.assign(shortcuts, defineProperty({}, getShortcutKey(shortcut), shortcut));
      }, {});
      var mergedShortcuts = (this.props.shortcuts || []).reduce(function (shortcuts, shortcut) {
        var keyCode = shortcut.keyCode,
            handle = shortcut.handle;

        if (keyCode && typeof handle === 'function') {
          return Object.assign(shortcuts, defineProperty({}, getShortcutKey(shortcut), shortcut));
        }
        return shortcuts;
      }, defaultShortcuts);

      var gradeShortcut = function gradeShortcut(s) {
        var score = 0;
        var ps = ['ctrl', 'shift', 'alt'];
        ps.forEach(function (key) {
          if (s[key]) {
            score++;
          }
        });
        return score;
      };

      this.shortcuts = Object.keys(mergedShortcuts).map(function (key) {
        return mergedShortcuts[key];
      }).sort(function (a, b) {
        return gradeShortcut(b) - gradeShortcut(a);
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay(player, actions) {
      if (player.paused) {
        actions.play({
          action: 'play',
          source: 'shortcut'
        });
      } else {
        actions.pause({
          action: 'pause',
          source: 'shortcut'
        });
      }
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen(player, actions) {
      actions.toggleFullscreen(player);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (!player.isActive) {
        return;
      }
      if (document.activeElement && (hasClass(document.activeElement, 'video-react-control') || hasClass(document.activeElement, 'video-react-menu-button-active')
      // || hasClass(document.activeElement, 'video-react-slider')
      || hasClass(document.activeElement, 'video-react-big-play-button'))) {
        return;
      }

      var keyCode = e.keyCode || e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var shift = e.shiftKey;
      var alt = e.altKey;

      var shortcut = this.shortcuts.filter(function (s) {
        if (!s.keyCode || s.keyCode - keyCode !== 0) {
          return false;
        }
        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
          return false;
        }
        return true;
      })[0];

      if (shortcut) {
        shortcut.handle(player, actions);
        e.preventDefault();
      }
    }

    // only if player is active and player is ready

  }, {
    key: 'canBeClicked',
    value: function canBeClicked(player, e) {
      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
        return false;
      }
      return true;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions,
          clickable = _props2.clickable;

      if (!this.canBeClicked(player, e) || !clickable) {
        return;
      }
      this.togglePlay(player, actions);
      // e.preventDefault();
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(e) {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions,
          dblclickable = _props3.dblclickable;

      if (!this.canBeClicked(player, e) || !dblclickable) {
        return;
      }
      this.toggleFullscreen(player, actions);
      // e.preventDefault();
    }

    // this component dose not render anything
    // it's just for the key down event

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Shortcut;
}(Component);

Shortcut.propTypes = propTypes$6;
Shortcut.defaultProps = defaultProps$3;
Shortcut.displayName = 'Shortcut';

var propTypes$10 = {
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  stepForward: PropTypes.func,
  stepBack: PropTypes.func,
  sliderActive: PropTypes.func,
  sliderInactive: PropTypes.func,
  onMouseUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  getPercent: PropTypes.func,
  vertical: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string,
  valuenow: PropTypes.string,
  valuetext: PropTypes.string
};

var Slider = function (_Component) {
  inherits(Slider, _Component);

  function Slider(props, context) {
    classCallCheck(this, Slider);

    var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);
    _this.calculateDistance = _this.calculateDistance.bind(_this);
    _this.getProgress = _this.getProgress.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);

    _this.state = {
      active: false
    };
    return _this;
  }

  createClass(Slider, [{
    key: 'getProgress',
    value: function getProgress() {
      var getPercent = this.props.getPercent;

      if (!getPercent) {
        return 0;
      }
      var progress = getPercent();

      // Protect against no duration and other division issues
      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
        progress = 0;
      }
      return progress;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var onMouseDown = this.props.onMouseDown;
      // event.preventDefault();
      // event.stopPropagation();

      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
      document.addEventListener('touchmove', this.handleMouseMove, true);
      document.addEventListener('touchend', this.handleMouseUp, true);

      this.setState({
        active: true,
        distance: 0
      });

      if (this.props.sliderActive) {
        this.props.sliderActive(event);
      }

      this.handleMouseMove(event);

      if (onMouseDown) {
        onMouseDown(event);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var onMouseMove = this.props.onMouseMove;


      if (onMouseMove) {
        onMouseMove(event);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var onMouseUp = this.props.onMouseUp;


      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);

      this.setState({
        active: false
      });

      if (this.props.sliderInactive) {
        this.props.sliderInactive(event);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeyPress, true);
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeyPress, true);
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.which === 37 || event.which === 40) {
        // Left and Down Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepBack();
      } else if (event.which === 38 || event.which === 39) {
        // Up and Right Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepForward();
      }
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      if (this.props.stepForward) {
        this.props.stepForward();
      }
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      if (this.props.stepBack) {
        this.props.stepBack();
      }
    }
  }, {
    key: 'calculateDistance',
    value: function calculateDistance(event) {
      var node = findDOMNode(this);
      var position = getPointerPosition(node, event);
      if (this.props.vertical) {
        return position.y;
      }
      return position.x;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var progress = this.getProgress();
      var percentage = (progress * 100).toFixed(2) + '%';
      return React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, { progress: progress, percentage: percentage });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          vertical = _props.vertical,
          label = _props.label,
          valuenow = _props.valuenow,
          valuetext = _props.valuetext;


      return React.createElement(
        'div',
        {
          className: classNames(this.props.className, {
            'video-react-slider-vertical': vertical,
            'video-react-slider-horizontal': !vertical,
            'video-react-sliding': this.state.active
          }, 'video-react-slider'),
          tabIndex: '0',
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleMouseDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          'aria-label': label || '',
          'aria-valuenow': valuenow || '',
          'aria-valuetext': valuetext || '',
          'aria-valuemin': 0,
          'aria-valuemax': 100
        },
        this.renderChildren()
      );
    }
  }]);
  return Slider;
}(Component);

Slider.propTypes = propTypes$10;
Slider.displayName = 'Slider';

var propTypes$11 = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  percentage: PropTypes.string,
  className: PropTypes.string
};

// Shows play progress
function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage,
      className = _ref.className;

  return React.createElement(
    'div',
    {
      'data-current-time': formatTime(currentTime, duration),
      className: classNames('video-react-play-progress video-react-slider-bar', className),
      style: {
        width: percentage
      }
    },
    React.createElement(
      'span',
      { className: 'video-react-control-text' },
      React.createElement(
        'span',
        null,
        'Progress'
      ),
      ': ',
      percentage
    )
  );
}

PlayProgressBar.propTypes = propTypes$11;
PlayProgressBar.displayName = 'PlayProgressBar';

var propTypes$12 = {
  duration: PropTypes.number,
  buffered: PropTypes.object,
  className: PropTypes.string
};

// Shows load progress
function LoadProgressBar(_ref) {
  var buffered = _ref.buffered,
      duration = _ref.duration,
      className = _ref.className;

  if (!buffered || !buffered.length) {
    return null;
  }
  var bufferedEnd = buffered.end(buffered.length - 1);
  var style = {};

  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  }

  // get the percent width of a time compared to the total end
  function percentify(time, end) {
    var percent = time / end || 0; // no NaN
    return (percent >= 1 ? 1 : percent) * 100 + '%';
  }

  // the width of the progress bar
  style.width = percentify(bufferedEnd, duration);

  var parts = [];

  // add child elements to represent the individual buffered time ranges
  for (var i = 0; i < buffered.length; i++) {
    var start = buffered.start(i);
    var end = buffered.end(i);
    // set the percent based on the width of the progress bar (bufferedEnd)
    var part = React.createElement('div', {
      style: {
        left: percentify(start, bufferedEnd),
        width: percentify(end - start, bufferedEnd)
      },
      key: 'part-' + i
    });
    parts.push(part);
  }

  if (parts.length === 0) {
    parts = null;
  }

  return React.createElement(
    'div',
    {
      style: style,
      className: classNames('video-react-load-progress', className)
    },
    React.createElement(
      'span',
      { className: 'video-react-control-text' },
      React.createElement(
        'span',
        null,
        'Loaded'
      ),
      ': 0%'
    ),
    parts
  );
}

LoadProgressBar.propTypes = propTypes$12;
LoadProgressBar.displayName = 'LoadProgressBar';

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime,
      className = _ref.className,
      text = _ref.text;

  if (!mouseTime.time) {
    return null;
  }

  var time = text || formatTime(mouseTime.time, duration);

  return React.createElement('div', {
    className: classNames('video-react-mouse-display', className),
    style: {
      left: mouseTime.position + 'px'
    },
    'data-current-time': time
  });
}

MouseTimeDisplay.propTypes = {
  duration: PropTypes.number,
  mouseTime: PropTypes.object,
  className: PropTypes.string
};
MouseTimeDisplay.displayName = 'MouseTimeDisplay';

var propTypes$9 = {
  player: PropTypes.object,
  mouseTime: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string
};

var SeekBar = function (_Component) {
  inherits(SeekBar, _Component);

  function SeekBar(props, context) {
    classCallCheck(this, SeekBar);

    var _this = possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props, context));

    _this.getPercent = _this.getPercent.bind(_this);
    _this.getNewTime = _this.getNewTime.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  createClass(SeekBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    /**
     * Get percentage of video played
     *
     * @return {Number} Percentage played
     * @method getPercent
     */

  }, {
    key: 'getPercent',
    value: function getPercent() {
      var _props$player = this.props.player,
          currentTime = _props$player.currentTime,
          seekingTime = _props$player.seekingTime,
          duration = _props$player.duration;

      var time = seekingTime || currentTime;
      var percent = time / duration;
      return percent >= 1 ? 1 : percent;
    }
  }, {
    key: 'getNewTime',
    value: function getNewTime(event) {
      var duration = this.props.player.duration;

      var distance = this.slider.calculateDistance(event);
      var newTime = distance * duration;

      // Don't let video end while scrubbing.
      return newTime === duration ? newTime - 0.1 : newTime;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {}
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var actions = this.props.actions;

      var newTime = this.getNewTime(event);
      // Set new time (tell video to seek to new time)
      actions.seek(newTime);
      actions.handleEndSeeking(newTime);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var actions = this.props.actions;

      var newTime = this.getNewTime(event);
      actions.handleSeekingTime(newTime);
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var actions = this.props.actions;

      actions.forward(5);
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      var actions = this.props.actions;

      actions.replay(5);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$player2 = _props.player,
          currentTime = _props$player2.currentTime,
          seekingTime = _props$player2.seekingTime,
          duration = _props$player2.duration,
          buffered = _props$player2.buffered,
          mouseTime = _props.mouseTime;

      var time = seekingTime || currentTime;

      return React.createElement(
        Slider,
        {
          ref: function ref(input) {
            _this2.slider = input;
          },
          label: 'video progress bar',
          className: classNames('video-react-progress-holder', this.props.className),
          valuenow: (this.getPercent() * 100).toFixed(2),
          valuetext: formatTime(time, duration),
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          getPercent: this.getPercent,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        },
        React.createElement(LoadProgressBar, {
          buffered: buffered,
          currentTime: time,
          duration: duration
        }),
        React.createElement(MouseTimeDisplay, {
          duration: duration,
          mouseTime: mouseTime
        }),
        React.createElement(PlayProgressBar, {
          currentTime: time,
          duration: duration
        })
      );
    }
  }]);
  return SeekBar;
}(Component);

SeekBar.propTypes = propTypes$9;
SeekBar.displayName = 'SeekBar';

var propTypes$8 = {
  player: PropTypes.object,
  className: PropTypes.string
};

var ProgressControl = function (_Component) {
  inherits(ProgressControl, _Component);

  function ProgressControl(props, context) {
    classCallCheck(this, ProgressControl);

    var _this = possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props, context));

    _this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };

    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind(_this);
    return _this;
  }

  createClass(ProgressControl, [{
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!event.pageX) {
        return;
      }
      var duration = this.props.player.duration;

      var node = findDOMNode(this.seekBar);
      var newTime = getPointerPosition(node, event).x * duration;
      var position = event.pageX - findElPosition(node).left;

      this.setState({
        mouseTime: {
          time: newTime,
          position: position
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = this.props.className;

      return React.createElement(
        'div',
        {
          onMouseMove: this.handleMouseMoveThrottle,
          className: classNames('video-react-progress-control video-react-control', className)
        },
        React.createElement(SeekBar, _extends({
          mouseTime: this.state.mouseTime,
          ref: function ref(c) {
            _this2.seekBar = c;
          }
        }, this.props))
      );
    }
  }]);
  return ProgressControl;
}(Component);

ProgressControl.propTypes = propTypes$8;
ProgressControl.displayName = 'ProgressControl';

var propTypes$13 = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

var PlayToggle = function (_Component) {
  inherits(PlayToggle, _Component);

  function PlayToggle(props, context) {
    classCallCheck(this, PlayToggle);

    var _this = possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(PlayToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          actions = _props.actions,
          player = _props.player;

      if (player.paused) {
        actions.play();
      } else {
        actions.pause();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          player = _props2.player,
          className = _props2.className;

      var controlText = player.paused ? 'Play' : 'Pause';

      return React.createElement(
        'button',
        {
          ref: function ref(c) {
            _this2.button = c;
          },
          className: classNames(className, {
            'video-react-play-control': true,
            'video-react-control': true,
            'video-react-button': true,
            'video-react-paused': player.paused,
            'video-react-playing': !player.paused
          }),
          type: 'button',
          tabIndex: '0',
          onClick: this.handleClick
        },
        React.createElement(
          'span',
          { className: 'video-react-control-text' },
          controlText
        )
      );
    }
  }]);
  return PlayToggle;
}(Component);

PlayToggle.propTypes = propTypes$13;
PlayToggle.displayName = 'PlayToggle';

var propTypes$14 = {
  actions: PropTypes.object,
  className: PropTypes.string,
  seconds: PropTypes.oneOf([5, 10, 30])
};

var defaultProps$5 = {
  seconds: 10
};

var ForwardReplayControl = (function (mode) {
  var ForwardReplayControl = function (_Component) {
    inherits(ForwardReplayControl, _Component);

    function ForwardReplayControl(props, context) {
      classCallCheck(this, ForwardReplayControl);

      var _this = possibleConstructorReturn(this, (ForwardReplayControl.__proto__ || Object.getPrototypeOf(ForwardReplayControl)).call(this, props, context));

      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }

    createClass(ForwardReplayControl, [{
      key: 'handleClick',
      value: function handleClick() {
        var _props = this.props,
            actions = _props.actions,
            seconds = _props.seconds;
        // Depends mode to implement different actions

        if (mode === 'forward') {
          actions.forward(seconds);
        } else {
          actions.replay(seconds);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
            seconds = _props2.seconds,
            className = _props2.className;

        var classNames$$1 = ['video-react-control', 'video-react-button', 'video-react-icon'];
        classNames$$1.push('video-react-icon-' + mode + '-' + seconds, 'video-react-' + mode + '-control');
        if (this.props.className) {
          classNames$$1.push(this.props.className);
        }
        return React.createElement(
          'button',
          {
            ref: function ref(c) {
              _this2.button = c;
            },
            className: classNames$$1.join(' '),
            type: 'button',
            onClick: this.handleClick
          },
          React.createElement(
            'span',
            { className: 'video-react-control-text' },
            mode + ' ' + seconds + ' seconds'
          )
        );
      }
    }]);
    return ForwardReplayControl;
  }(Component);

  ForwardReplayControl.propTypes = propTypes$14;
  ForwardReplayControl.defaultProps = defaultProps$5;
  return ForwardReplayControl;
});

// Pass mode into parent function
var ForwardControl = ForwardReplayControl('forward');

ForwardControl.displayName = 'ForwardControl';

// Pass mode into parent function
var ReplayControl = ForwardReplayControl('replay');
ReplayControl.displayName = 'ReplayControl';

var propTypes$15 = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

var FullscreenToggle = function (_Component) {
  inherits(FullscreenToggle, _Component);

  function FullscreenToggle(props, context) {
    classCallCheck(this, FullscreenToggle);

    var _this = possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(FullscreenToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.toggleFullscreen(player);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          player = _props2.player,
          className = _props2.className;

      return React.createElement(
        'button',
        {
          className: classNames(className, {
            'video-react-icon-fullscreen-exit': player.isFullscreen,
            'video-react-icon-fullscreen': !player.isFullscreen
          }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
          ref: function ref(c) {
            _this2.button = c;
          },
          type: 'button',
          tabIndex: '0',
          onClick: this.handleClick
        },
        React.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Non-Fullscreen'
        )
      );
    }
  }]);
  return FullscreenToggle;
}(Component);

FullscreenToggle.propTypes = propTypes$15;
FullscreenToggle.displayName = 'FullscreenToggle';

var propTypes$16 = {
  player: PropTypes.object,
  className: PropTypes.string
};

function RemainingTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;

  var remainingTime = duration - currentTime;
  var formattedTime = formatTime(remainingTime);
  return React.createElement(
    'div',
    {
      className: classNames('video-react-remaining-time video-react-time-control video-react-control', className)
    },
    React.createElement(
      'div',
      {
        className: 'video-react-remaining-time-display',
        'aria-live': 'off'
      },
      React.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Remaining Time '
      ),
      '-',
      formattedTime
    )
  );
}

RemainingTimeDisplay.propTypes = propTypes$16;
RemainingTimeDisplay.displayName = 'RemainingTimeDisplay';

var propTypes$17 = {
  player: PropTypes.object,
  className: PropTypes.string
};

function CurrentTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;

  var formattedTime = formatTime(currentTime, duration);
  return React.createElement(
    'div',
    {
      className: classNames('video-react-current-time video-react-time-control video-react-control', className)
    },
    React.createElement(
      'div',
      {
        className: 'video-react-current-time-display',
        'aria-live': 'off'
      },
      React.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Current Time '
      ),
      formattedTime
    )
  );
}

CurrentTimeDisplay.propTypes = propTypes$17;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';

var propTypes$18 = {
  player: PropTypes.object,
  className: PropTypes.string
};

function DurationDisplay(_ref) {
  var duration = _ref.player.duration,
      className = _ref.className;

  var formattedTime = formatTime(duration);
  return React.createElement(
    'div',
    {
      className: classNames(className, 'video-react-duration video-react-time-control video-react-control')
    },
    React.createElement(
      'div',
      {
        className: 'video-react-duration-display',
        'aria-live': 'off'
      },
      React.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Duration Time '
      ),
      formattedTime
    )
  );
}

DurationDisplay.propTypes = propTypes$18;
DurationDisplay.displayName = 'DurationDisplay';

var propTypes$19 = {
  separator: PropTypes.string,
  className: PropTypes.string
};

function TimeDivider(_ref) {
  var separator = _ref.separator,
      className = _ref.className;

  var separatorText = separator || '/';
  return React.createElement(
    'div',
    {
      className: classNames('video-react-time-control video-react-time-divider', className),
      dir: 'ltr'
    },
    React.createElement(
      'div',
      null,
      React.createElement(
        'span',
        null,
        separatorText
      )
    )
  );
}

TimeDivider.propTypes = propTypes$19;
TimeDivider.displayName = 'TimeDivider';

var propTypes$22 = {
  tagName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string
};

var defaultProps$8 = {
  tagName: 'div'
};

var ClickableComponent = function (_Component) {
  inherits(ClickableComponent, _Component);

  function ClickableComponent(props, context) {
    classCallCheck(this, ClickableComponent);

    var _this = possibleConstructorReturn(this, (ClickableComponent.__proto__ || Object.getPrototypeOf(ClickableComponent)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleKeypress = _this.handleKeypress.bind(_this);
    return _this;
  }

  createClass(ClickableComponent, [{
    key: 'handleKeypress',
    value: function handleKeypress(event) {
      // Support Space (32) or Enter (13) key operation to fire a click event
      if (event.which === 32 || event.which === 13) {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var onClick = this.props.onClick;

      onClick(event);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeypress);
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeypress);
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Tag = this.props.tagName;
      var props = _extends({}, this.props);
      delete props.tagName;
      delete props.className;
      return React.createElement(Tag, _extends({
        className: classNames(this.props.className),
        role: 'button',
        tabIndex: '0',
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, props));
    }
  }]);
  return ClickableComponent;
}(Component);

ClickableComponent.propTypes = propTypes$22;
ClickableComponent.defaultProps = defaultProps$8;
ClickableComponent.displayName = 'ClickableComponent';

var propTypes$23 = {
  player: PropTypes.object,
  children: PropTypes.any
};

var Popup = function (_Component) {
  inherits(Popup, _Component);

  function Popup(props, context) {
    classCallCheck(this, Popup);

    var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(Popup, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return React.createElement(
        'div',
        {
          className: 'video-react-menu',
          onClick: this.handleClick
        },
        React.createElement(
          'div',
          { className: 'video-react-menu-content' },
          children
        )
      );
    }
  }]);
  return Popup;
}(Component);

Popup.propTypes = propTypes$23;
Popup.displayName = 'Popup';

var propTypes$21 = {
  inline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string
};

var defaultProps$7 = {
  inline: true
};

function PopupButton(props) {
  var inline = props.inline,
      className = props.className;

  var ps = _extends({}, props);
  delete ps.children;
  delete ps.inline;
  delete ps.className;
  return React.createElement(
    ClickableComponent,
    _extends({
      className: classNames(className, {
        'video-react-menu-button-inline': !!inline,
        'video-react-menu-button-popup': !inline
      }, 'video-react-control video-react-button video-react-menu-button')
    }, ps),
    React.createElement(Popup, props)
  );
}

PopupButton.propTypes = propTypes$21;
PopupButton.defaultProps = defaultProps$7;
PopupButton.displayName = 'PopupButton';

var propTypes$25 = {
  percentage: PropTypes.string,
  vertical: PropTypes.bool,
  className: PropTypes.string
};

var defaultProps$9 = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage,
      vertical = _ref.vertical,
      className = _ref.className;

  var style = {};
  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return React.createElement(
    'div',
    {
      className: classNames(className, 'video-react-volume-level'),
      style: style
    },
    React.createElement('span', { className: 'video-react-control-text' })
  );
}

VolumeLevel.propTypes = propTypes$25;
VolumeLevel.defaultProps = defaultProps$9;
VolumeLevel.displayName = 'VolumeLevel';

var propTypes$24 = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

var VolumeBar = function (_Component) {
  inherits(VolumeBar, _Component);

  function VolumeBar(props, context) {
    classCallCheck(this, VolumeBar);

    var _this = possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));

    _this.state = {
      percentage: '0%'
    };

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
    _this.checkMuted = _this.checkMuted.bind(_this);
    _this.getPercent = _this.getPercent.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(VolumeBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getPercent',
    value: function getPercent() {
      var player = this.props.player;

      if (player.muted) {
        return 0;
      }
      return player.volume;
    }
  }, {
    key: 'checkMuted',
    value: function checkMuted() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (player.muted) {
        actions.mute(false);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var actions = this.props.actions;

      this.checkMuted();
      var distance = this.slider.calculateDistance(event);
      actions.changeVolume(distance);
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions;

      this.checkMuted();
      actions.changeVolume(player.volume + 0.1);
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions;

      this.checkMuted();
      actions.changeVolume(player.volume - 0.1);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handlePercentageChange',
    value: function handlePercentageChange(percentage) {
      if (percentage !== this.state.percentage) {
        this.setState({
          percentage: percentage
        });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          player = _props4.player,
          className = _props4.className;


      var volume = (player.volume * 100).toFixed(2);
      return React.createElement(
        Slider,
        _extends({
          ref: function ref(c) {
            _this2.slider = c;
          },
          label: 'volume level',
          valuenow: volume,
          valuetext: volume + '%',
          onMouseMove: this.handleMouseMove,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          sliderActive: this.handleFocus,
          sliderInactive: this.handleBlur,
          getPercent: this.getPercent,
          onPercentageChange: this.handlePercentageChange,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        }, this.props, {
          className: classNames(className, 'video-react-volume-bar video-react-slider-bar')
        }),
        React.createElement(VolumeLevel, this.props)
      );
    }
  }]);
  return VolumeBar;
}(Component);

VolumeBar.propTypes = propTypes$24;
VolumeBar.displayName = 'VolumeBar';

var propTypes$20 = {
  player: PropTypes.object,
  actions: PropTypes.object,
  vertical: PropTypes.bool,
  className: PropTypes.string,
  alwaysShowVolume: PropTypes.bool
};

var defaultProps$6 = {
  vertical: false
};

var VolumeMenuButton = function (_Component) {
  inherits(VolumeMenuButton, _Component);

  function VolumeMenuButton(props, context) {
    classCallCheck(this, VolumeMenuButton);

    var _this = possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));

    _this.state = {
      active: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  createClass(VolumeMenuButton, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.mute(!player.muted);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({
        active: true
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        active: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          vertical = _props2.vertical,
          player = _props2.player,
          className = _props2.className;

      var inline = !vertical;
      var level = this.volumeLevel;
      return React.createElement(
        PopupButton,
        {
          className: classNames(className, {
            'video-react-volume-menu-button-vertical': vertical,
            'video-react-volume-menu-button-horizontal': !vertical,
            'video-react-vol-muted': player.muted,
            'video-react-vol-0': level === 0 && !player.muted,
            'video-react-vol-1': level === 1,
            'video-react-vol-2': level === 2,
            'video-react-vol-3': level === 3,
            'video-react-slider-active': this.props.alwaysShowVolume || this.state.active,
            'video-react-lock-showing': this.props.alwaysShowVolume || this.state.active
          }, 'video-react-volume-menu-button'),
          onClick: this.handleClick,
          inline: inline
        },
        React.createElement(VolumeBar, _extends({
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, this.props))
      );
    }
  }, {
    key: 'volumeLevel',
    get: function get$$1() {
      var _props$player = this.props.player,
          volume = _props$player.volume,
          muted = _props$player.muted;

      var level = 3;
      if (volume === 0 || muted) {
        level = 0;
      } else if (volume < 0.33) {
        level = 1;
      } else if (volume < 0.67) {
        level = 2;
      }
      return level;
    }
  }]);
  return VolumeMenuButton;
}(Component);

VolumeMenuButton.propTypes = propTypes$20;
VolumeMenuButton.defaultProps = defaultProps$6;
VolumeMenuButton.displayName = 'VolumeMenuButton';

var propTypes$28 = {
  children: PropTypes.any
};

var Menu = function (_Component) {
  inherits(Menu, _Component);

  function Menu(props, context) {
    classCallCheck(this, Menu);

    var _this = possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(Menu, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        {
          className: 'video-react-menu video-react-lock-showing',
          role: 'presentation',
          onClick: this.handleClick
        },
        React.createElement(
          'ul',
          { className: 'video-react-menu-content' },
          this.props.children
        )
      );
    }
  }]);
  return Menu;
}(Component);

Menu.propTypes = propTypes$28;
Menu.displayName = 'Menu';

var propTypes$29 = {
  item: PropTypes.object,
  index: PropTypes.number,
  activateIndex: PropTypes.number,
  onSelectItem: PropTypes.func
};

var MenuItem = function (_Component) {
  inherits(MenuItem, _Component);

  function MenuItem(props, context) {
    classCallCheck(this, MenuItem);

    var _this = possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(MenuItem, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          index = _props.index,
          onSelectItem = _props.onSelectItem;

      onSelectItem(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          item = _props2.item,
          index = _props2.index,
          activateIndex = _props2.activateIndex;

      return React.createElement(
        'li',
        {
          className: classNames({
            'video-react-menu-item': true,
            'video-react-selected': index === activateIndex
          }),
          onClick: this.handleClick
        },
        item.label,
        React.createElement('span', { className: 'video-react-control-text' })
      );
    }
  }]);
  return MenuItem;
}(Component);

MenuItem.propTypes = propTypes$29;
MenuItem.displayName = 'MenuItem';

var propTypes$27 = {
  inline: PropTypes.bool,
  items: PropTypes.array,
  className: PropTypes.string,
  onSelectItem: PropTypes.func,
  children: PropTypes.any,
  selectedIndex: PropTypes.number
};

var MenuButton = function (_Component) {
  inherits(MenuButton, _Component);

  function MenuButton(props, context) {
    classCallCheck(this, MenuButton);

    var _this = possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props, context));

    _this.state = {
      active: false,
      activateIndex: props.selectedIndex || 0
    };

    _this.commitSelection = _this.commitSelection.bind(_this);
    _this.activateMenuItem = _this.activateMenuItem.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleUpArrow = _this.handleUpArrow.bind(_this);
    _this.handleDownArrow = _this.handleDownArrow.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.handleReturn = _this.handleReturn.bind(_this);
    _this.handleTab = _this.handleTab.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleSelectItem = _this.handleSelectItem.bind(_this);
    _this.handleIndexChange = _this.handleIndexChange.bind(_this);
    return _this;
  }

  // componentDidUpdate(prevProps) {
  // }

  createClass(MenuButton, [{
    key: 'commitSelection',
    value: function commitSelection(index) {
      this.setState({
        activateIndex: index,
        active: false
      });
      this.handleIndexChange(index);
    }
  }, {
    key: 'activateMenuItem',
    value: function activateMenuItem(index) {
      this.setState({
        activateIndex: index
      });
      this.handleIndexChange(index);
    }
  }, {
    key: 'handleIndexChange',
    value: function handleIndexChange(index) {
      var onSelectItem = this.props.onSelectItem;

      onSelectItem(index);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({
        active: !this.state.active
      });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        active: false
      });
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'handleUpArrow',
    value: function handleUpArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex - 1;
        if (newIndex < 0) {
          newIndex = items.length ? items.length - 1 : 0;
        }
        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: 'handleDownArrow',
    value: function handleDownArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex + 1;
        if (newIndex >= items.length) {
          newIndex = 0;
        }
        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: 'handleTab',
    value: function handleTab(e) {
      if (this.state.active) {
        e.preventDefault();
        this.commitSelection(this.state.activateIndex);
      }
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(e) {
      e.preventDefault();
      if (this.state.active) {
        this.commitSelection(this.state.activateIndex);
      } else {
        this.setState({
          active: true
        });
      }
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape() {
      this.setState({
        active: false,
        activateIndex: 0
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      // Escape (27) key
      if (event.which === 27) {
        this.handleEscape(event);
      } else if (event.which === 9) {
        // Tab (9) key
        this.handleTab(event);
      } else if (event.which === 13) {
        // Enter (13) key
        this.handleReturn(event);
      } else if (event.which === 38) {
        // Up (38) key
        this.handleUpArrow(event);
      } else if (event.which === 40) {
        // Down (40) key press
        this.handleDownArrow(event);
      }
    }
  }, {
    key: 'handleSelectItem',
    value: function handleSelectItem(i) {
      this.commitSelection(i);
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }

      var items = this.props.items;

      return React.createElement(
        Menu,
        null,
        items.map(function (item, i) {
          return React.createElement(MenuItem, {
            item: item,
            index: i,
            onSelectItem: _this2.handleSelectItem,
            activateIndex: _this2.state.activateIndex,
            key: 'item-' + i++
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          inline = _props.inline,
          className = _props.className;


      return React.createElement(
        ClickableComponent,
        {
          className: classNames(className, {
            'video-react-menu-button-inline': !!inline,
            'video-react-menu-button-popup': !inline,
            'video-react-menu-button-active': this.state.active
          }, 'video-react-control video-react-button video-react-menu-button'),
          role: 'presentation',
          tabIndex: '0',
          ref: function ref(c) {
            _this3.menuButton = c;
          },
          onClick: this.handleClick,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        },
        this.props.children,
        this.renderMenu()
      );
    }
  }]);
  return MenuButton;
}(Component);

MenuButton.propTypes = propTypes$27;
MenuButton.displayName = 'MenuButton';

var propTypes$26 = {
  player: PropTypes.object,
  actions: PropTypes.object,
  rates: PropTypes.array,
  className: PropTypes.string
};

var defaultProps$10 = {
  rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
};

var PlaybackRateMenuButton = function (_Component) {
  inherits(PlaybackRateMenuButton, _Component);

  function PlaybackRateMenuButton(props, context) {
    classCallCheck(this, PlaybackRateMenuButton);

    var _this = possibleConstructorReturn(this, (PlaybackRateMenuButton.__proto__ || Object.getPrototypeOf(PlaybackRateMenuButton)).call(this, props, context));

    _this.handleSelectItem = _this.handleSelectItem.bind(_this);
    return _this;
  }

  createClass(PlaybackRateMenuButton, [{
    key: 'handleSelectItem',
    value: function handleSelectItem(index) {
      var _props = this.props,
          rates = _props.rates,
          actions = _props.actions;

      if (index >= 0 && index < rates.length) {
        actions.changeRate(rates[index]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          rates = _props2.rates,
          player = _props2.player;

      var items = rates.map(function (rate) {
        return {
          label: rate + 'x',
          value: rate
        };
      });
      var selectedIndex = rates.indexOf(player.playbackRate) || 0;

      return React.createElement(
        MenuButton,
        {
          className: classNames('video-react-playback-rate', this.props.className),
          onSelectItem: this.handleSelectItem,
          items: items,
          selectedIndex: selectedIndex
        },
        React.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Playback Rate'
        ),
        React.createElement(
          'div',
          { className: 'video-react-playback-rate-value' },
          player.playbackRate.toFixed(2),
          'x'
        )
      );
    }
  }]);
  return PlaybackRateMenuButton;
}(Component);

PlaybackRateMenuButton.propTypes = propTypes$26;
PlaybackRateMenuButton.defaultProps = defaultProps$10;
PlaybackRateMenuButton.displayName = 'PlaybackRateMenuButton';

var propTypes$7 = {
  children: PropTypes.any,
  autoHide: PropTypes.bool,
  disableDefaultControls: PropTypes.bool,
  disableCompletely: PropTypes.bool,
  className: PropTypes.string
};

var defaultProps$4 = {
  autoHide: true,
  disableCompletely: false
};

var ControlBar = function (_Component) {
  inherits(ControlBar, _Component);

  function ControlBar(props) {
    classCallCheck(this, ControlBar);

    var _this = possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));

    _this.getDefaultChildren = _this.getDefaultChildren.bind(_this);
    _this.getFullChildren = _this.getFullChildren.bind(_this);
    return _this;
  }

  createClass(ControlBar, [{
    key: 'getDefaultChildren',
    value: function getDefaultChildren() {
      return [React.createElement(PlayToggle, _extends({}, this.props, {
        key: 'play-toggle',
        order: 1
      })), React.createElement(VolumeMenuButton, _extends({}, this.props, {
        key: 'volume-menu-button',
        order: 4
      })), React.createElement(CurrentTimeDisplay, _extends({}, this.props, {
        key: 'current-time-display',
        order: 5.1
      })), React.createElement(TimeDivider, _extends({}, this.props, {
        key: 'time-divider',
        order: 5.2
      })), React.createElement(DurationDisplay, _extends({}, this.props, {
        key: 'duration-display',
        order: 5.3
      })), React.createElement(ProgressControl, _extends({}, this.props, {
        key: 'progress-control',
        order: 6
      })), React.createElement(FullscreenToggle, _extends({}, this.props, {
        key: 'fullscreen-toggle',
        order: 8
      }))];
    }
  }, {
    key: 'getFullChildren',
    value: function getFullChildren() {
      return [React.createElement(PlayToggle, _extends({}, this.props, {
        key: 'play-toggle',
        order: 1
      })), React.createElement(ReplayControl, _extends({}, this.props, {
        key: 'replay-control',
        order: 2
      })), React.createElement(ForwardControl, _extends({}, this.props, {
        key: 'forward-control',
        order: 3
      })), React.createElement(VolumeMenuButton, _extends({}, this.props, {
        key: 'volume-menu-button',
        order: 4
      })), React.createElement(CurrentTimeDisplay, _extends({}, this.props, {
        key: 'current-time-display',
        order: 5
      })), React.createElement(TimeDivider, _extends({}, this.props, {
        key: 'time-divider',
        order: 6
      })), React.createElement(DurationDisplay, _extends({}, this.props, {
        key: 'duration-display',
        order: 7
      })), React.createElement(ProgressControl, _extends({}, this.props, {
        key: 'progress-control',
        order: 8
      })), React.createElement(RemainingTimeDisplay, _extends({}, this.props, {
        key: 'remaining-time-display',
        order: 9
      })), React.createElement(PlaybackRateMenuButton, _extends({}, this.props, {
        rates: [1, 1.25, 1.5, 2],
        key: 'playback-rate',
        order: 10
      })), React.createElement(FullscreenToggle, _extends({}, this.props, {
        key: 'fullscreen-toggle',
        order: 11
      }))];
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      var children = React.Children.toArray(this.props.children);
      var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
      return mergeAndSortChildren(defaultChildren, children, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHide = _props.autoHide,
          className = _props.className,
          disableCompletely = _props.disableCompletely;

      var children = this.getChildren();

      return disableCompletely ? null : React.createElement(
        'div',
        {
          className: classNames('video-react-control-bar', {
            'video-react-control-bar-auto-hide': autoHide
          }, className)
        },
        children
      );
    }
  }]);
  return ControlBar;
}(Component);

ControlBar.propTypes = propTypes$7;
ControlBar.defaultProps = defaultProps$4;
ControlBar.displayName = 'ControlBar';

var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
// const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */
var IS_IPAD = /iPad/i.test(USER_AGENT);

// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
var IS_IPOD = /iPod/i.test(USER_AGENT);
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

var propTypes = {
  children: PropTypes.any,

  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fluid: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  videoId: PropTypes.string,

  startTime: PropTypes.number,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),

  onLoadStart: PropTypes.func,
  onWaiting: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onPlaying: PropTypes.func,
  onEnded: PropTypes.func,
  onSeeking: PropTypes.func,
  onSeeked: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onProgress: PropTypes.func,
  onDurationChange: PropTypes.func,
  onError: PropTypes.func,
  onSuspend: PropTypes.func,
  onAbort: PropTypes.func,
  onEmptied: PropTypes.func,
  onStalled: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  onLoadedData: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onRateChange: PropTypes.func,
  onVolumeChange: PropTypes.func,

  store: PropTypes.object
};

var defaultProps = {
  fluid: true,
  muted: false,
  playsInline: false,
  aspectRatio: 'auto'
};

var Player = function (_Component) {
  inherits(Player, _Component);

  function Player(props) {
    classCallCheck(this, Player);

    var _this = possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.controlsHideTimer = null;

    _this.video = null; // the Video component
    _this.manager = new Manager(props.store);
    _this.actions = _this.manager.getActions();
    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));

    _this.getStyle = _this.getStyle.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.getChildren = _this.getChildren.bind(_this);
    _this.handleMouseMove = throttle(_this.handleMouseMove.bind(_this), 250);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.startControlsTimer = _this.startControlsTimer.bind(_this);
    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);

      fullscreen.addEventListener(this.handleFullScreenChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove event listener
      window.removeEventListener('resize', this.handleResize);
      fullscreen.removeEventListener(this.handleFullScreenChange);
      if (this.controlsHideTimer) {
        window.clearTimeout(this.controlsHideTimer);
      }
    }
  }, {
    key: 'getDefaultChildren',
    value: function getDefaultChildren(props, fullProps) {
      var _this2 = this;

      return [React.createElement(Video, _extends({
        ref: function ref(c) {
          _this2.video = c;
          _this2.manager.video = _this2.video;
        },
        key: 'video',
        order: 0.0
      }, fullProps)), React.createElement(PosterImage, _extends({
        key: 'poster-image',
        order: 1.0
      }, props)), React.createElement(LoadingSpinner, _extends({
        key: 'loading-spinner',
        order: 2.0
      }, props)), React.createElement(Bezel, _extends({
        key: 'bezel',
        order: 3.0
      }, props)), React.createElement(BigPlayButton, _extends({
        key: 'big-play-button',
        order: 4.0
      }, props)), React.createElement(ControlBar, _extends({
        key: 'control-bar',
        order: 5.0
      }, props)), React.createElement(Shortcut, _extends({
        key: 'shortcut',
        order: 99.0
      }, props))];
    }
  }, {
    key: 'getChildren',
    value: function getChildren(props) {
      var propsWithoutChildren = _extends({}, props, {
        children: null
      });
      var children = React.Children.toArray(this.props.children).filter(function (e) {
        return !isVideoChild(e);
      });
      var defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
      return mergeAndSortChildren(defaultChildren, children, propsWithoutChildren);
    }
  }, {
    key: 'setWidthOrHeight',
    value: function setWidthOrHeight(style, name, value) {
      var styleVal = void 0;
      if (typeof value === 'string') {
        if (value === 'auto') {
          styleVal = 'auto';
        } else if (value.match(/\d+%/)) {
          styleVal = value;
        }
      } else if (typeof value === 'number') {
        styleVal = value + 'px';
      }
      Object.assign(style, defineProperty({}, name, styleVal));
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var fluid = this.props.fluid;

      var _manager$getState = this.manager.getState(),
          player = _manager$getState.player;

      var style = {};
      var width = void 0;
      var height = void 0;
      var aspectRatio = void 0;

      // The aspect ratio is either used directly or to calculate width and height.
      if (this.props.aspectRatio !== undefined && this.props.aspectRatio !== 'auto') {
        // Use any aspectRatio that's been specifically set
        aspectRatio = this.props.aspectRatio;
      } else if (player.videoWidth) {
        // Otherwise try to get the aspect ratio from the video metadata
        aspectRatio = player.videoWidth + ':' + player.videoHeight;
      } else {
        // Or use a default. The video element's is 2:1, but 16:9 is more common.
        aspectRatio = '16:9';
      }

      // Get the ratio as a decimal we can use to calculate dimensions
      var ratioParts = aspectRatio.split(':');
      var ratioMultiplier = ratioParts[1] / ratioParts[0];

      if (this.props.width !== undefined) {
        // Use any width that's been specifically set
        width = this.props.width;
      } else if (this.props.height !== undefined) {
        // Or calulate the width from the aspect ratio if a height has been set
        width = this.props.height / ratioMultiplier;
      } else {
        // Or use the video's metadata, or use the video el's default of 300
        width = player.videoWidth || 400;
      }

      if (this.props.height !== undefined) {
        // Use any height that's been specifically set
        height = this.props.height;
      } else {
        // Otherwise calculate the height from the ratio and the width
        height = width * ratioMultiplier;
      }

      if (fluid) {
        style.paddingTop = ratioMultiplier * 100 + '%';
      } else {
        // If Width contains "auto", set "auto" in style
        this.setWidthOrHeight(style, 'width', width);
        this.setWidthOrHeight(style, 'height', height);
      }

      return style;
    }

    // get redux state
    // { player, operation }

  }, {
    key: 'getState',
    value: function getState() {
      return this.manager.getState();
    }

    // get playback rate

  }, {
    key: 'play',


    // play the video
    value: function play() {
      this.video.play();
    }

    // pause the video

  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }

    // Change the video source and re-load the video:

  }, {
    key: 'load',
    value: function load() {
      this.video.load();
    }

    // Add a new text track to the video

  }, {
    key: 'addTextTrack',
    value: function addTextTrack() {
      var _video;

      (_video = this.video).addTextTrack.apply(_video, arguments);
    }

    // Check if your browser can play different types of video:

  }, {
    key: 'canPlayType',
    value: function canPlayType() {
      var _video2;

      (_video2 = this.video).canPlayType.apply(_video2, arguments);
    }

    // seek video by time

  }, {
    key: 'seek',
    value: function seek(time) {
      this.video.seek(time);
    }

    // jump forward x seconds

  }, {
    key: 'forward',
    value: function forward(seconds) {
      this.video.forward(seconds);
    }

    // jump back x seconds

  }, {
    key: 'replay',
    value: function replay(seconds) {
      this.video.replay(seconds);
    }

    // enter or exist full screen

  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      this.video.toggleFullscreen();
    }

    // subscribe to player state change

  }, {
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener) {
      return this.manager.subscribeToPlayerStateChange(listener);
    }

    // player resize

  }, {
    key: 'handleResize',
    value: function handleResize() {}
  }, {
    key: 'handleFullScreenChange',
    value: function handleFullScreenChange() {
      this.actions.handleFullscreenChange(fullscreen.isFullscreen);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.startControlsTimer();
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove() {
      this.startControlsTimer();
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown() {
      this.startControlsTimer();
    }
  }, {
    key: 'startControlsTimer',
    value: function startControlsTimer() {
      var _this3 = this;

      this.actions.userActivate(true);
      clearTimeout(this.controlsHideTimer);
      this.controlsHideTimer = setTimeout(function () {
        _this3.actions.userActivate(false);
      }, 3000);
    }
  }, {
    key: 'handleStateChange',
    value: function handleStateChange(state, prevState) {
      if (state.isFullscreen !== prevState.isFullscreen) {
        this.handleResize();
      }
      this.forceUpdate(); // re-render
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.actions.activate(true);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.actions.activate(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var fluid = this.props.fluid;

      var _manager$getState2 = this.manager.getState(),
          player = _manager$getState2.player;

      var paused = player.paused,
          hasStarted = player.hasStarted,
          waiting = player.waiting,
          seeking = player.seeking,
          isFullscreen = player.isFullscreen,
          userActivity = player.userActivity;


      var props = _extends({}, this.props, {
        player: player,
        actions: this.actions,
        manager: this.manager,
        store: this.manager.store,
        video: this.video ? this.video.video : null
      });
      var children = this.getChildren(props);

      return React.createElement(
        'div',
        {
          className: classNames({
            'video-react-controls-enabled': true,
            'video-react-has-started': hasStarted,
            'video-react-paused': paused,
            'video-react-playing': !paused,
            'video-react-waiting': waiting,
            'video-react-seeking': seeking,
            'video-react-fluid': fluid,
            'video-react-fullscreen': isFullscreen,
            'video-react-user-inactive': !userActivity,
            'video-react-user-active': userActivity,
            'video-react-workinghover': !IS_IOS
          }, 'video-react', this.props.className),
          style: this.getStyle(),
          ref: function ref(c) {
            _this4.manager.rootElement = c;
          },
          role: 'region',
          onTouchStart: this.handleMouseDown,
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          tabIndex: '-1'
        },
        children
      );
    }
  }, {
    key: 'playbackRate',
    get: function get$$1() {
      return this.video.playbackRate;
    }

    // set playback rate
    // speed of video
    ,
    set: function set$$1(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: 'muted',
    get: function get$$1() {
      return this.video.muted;
    },
    set: function set$$1(val) {
      this.video.muted = val;
    }
  }, {
    key: 'volume',
    get: function get$$1() {
      return this.video.volume;
    },
    set: function set$$1(val) {
      this.video.volume = val;
    }

    // video width

  }, {
    key: 'videoWidth',
    get: function get$$1() {
      return this.video.videoWidth;
    }

    // video height

  }, {
    key: 'videoHeight',
    get: function get$$1() {
      return this.video.videoHeight;
    }
  }]);
  return Player;
}(Component);

Player.contextTypes = { store: PropTypes.object };
Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
Player.displayName = 'Player';

var PlaybackRate = function (_Component) {
  inherits(PlaybackRate, _Component);

  function PlaybackRate(props, context) {
    classCallCheck(this, PlaybackRate);

    var _this = possibleConstructorReturn(this, (PlaybackRate.__proto__ || Object.getPrototypeOf(PlaybackRate)).call(this, props, context));

    deprecatedWarning('PlaybackRate', 'PlaybackRateMenuButton');
    return _this;
  }

  createClass(PlaybackRate, [{
    key: 'render',
    value: function render() {
      return React.createElement(PlaybackRateMenuButton, this.props);
    }
  }]);
  return PlaybackRate;
}(Component);

PlaybackRate.displayName = 'PlaybackRate';

export { Player, Video, BigPlayButton, LoadingSpinner, PosterImage, Bezel, Shortcut, ControlBar, PlayToggle, ForwardControl, ReplayControl, FullscreenToggle, ProgressControl, SeekBar, Slider, PlayProgressBar, LoadProgressBar, MouseTimeDisplay, RemainingTimeDisplay, CurrentTimeDisplay, DurationDisplay, TimeDivider, VolumeMenuButton, PlaybackRateMenuButton, PlaybackRate, playerActions, videoActions, playerReducer, operationReducer };
//# sourceMappingURL=video-react.es.js.map
