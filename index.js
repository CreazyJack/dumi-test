'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');
var fi = require('react-icons/fi');
var reactTransitionGroup = require('react-transition-group');
var axios = require('axios');
var ai = require('react-icons/ai');
var vsc = require('react-icons/vsc');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
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
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var handleContent = function handleContent(children) {
  var nodes = React.Children.map(children, function (child, index) {
    if (child) {
      var _child$type$displayNa, _child$type;

      var childName = (_child$type$displayNa = child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) !== null && _child$type$displayNa !== void 0 ? _child$type$displayNa : '';
      if (childName === 'SubMenu') return child;

      if (childName === 'MenuItem') {
        var node = /*#__PURE__*/React.cloneElement(child, _objectSpread2({
          index: String(index)
        }, child.props));
        return node;
      }

      throw Error('Error: Menu has a child which is not MenuItem or SubMenu');
    }

    return null;
  });
  return nodes;
};

var useMenu = function useMenu(props) {
  var _ref, _props$activeIndex;

  var mode = props.mode,
      style = props.style;
  var children = handleContent(props.children);

  var _useState = React.useState((_ref = (_props$activeIndex = props.activeIndex) !== null && _props$activeIndex !== void 0 ? _props$activeIndex : props.defaultIndex) !== null && _ref !== void 0 ? _ref : ''),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var className = classNames__default['default']('sp-menu', props.className, _defineProperty({}, "menu-".concat(mode), mode)); // this onSelect will be used by menuItem

  var onSelect = function onSelect(selectedKey) {
    if (props.activeIndex == null) setActiveIndex(selectedKey);
    if (props.onSelect) props.onSelect(selectedKey);
  };

  return {
    children: children,
    className: className,
    style: style,
    onSelect: onSelect,
    activeIndex: activeIndex
  };
};

/*
 * @Description: menu context
 * @Date: 2021-05-04 12:06:18
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:03:41
 */
var MenuContext = /*#__PURE__*/React.createContext({});

var handleContent$1 = function handleContent(children) {
  return children;
};

var useMenuItem = function useMenuItem(props) {
  var _classNames;

  var disabled = props.disabled,
      style = props.style,
      _props$index = props.index,
      index = _props$index === void 0 ? '' : _props$index;

  var _useContext = React.useContext(MenuContext),
      mode = _useContext.mode,
      activeIndex = _useContext.activeIndex,
      onSelect = _useContext.onSelect;

  var children = handleContent$1(props.children);
  var isActive = activeIndex === index;
  var className = classNames__default['default']('sp-menu-item', props.className, (_classNames = {
    'menu-item-disabled': disabled
  }, _defineProperty(_classNames, "menu-item-".concat(mode), mode), _defineProperty(_classNames, 'menu-item-active', !disabled && isActive), _classNames));

  var onClick = function onClick() {
    if (disabled) return;
    if (props.onClick) props.onClick(index);
    if (onSelect) onSelect(index);
  };

  return {
    children: children,
    className: className,
    style: style,
    index: index,
    onClick: onClick
  };
};

var _excluded = ["children"];

var MenuItem = function MenuItem(props) {
  var _useMenuItem = useMenuItem(props),
      children = _useMenuItem.children,
      params = _objectWithoutProperties(_useMenuItem, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("li", _objectSpread2({}, params), children);
};

MenuItem.displayName = 'MenuItem';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n * @Description: zoom transition style\n * @Date: 2021-05-08 11:06:16\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-15 10:57:52\n */\n.zoom-in-top-enter {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-top-enter-active {\n  opacity: 1;\n  transform: scaleY(1);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-top-exit {\n  opacity: 1;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-top-exit-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-right-enter {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-right-enter-active {\n  opacity: 1;\n  transform: scaleY(1);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-right-exit {\n  opacity: 1;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-right-exit-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-bottom-enter {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-bottom-enter-active {\n  opacity: 1;\n  transform: scaleY(1);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-bottom-exit {\n  opacity: 1;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-bottom-exit-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-left-enter {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-left-enter-active {\n  opacity: 1;\n  transform: scaleY(1);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-left-exit {\n  opacity: 1;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n.zoom-in-left-exit-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: center top;\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n";
styleInject(css_248z);

/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 11:06:22
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 20:03:09
 */

var ZoomTransition = function ZoomTransition(props) {
  var children = props.children,
      direction = props.direction,
      active = props.active,
      unmountOnExit = props.unmountOnExit,
      timeout = props.timeout,
      wrapper = props.wrapper;
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.CSSTransition, {
    in: active,
    timeout: timeout !== null && timeout !== void 0 ? timeout : 300,
    classNames: "zoom-in-".concat(direction !== null && direction !== void 0 ? direction : 'top'),
    unmountOnExit: unmountOnExit !== null && unmountOnExit !== void 0 ? unmountOnExit : true
  }, wrapper ? /*#__PURE__*/React__default['default'].createElement("div", null, children) : children);
};

var css_248z$1 = "/*\n * @Description: rotate transition style\n * @Date: 2021-05-08 12:36:41\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-08 12:42:14\n */\n.rotate-transition-enter {\n  transform: rotate(0deg);\n}\n.rotate-transition-enter-active {\n  transform: rotate(180deg);\n}\n.rotate-transition-enter-done {\n  transform: rotate(180deg);\n}\n.rotate-transition-exit {\n  transform: rotate(180deg);\n}\n.rotate-transition-exit-active {\n  transform: rotate(0deg);\n}\n.rotate-transition-exit-done {\n  transform: rotate(0deg);\n}\n";
styleInject(css_248z$1);

/*
 * @Description: rotate transition
 * @Date: 2021-05-08 12:00:53
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:27:37
 */

var RotateTransition = function RotateTransition(props) {
  var children = props.children,
      active = props.active,
      timeout = props.timeout,
      wrapper = props.wrapper;
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.CSSTransition, {
    in: active,
    timeout: timeout !== null && timeout !== void 0 ? timeout : 300,
    classNames: "rotate-transition"
  }, wrapper ? /*#__PURE__*/React__default['default'].createElement("div", null, children) : children);
};

var handleContent$2 = function handleContent(children, title) {
  var nodes = React.Children.map(children, function (child, index) {
    if (child) {
      var _child$type$displayNa, _child$type;

      var childName = (_child$type$displayNa = child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) !== null && _child$type$displayNa !== void 0 ? _child$type$displayNa : '';

      if (childName === 'MenuItem') {
        var node = /*#__PURE__*/React.cloneElement(child, _objectSpread2({
          index: "".concat(title, "-").concat(index)
        }, child.props));
        return node;
      }

      throw Error('Error: SubMenu has a child which is not MenuItem');
    }

    return null;
  });
  return nodes;
};

var useSubMenu = function useSubMenu(props) {
  var _classNames;

  var _useContext = React.useContext(MenuContext),
      mode = _useContext.mode,
      activeIndex = _useContext.activeIndex,
      defaultOpenIndex = _useContext.defaultOpenIndex;

  var children = handleContent$2(props.children, props.title);
  var isVisible = false;
  var isActive = false;
  React.Children.forEach(children, function (child) {
    if ((child === null || child === void 0 ? void 0 : child.props.index) === defaultOpenIndex) isVisible = true;
    if ((child === null || child === void 0 ? void 0 : child.props.index) === activeIndex) isActive = true;
  });

  var _useState = React.useState(isVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var isHorizontal = mode === 'horizontal';
  var boxClass = classNames__default['default']('sp-sub-menu', 'sp-menu-item', props.className, (_classNames = {}, _defineProperty(_classNames, "menu-item-".concat(mode), mode), _defineProperty(_classNames, 'menu-item-active', isActive), _classNames));
  var ulClass = classNames__default['default']('sub-menu-ul', {
    'sub-menu-vertical': mode === 'vertical'
  });
  var timer;
  var onUlMouseEnter = isHorizontal ? function (e) {
    e.stopPropagation();
    clearTimeout(timer); // setVisible(true);

    timer = setTimeout(function () {
      setVisible(true);
    }, 100);
  } : undefined;
  var onUlMouseLeave = isHorizontal ? function (e) {
    e.stopPropagation();
    clearTimeout(timer); // setVisible(false);

    timer = setTimeout(function () {
      setVisible(false);
    }, 100);
  } : undefined;
  var onTitleClick = isHorizontal ? undefined : function (e) {
    e.stopPropagation();
    setVisible(!visible); // setTimeout(() => {
    //   setVisible(!visible);
    // }, 300);
  };
  return {
    children: children,
    visible: visible,
    boxClass: boxClass,
    ulClass: ulClass,
    onTitleClick: onTitleClick,
    onUlHover: {
      onMouseEnter: onUlMouseEnter,
      onMouseLeave: onUlMouseLeave
    }
  };
};

var SubMenu = function SubMenu(props) {
  var _useSubMenu = useSubMenu(props),
      children = _useSubMenu.children,
      onUlHover = _useSubMenu.onUlHover,
      onTitleClick = _useSubMenu.onTitleClick,
      boxClass = _useSubMenu.boxClass,
      ulClass = _useSubMenu.ulClass,
      visible = _useSubMenu.visible;

  return /*#__PURE__*/React__default['default'].createElement("li", _objectSpread2({
    className: boxClass
  }, onUlHover), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sub-menu-title",
    onClick: onTitleClick
  }, /*#__PURE__*/React__default['default'].createElement("div", null, props.title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sub-menu-title-suffix"
  }, /*#__PURE__*/React__default['default'].createElement(RotateTransition, {
    active: visible
  }, /*#__PURE__*/React__default['default'].createElement(fi.FiChevronDown, {
    className: "sub-menu-title-suffix-icon"
  })))), /*#__PURE__*/React__default['default'].createElement(ZoomTransition, {
    active: visible
  }, /*#__PURE__*/React__default['default'].createElement("ul", {
    className: ulClass
  }, children)));
};

SubMenu.displayName = 'SubMenu';

var css_248z$2 = "/*\n * @Description: menu style\n * @Date: 2021-04-30 16:56:30\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-15 11:56:30\n */\n/*\n * @Description: variables and configurable settings\n * @Date: 2021-04-27 15:09:30\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-06-25 11:13:25\n */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 14px;\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n  color: #212529;\n  font-weight: 400;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  line-height: 1.5;\n  text-align: null;\n  background-color: #fff;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 2.5rem;\n}\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 2rem;\n}\nh3 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.75rem;\n}\nh4 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.5rem;\n}\nh5 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.25rem;\n}\nh6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul {\n  padding-left: 2rem;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 1px;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n  color: inherit;\n  opacity: 0.25;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-size: 1em;\n  /* 2 */\n  font-family: monospace;\n  /* 1 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  color: #0f59a4;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #09335e;\n  text-decoration: underline;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n  border-bottom: none;\n  /* 1 */\n  cursor: help;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  color: #d63384;\n  font-size: 0.875em;\n  /* 2 */\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n  /* 1 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  /* 2 */\n  font-size: 100%;\n  /* 1 */\n  font-family: inherit;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  outline: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  display: table;\n  /* 1 */\n  box-sizing: border-box;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type='search'] {\n  outline-offset: -2px;\n  /* 2 */\n  -webkit-appearance: textfield;\n  /* 1 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  font: inherit;\n  /* 2 */\n  -webkit-appearance: button;\n  /* 1 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n/*\n * @Description: menu item style\n * @Date: 2021-05-04 14:16:28\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-15 11:45:02\n */\n.menu-item-base {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  justify-content: center;\n  white-space: nowrap;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;\n}\n.menu-item-base:hover {\n  text-decoration: none;\n}\n.sp-menu {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  list-style: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sp-menu.menu-horizontal {\n  flex-direction: row;\n  border-bottom: 1px solid #eaeaea;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.sp-menu.menu-vertical {\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #eaeaea;\n}\n.sp-menu .sp-menu-item {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  justify-content: center;\n  white-space: nowrap;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;\n}\n.sp-menu .sp-menu-item:hover {\n  text-decoration: none;\n}\n.sp-menu .sp-menu-item.menu-item-disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.sp-menu .sp-menu-item.menu-item-horizontal {\n  flex: 0;\n  padding: 0 1rem;\n  align-items: center;\n  border-bottom: 2px solid transparent;\n}\n.sp-menu .sp-menu-item.menu-item-horizontal.menu-item-active,\n.sp-menu .sp-menu-item.menu-item-horizontal:focus,\n.sp-menu .sp-menu-item.menu-item-horizontal:hover {\n  color: #0f59a4;\n  border-bottom: 2px solid #0f59a4;\n}\n.sp-menu .sp-menu-item.menu-item-vertical {\n  flex: 1;\n  padding: 0.5rem 1rem;\n  align-items: flex-start;\n  border-left: 2px solid transparent;\n}\n.sp-menu .sp-menu-item.menu-item-vertical.menu-item-active,\n.sp-menu .sp-menu-item.menu-item-vertical:focus,\n.sp-menu .sp-menu-item.menu-item-vertical:hover {\n  color: #0f59a4;\n  border-left: 2px solid #0f59a4;\n}\n.sp-menu .sp-sub-menu {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  justify-content: center;\n  white-space: nowrap;\n  height: 2.5rem;\n  cursor: pointer;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;\n  position: relative;\n}\n.sp-menu .sp-sub-menu:hover {\n  text-decoration: none;\n}\n.sp-menu .sp-sub-menu .sub-menu-title {\n  display: flex;\n  flex: 1;\n  line-height: 100%;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n}\n.sp-menu .sp-sub-menu .sub-menu-title .sub-menu-title-suffix {\n  margin-left: 0.3rem;\n  padding-top: 0.25rem;\n}\n.sp-menu .sp-sub-menu .sub-menu-title .sub-menu-title-suffix .sub-menu-title-suffix-icon {\n  transition: 0.3s;\n}\n.sp-menu .sp-sub-menu .sub-menu-ul {\n  position: absolute;\n  top: 3rem;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  min-width: 120px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);\n  flex-direction: column;\n  z-index: 1;\n}\n.sp-menu .sp-sub-menu .sub-menu-ul.sub-menu-vertical {\n  position: relative;\n  top: 0.5rem;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  min-width: 120px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);\n}\n.sp-menu .sp-sub-menu .sub-menu-ul .sp-menu-item {\n  display: flex;\n  align-items: flex-start;\n  height: 2rem;\n  padding: 0.1rem 1rem;\n  border: 0;\n  color: rgba(0, 0, 0, 0.85);\n  transition: 0.3s;\n}\n.sp-menu .sp-sub-menu .sub-menu-ul .sp-menu-item.menu-item-active {\n  color: #0f59a4;\n  background-color: #e8f2fd;\n}\n.sp-menu .sp-sub-menu .sub-menu-ul .sp-menu-item:hover {\n  border: 0;\n  color: #0f59a4;\n}\n";
styleInject(css_248z$2);

var _excluded$1 = ["children", "onSelect", "activeIndex"];

var Menu = function Menu(props) {
  var _useMenu = useMenu(props),
      children = _useMenu.children,
      onSelect = _useMenu.onSelect,
      activeIndex = _useMenu.activeIndex,
      params = _objectWithoutProperties(_useMenu, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement("ul", _objectSpread2(_objectSpread2({}, params), {}, {
    "data-testid": "test-menu"
  }), /*#__PURE__*/React__default['default'].createElement(MenuContext.Provider, {
    value: {
      mode: props.mode,
      activeIndex: activeIndex,
      defaultOpenIndex: props.defaultOpenIndex,
      onSelect: onSelect
    }
  }, children));
};

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.defaultProps = {
  mode: 'horizontal'
};

var handleContent$3 = function handleContent(children) {
  if (children) return children;
  throw Error('Button should have children which is not null or undefined');
};

var useButton = function useButton(props) {
  var _classNames;

  var type = props.type,
      size = props.size,
      disabled = props.disabled,
      danger = props.danger,
      onClick = props.onClick,
      target = props.target,
      href = props.href,
      style = props.style;
  var children = handleContent$3(props.children);
  var isLink = type === 'link';
  var className = classNames__default['default']('sp-btn', props.className, (_classNames = {}, _defineProperty(_classNames, "btn-".concat(type), type), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, 'btn-disabled', disabled), _defineProperty(_classNames, 'btn-danger', danger), _defineProperty(_classNames, 'btn-disabled-link', isLink && disabled), _classNames));
  return {
    className: className,
    children: children,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    target: isLink ? target : undefined,
    href: disabled ? undefined : href,
    style: style
  };
};

var css_248z$3 = "/*\n * @Description: button style\n * @Date: 2021-05-13 15:54:44\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-17 09:19:17\n */\n/*\n * @Description: variables and configurable settings\n * @Date: 2021-04-27 15:09:30\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-06-25 11:13:25\n */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 14px;\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n  color: #212529;\n  font-weight: 400;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  line-height: 1.5;\n  text-align: null;\n  background-color: #fff;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 2.5rem;\n}\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 2rem;\n}\nh3 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.75rem;\n}\nh4 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.5rem;\n}\nh5 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.25rem;\n}\nh6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul {\n  padding-left: 2rem;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 1px;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n  color: inherit;\n  opacity: 0.25;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-size: 1em;\n  /* 2 */\n  font-family: monospace;\n  /* 1 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  color: #0f59a4;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #09335e;\n  text-decoration: underline;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n  border-bottom: none;\n  /* 1 */\n  cursor: help;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  color: #d63384;\n  font-size: 0.875em;\n  /* 2 */\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n  /* 1 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  /* 2 */\n  font-size: 100%;\n  /* 1 */\n  font-family: inherit;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  outline: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  display: table;\n  /* 1 */\n  box-sizing: border-box;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type='search'] {\n  outline-offset: -2px;\n  /* 2 */\n  -webkit-appearance: textfield;\n  /* 1 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  font: inherit;\n  /* 2 */\n  -webkit-appearance: button;\n  /* 1 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n/*\n * @Description: button mixin style\n * @Date: 2021-05-13 15:54:44\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-14 15:54:52\n */\n.sp-btn {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  color: #212529;\n  background-color: #fff;\n  border-color: #eaeaea;\n  position: relative;\n  display: inline-block;\n  line-height: 1.5;\n  vertical-align: middle;\n  text-align: center;\n  background-image: none;\n  font-weight: 400;\n  white-space: nowrap;\n  border-width: 1px;\n  border-style: solid;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.3s;\n}\n.sp-btn:hover {\n  color: #0f59a4;\n  background-color: #fff;\n  border-color: #0f59a4;\n}\n.sp-btn:active {\n  opacity: 0.8;\n}\n.sp-btn.disabled,\n.sp-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.sp-btn.disabled:hover,\n.sp-btn:disabled:hover {\n  color: #212529;\n  background-color: #fff;\n  border-color: #eaeaea;\n}\n.sp-btn.disabled *,\n.sp-btn:disabled * {\n  pointer-events: none;\n}\n.sp-btn.btn-link {\n  color: #0f59a4;\n  background-color: transparent;\n  border-color: transparent;\n  border: none;\n  box-shadow: none;\n}\n.sp-btn.btn-link:hover {\n  color: #0f59a4;\n  background-color: rgba(20, 20, 20, 0);\n  border-color: rgba(20, 20, 20, 0);\n}\n.sp-btn.btn-link:active {\n  opacity: 0.8;\n}\n.sp-btn.btn-link.disabled,\n.sp-btn.btn-link:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.sp-btn.btn-link.disabled:hover,\n.sp-btn.btn-link:disabled:hover {\n  color: #0f59a4;\n  background-color: transparent;\n  border-color: transparent;\n}\n.sp-btn.btn-link.disabled *,\n.sp-btn.btn-link:disabled * {\n  pointer-events: none;\n}\n.sp-btn.btn-primary {\n  color: #fff;\n  background-color: #0f59a4;\n  border-color: #0f59a4;\n}\n.sp-btn.btn-primary:hover {\n  color: #fff;\n  background-color: #126dc9;\n  border-color: #126dc9;\n}\n.sp-btn.btn-primary:active {\n  opacity: 0.8;\n}\n.sp-btn.btn-primary.disabled,\n.sp-btn.btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.sp-btn.btn-primary.disabled:hover,\n.sp-btn.btn-primary:disabled:hover {\n  color: #fff;\n  background-color: #0f59a4;\n  border-color: #0f59a4;\n}\n.sp-btn.btn-primary.disabled *,\n.sp-btn.btn-primary:disabled * {\n  pointer-events: none;\n}\n.sp-btn.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.sp-btn.btn-danger:hover {\n  color: #fff;\n  background-color: #e25865;\n  border-color: #e25865;\n}\n.sp-btn.btn-danger:active {\n  opacity: 0.8;\n}\n.sp-btn.btn-danger.disabled,\n.sp-btn.btn-danger:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.sp-btn.btn-danger.disabled:hover,\n.sp-btn.btn-danger:disabled:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.sp-btn.btn-danger.disabled *,\n.sp-btn.btn-danger:disabled * {\n  pointer-events: none;\n}\n.sp-btn.btn-danger.btn-link {\n  color: #dc3545;\n  background-color: transparent;\n  border-color: transparent;\n}\n.sp-btn.btn-danger.btn-link:hover {\n  color: #dc3545;\n  background-color: rgba(20, 20, 20, 0);\n  border-color: rgba(20, 20, 20, 0);\n}\n.sp-btn.btn-danger.btn-link:active {\n  opacity: 0.8;\n}\n.sp-btn.btn-danger.btn-link.disabled,\n.sp-btn.btn-danger.btn-link:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.sp-btn.btn-danger.btn-link.disabled:hover,\n.sp-btn.btn-danger.btn-link:disabled:hover {\n  color: #dc3545;\n  background-color: transparent;\n  border-color: transparent;\n}\n.sp-btn.btn-danger.btn-link.disabled *,\n.sp-btn.btn-danger.btn-link:disabled * {\n  pointer-events: none;\n}\n.sp-btn.btn-small {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.sp-btn.btn-large {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n";
styleInject(css_248z$3);

var _excluded$2 = ["children"];

var Button = function Button(props) {
  var _useButton = useButton(props),
      children = _useButton.children,
      params = _objectWithoutProperties(_useButton, _excluded$2);

  if (!props.children) return null;
  if (props.type === 'link') return /*#__PURE__*/React__default['default'].createElement("a", _objectSpread2({}, params), children);
  return /*#__PURE__*/React__default['default'].createElement("button", _objectSpread2({}, params), children);
};

Button.defaultProps = {
  type: 'default',
  shape: 'round',
  size: 'middle'
};

var handleContent$4 = function handleContent(children) {
  return children !== null && children !== void 0 ? children : 'Upload File';
};

var useUpload = function useUpload(props) {
  var onProgress = props.onProgress,
      onError = props.onError,
      onSuccess = props.onSuccess,
      beforeUpload = props.beforeUpload,
      action = props.action,
      onChange = props.onChange,
      defaultFileList = props.defaultFileList;

  var _useState = React.useState(defaultFileList !== null && defaultFileList !== void 0 ? defaultFileList : []),
      _useState2 = _slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var fileInputRef = React.useRef(null);
  var children = handleContent$4(props.children);

  var onClick = function onClick() {
    var _fileInputRef$current;

    return fileInputRef === null || fileInputRef === void 0 ? void 0 : (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
  };

  var updateFileList = function updateFileList(updateFile, updateParams) {
    setFileList(function (preFileList) {
      return preFileList.map(function (file) {
        return file.uid === updateFile.uid ? _objectSpread2(_objectSpread2({}, file), updateParams) : file;
      });
    });
  };

  var postFile = function postFile(file) {
    var _file = {
      uid: "".concat(Date.now(), "upload-file"),
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    };
    setFileList([_file].concat(_toConsumableArray(fileList)));
    var formData = new FormData();
    formData.append(file.name, file);
    axios__default['default']({
      url: action,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function onUploadProgress(e) {
        var percent = Math.round(e.loaded * 100 / e.total) || 0;

        if (percent < 100) {
          updateFileList(_file, {
            percent: percent,
            status: 'uploading'
          });
          if (onProgress) onProgress(percent, _file);
        }
      }
    }).then(function (res) {
      updateFileList(_file, {
        status: 'success',
        response: res
      });
      if (onSuccess) onSuccess(res.data, _file);
      if (onChange) onChange(_file);
    }).catch(function (err) {
      updateFileList(_file, {
        status: 'failed',
        error: err
      });
      if (onError) onError(err, _file);
    });
  };

  var onFileChange = function onFileChange(e) {
    var _e$target$files;

    var files = Array.from((_e$target$files = e.target.files) !== null && _e$target$files !== void 0 ? _e$target$files : []);

    if (files.length) {
      files.forEach(function (file) {
        if (!beforeUpload) postFile(file);else {
          var result = beforeUpload(file);
          if (result instanceof Promise) result.then(function (processedFile) {
            return postFile(processedFile);
          });else if (result === true) postFile(file);
        }
      });
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  var onRemove = function onRemove(file) {
    setFileList(fileList.filter(function (item) {
      return item.uid !== file.uid;
    }));
    if (props.onRemove) props.onRemove(file);
  };

  return {
    children: children,
    fileInputRef: fileInputRef,
    onClick: onClick,
    onFileChange: onFileChange,
    onRemove: onRemove,
    fileList: fileList
  };
};

/*
 * @Description: UploadList hook
 * @Date: 2021-05-12 14:43:50
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-17 15:23:19
 */
var useUploadList = function useUploadList(props) {
  var onRemove = function onRemove(file) {
    return function () {
      props.onRemove && props.onRemove(file);
    };
  };

  var onCopy = function onCopy(file) {
    return function () {
      var _window, _window$getSelection, _window2, _window2$getSelection;

      // 清除之前的选中结果
      (_window = window) === null || _window === void 0 ? void 0 : (_window$getSelection = _window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.removeAllRanges(); // 创建一个 input，设置 value 并选中这个 input

      var copyElement = document.createElement('input');
      copyElement.setAttribute('value', file.name);
      document.body.appendChild(copyElement);
      copyElement.select();
      document.execCommand('copy');
      document.body.removeChild(copyElement);
      (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$getSelection = _window2.getSelection()) === null || _window2$getSelection === void 0 ? void 0 : _window2$getSelection.removeAllRanges();
    };
  };

  return {
    onRemove: onRemove,
    onCopy: onCopy
  };
};

/*
 * @Description: 未添加描述
 * @Date: 2021-05-12 14:40:38
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-17 19:46:46
 */
var iconBaseClass = 'upload-list-status-icon';

var iconClass = function iconClass(suffix) {
  return "".concat(iconBaseClass, " ").concat(iconBaseClass, "-").concat(suffix);
};

var icons = {
  success: /*#__PURE__*/React__default['default'].createElement(ai.AiOutlineCheck, {
    className: iconClass('success')
  }),
  uploading: /*#__PURE__*/React__default['default'].createElement(vsc.VscLoading, {
    className: iconClass('uploading')
  }),
  failed: /*#__PURE__*/React__default['default'].createElement(ai.AiOutlineInfoCircle, {
    className: iconClass('failed')
  }),
  ready: /*#__PURE__*/React__default['default'].createElement(vsc.VscLoading, {
    className: iconClass('ready')
  })
};

var UploadList = function UploadList(props) {
  var _useUploadList = useUploadList(props),
      onRemove = _useUploadList.onRemove,
      onCopy = _useUploadList.onCopy;

  return /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "simple-upload-list"
  }, props.fileList.map(function (file) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      className: "upload-list-item",
      key: file.uid
    }, /*#__PURE__*/React__default['default'].createElement(ai.AiOutlineDelete, {
      className: "upload-list-delete-icon",
      onClick: onRemove(file)
    }), file.status ? icons[file.status] : null, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "upload-list-filename",
      onClick: onCopy(file)
    }, file.name));
  }));
};

var css_248z$4 = "/*\n * @Description: Upload style\n * @Date: 2021-05-15 11:04:22\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-05-17 20:08:34\n */\n/*\n * @Description: variables and configurable settings\n * @Date: 2021-04-27 15:09:30\n * @LastEditors: JackyChou\n * @LastEditTime: 2021-06-25 11:13:25\n */\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 14px;\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n  color: #212529;\n  font-weight: 400;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  line-height: 1.5;\n  text-align: null;\n  background-color: #fff;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 2.5rem;\n}\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 2rem;\n}\nh3 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.75rem;\n}\nh4 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.5rem;\n}\nh5 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1.25rem;\n}\nh6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  color: null;\n  font-weight: 500;\n  font-family: null;\n  font-style: null;\n  line-height: 1.2;\n  font-size: 1rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul {\n  padding-left: 2rem;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 1px;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n  color: inherit;\n  opacity: 0.25;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-size: 1em;\n  /* 2 */\n  font-family: monospace;\n  /* 1 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  color: #0f59a4;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #09335e;\n  text-decoration: underline;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n  border-bottom: none;\n  /* 1 */\n  cursor: help;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  color: #d63384;\n  font-size: 0.875em;\n  /* 2 */\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n  /* 1 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  /* 2 */\n  font-size: 100%;\n  /* 1 */\n  font-family: inherit;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  outline: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  display: table;\n  /* 1 */\n  box-sizing: border-box;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type='search'] {\n  outline-offset: -2px;\n  /* 2 */\n  -webkit-appearance: textfield;\n  /* 1 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  font: inherit;\n  /* 2 */\n  -webkit-appearance: button;\n  /* 1 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n.simple-upload-list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n  list-style: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.simple-upload-list .upload-list-item {\n  display: flex;\n  align-items: center;\n  line-height: 2rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.simple-upload-list .upload-list-item:hover .upload-list-filename {\n  background-color: #f1f1f1;\n}\n.simple-upload-list .upload-list-item:hover .upload-list-delete-icon {\n  width: 1.5rem;\n  opacity: 1;\n  margin-right: 0.5rem;\n}\n.simple-upload-list .upload-list-item:hover .upload-list-delete-icon:hover {\n  opacity: 0.6;\n}\n.simple-upload-list .upload-list-item .upload-list-filename {\n  padding: 0 0.5rem;\n  border-radius: 5%;\n  cursor: pointer;\n  background-color: #fff;\n  transition: 0.3s;\n}\n.simple-upload-list .upload-list-item .upload-list-status-icon {\n  margin-right: 0.5rem;\n  font-size: 1.2rem;\n}\n.simple-upload-list .upload-list-item .upload-list-status-icon.upload-list-status-icon-success {\n  color: #52c41a;\n}\n.simple-upload-list .upload-list-item .upload-list-status-icon.upload-list-status-icon-uploading {\n  color: #0f59a4;\n  transform: rotate(0deg);\n  -webkit-animation-name: uploading-icon-rotate;\n          animation-name: uploading-icon-rotate;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.simple-upload-list .upload-list-item .upload-list-status-icon.upload-list-status-icon-failed {\n  color: #dc3545;\n}\n.simple-upload-list .upload-list-item .upload-list-status-icon.upload-list-status-icon-ready {\n  color: #fadb14;\n}\n.simple-upload-list .upload-list-item .upload-list-delete-icon {\n  margin-right: 0;\n  width: 0;\n  opacity: 0;\n  font-size: 1.2rem;\n  color: #dc3545;\n  cursor: pointer;\n  transition: 0.5s;\n}\n@-webkit-keyframes uploading-icon-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(720deg);\n  }\n}\n@keyframes uploading-icon-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(720deg);\n  }\n}\n";
styleInject(css_248z$4);

/*
 * @Description: upload
 * @Date: 2021-05-11 14:05:14
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-15 14:44:26
 */

var Upload = function Upload(props) {
  var _useUpload = useUpload(props),
      children = _useUpload.children,
      fileInputRef = _useUpload.fileInputRef,
      onClick = _useUpload.onClick,
      onFileChange = _useUpload.onFileChange,
      onRemove = _useUpload.onRemove,
      fileList = _useUpload.fileList;

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Button, {
    onClick: onClick
  }, children), /*#__PURE__*/React__default['default'].createElement("input", {
    style: {
      display: 'none'
    },
    type: "file",
    ref: fileInputRef,
    onChange: onFileChange
  }), /*#__PURE__*/React__default['default'].createElement(UploadList, {
    fileList: fileList,
    onRemove: onRemove
  }));
};

var css_248z$5 = ".foo-h1 {\n  font-size: 2rem;\n  color: green;\n  border-top: 1px green solid;\n}\n";
styleInject(css_248z$5);

var index = (function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React__default['default'].createElement("h1", {
    className: "foo-h1"
  }, title);
});

exports.Button = Button;
exports.Foo = index;
exports.Menu = Menu;
exports.Upload = Upload;
