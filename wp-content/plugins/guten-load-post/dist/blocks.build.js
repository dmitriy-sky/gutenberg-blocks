/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * BLOCK: guten-load-post\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks\n\nvar SelectControl = wp.components.SelectControl;\nvar Component = wp.element.Component;\n\nvar mySelectPosts = function (_Component) {\n  _inherits(mySelectPosts, _Component);\n\n  _createClass(mySelectPosts, null, [{\n    key: 'getInitialState',\n\n    // Method for setting the initial state.\n    value: function getInitialState(selectedPost) {\n      return {\n        posts: [],\n        selectedPost: selectedPost,\n        post: {}\n      };\n    }\n    // Constructing our component. With super() we are setting everything to 'this'.\n    // Now we can access the attributes with this.props.attributes\n\n  }]);\n\n  function mySelectPosts() {\n    _classCallCheck(this, mySelectPosts);\n\n    // Maybe we have a previously selected post. Try to load it.\n    var _this = _possibleConstructorReturn(this, (mySelectPosts.__proto__ || Object.getPrototypeOf(mySelectPosts)).apply(this, arguments));\n\n    _this.state = _this.constructor.getInitialState(_this.props.attributes.selectedPost);\n    // Bind so we can use 'this' inside the method.\n    _this.getOptions = _this.getOptions.bind(_this);\n    // Load posts.\n    _this.getOptions();\n    // Bind it.\n    _this.onChangeSelectPost = _this.onChangeSelectPost.bind(_this);\n    _this.consoleLog = _this.consoleLog.bind(_this);\n    return _this;\n  }\n\n  /**\n  * Loading Posts\n  */\n\n\n  _createClass(mySelectPosts, [{\n    key: 'getOptions',\n    value: function getOptions() {\n      var _this2 = this;\n\n      return new wp.api.collections.Posts().fetch().then(function (posts) {\n        if (posts && 0 !== _this2.state.selectedPost) {\n          // If we have a selected Post, find that post and add it.\n          var post = posts.find(function (item) {\n            return item.id == _this2.state.selectedPost;\n          });\n          // This is the same as { post: post, posts: posts }\n          _this2.setState({ post: post, posts: posts });\n        } else {\n          _this2.setState({ posts: posts });\n        }\n      });\n    }\n  }, {\n    key: 'onChangeSelectPost',\n    value: function onChangeSelectPost(value) {\n      // Find the post\n      var post = this.state.posts.find(function (item) {\n        return item.id == parseInt(value);\n      });\n      // Set the state\n      this.setState({ selectedPost: parseInt(value), post: post });\n      // Set the attributes\n      this.props.setAttributes({\n        selectedPost: parseInt(value),\n        title: post.title.rendered,\n        content: post.excerpt.rendered,\n        link: post.link\n      });\n    }\n  }, {\n    key: 'consoleLog',\n    value: function consoleLog() {\n      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var options = [{ value: 0, label: __('Select a Post') }];\n      var output = __('Loading Posts');\n      this.props.className += ' loading';\n      if (this.state.posts.length > 0) {\n        var loading = __('We have %d posts. Choose one.');\n        output = loading.replace('%d', this.state.posts.length);\n        this.state.posts.forEach(function (post) {\n          options.push({ value: post.id, label: post.title.rendered });\n        });\n      } else {\n        output = __('No posts found. Please create some first.');\n      }\n      // Checking if we have anything in the object\n      if (this.state.post.hasOwnProperty('title')) {\n        output = wp.element.createElement(\n          'div',\n          { className: 'post' },\n          wp.element.createElement(\n            'a',\n            { href: this.state.post.link },\n            wp.element.createElement('h2', { dangerouslySetInnerHTML: { __html: this.state.post.title.rendered } })\n          ),\n          wp.element.createElement('p', { dangerouslySetInnerHTML: { __html: this.state.post.excerpt.rendered } })\n        );\n        this.props.className += ' has-post';\n      } else {\n        this.props.className += ' no-post';\n      }\n      return [!!this.props.isSelected && wp.element.createElement(\n        InspectorControls,\n        { key: 'inspector' },\n        wp.element.createElement(SelectControl, { onChange: this.onChangeSelectPost, value: this.props.attributes.selectedPost, label: __('Select a Post'), options: options })\n      ), wp.element.createElement(\n        'div',\n        { className: this.props.className },\n        output\n      )];\n    }\n  }]);\n\n  return mySelectPosts;\n}(Component);\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n\nregisterBlockType('cgb/block-guten-load-post', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Load a Post'), // Block title.\n  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('load'), __('Load Post'), __('guten-load-post')],\n  attributes: {\n    content: {\n      type: 'array',\n      source: 'children',\n      selector: 'p'\n    },\n    title: {\n      type: 'string',\n      selector: 'h2'\n    },\n    link: {\n      type: 'string',\n      selector: 'a'\n    },\n    selectedPost: {\n      type: 'number',\n      default: 0\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Component.\n   */\n  edit: mySelectPosts,\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Frontend HTML.\n   */\n  save: function save(props) {\n    return wp.element.createElement(\n      'div',\n      { className: props.className },\n      wp.element.createElement(\n        'div',\n        { className: 'post' },\n        wp.element.createElement(\n          'a',\n          { href: props.attributes.link },\n          wp.element.createElement('h2', { dangerouslySetInnerHTML: { __html: props.attributes.title } })\n        ),\n        wp.element.createElement('p', { dangerouslySetInnerHTML: { __html: props.attributes.content } })\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBCTE9DSzogZ3V0ZW4tbG9hZC1wb3N0XG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja3MuSW5zcGVjdG9yQ29udHJvbHM7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBTZWxlY3RDb250cm9sID0gd3AuY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xudmFyIENvbXBvbmVudCA9IHdwLmVsZW1lbnQuQ29tcG9uZW50O1xuXG52YXIgbXlTZWxlY3RQb3N0cyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhteVNlbGVjdFBvc3RzLCBfQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MobXlTZWxlY3RQb3N0cywgbnVsbCwgW3tcbiAgICBrZXk6ICdnZXRJbml0aWFsU3RhdGUnLFxuXG4gICAgLy8gTWV0aG9kIGZvciBzZXR0aW5nIHRoZSBpbml0aWFsIHN0YXRlLlxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoc2VsZWN0ZWRQb3N0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3N0czogW10sXG4gICAgICAgIHNlbGVjdGVkUG9zdDogc2VsZWN0ZWRQb3N0LFxuICAgICAgICBwb3N0OiB7fVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ29uc3RydWN0aW5nIG91ciBjb21wb25lbnQuIFdpdGggc3VwZXIoKSB3ZSBhcmUgc2V0dGluZyBldmVyeXRoaW5nIHRvICd0aGlzJy5cbiAgICAvLyBOb3cgd2UgY2FuIGFjY2VzcyB0aGUgYXR0cmlidXRlcyB3aXRoIHRoaXMucHJvcHMuYXR0cmlidXRlc1xuXG4gIH1dKTtcblxuICBmdW5jdGlvbiBteVNlbGVjdFBvc3RzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBteVNlbGVjdFBvc3RzKTtcblxuICAgIC8vIE1heWJlIHdlIGhhdmUgYSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvc3QuIFRyeSB0byBsb2FkIGl0LlxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChteVNlbGVjdFBvc3RzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YobXlTZWxlY3RQb3N0cykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5nZXRJbml0aWFsU3RhdGUoX3RoaXMucHJvcHMuYXR0cmlidXRlcy5zZWxlY3RlZFBvc3QpO1xuICAgIC8vIEJpbmQgc28gd2UgY2FuIHVzZSAndGhpcycgaW5zaWRlIHRoZSBtZXRob2QuXG4gICAgX3RoaXMuZ2V0T3B0aW9ucyA9IF90aGlzLmdldE9wdGlvbnMuYmluZChfdGhpcyk7XG4gICAgLy8gTG9hZCBwb3N0cy5cbiAgICBfdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgLy8gQmluZCBpdC5cbiAgICBfdGhpcy5vbkNoYW5nZVNlbGVjdFBvc3QgPSBfdGhpcy5vbkNoYW5nZVNlbGVjdFBvc3QuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuY29uc29sZUxvZyA9IF90aGlzLmNvbnNvbGVMb2cuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICogTG9hZGluZyBQb3N0c1xuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKG15U2VsZWN0UG9zdHMsIFt7XG4gICAga2V5OiAnZ2V0T3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyB3cC5hcGkuY29sbGVjdGlvbnMuUG9zdHMoKS5mZXRjaCgpLnRoZW4oZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgICAgIGlmIChwb3N0cyAmJiAwICE9PSBfdGhpczIuc3RhdGUuc2VsZWN0ZWRQb3N0KSB7XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHNlbGVjdGVkIFBvc3QsIGZpbmQgdGhhdCBwb3N0IGFuZCBhZGQgaXQuXG4gICAgICAgICAgdmFyIHBvc3QgPSBwb3N0cy5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBfdGhpczIuc3RhdGUuc2VsZWN0ZWRQb3N0O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIHNhbWUgYXMgeyBwb3N0OiBwb3N0LCBwb3N0czogcG9zdHMgfVxuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IHBvc3Q6IHBvc3QsIHBvc3RzOiBwb3N0cyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBwb3N0czogcG9zdHMgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2hhbmdlU2VsZWN0UG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlU2VsZWN0UG9zdCh2YWx1ZSkge1xuICAgICAgLy8gRmluZCB0aGUgcG9zdFxuICAgICAgdmFyIHBvc3QgPSB0aGlzLnN0YXRlLnBvc3RzLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgfSk7XG4gICAgICAvLyBTZXQgdGhlIHN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQb3N0OiBwYXJzZUludCh2YWx1ZSksIHBvc3Q6IHBvc3QgfSk7XG4gICAgICAvLyBTZXQgdGhlIGF0dHJpYnV0ZXNcbiAgICAgIHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHNlbGVjdGVkUG9zdDogcGFyc2VJbnQodmFsdWUpLFxuICAgICAgICB0aXRsZTogcG9zdC50aXRsZS5yZW5kZXJlZCxcbiAgICAgICAgY29udGVudDogcG9zdC5leGNlcnB0LnJlbmRlcmVkLFxuICAgICAgICBsaW5rOiBwb3N0LmxpbmtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbnNvbGVMb2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25zb2xlTG9nKCkge1xuICAgICAgY29uc29sZS5sb2coJyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBbeyB2YWx1ZTogMCwgbGFiZWw6IF9fKCdTZWxlY3QgYSBQb3N0JykgfV07XG4gICAgICB2YXIgb3V0cHV0ID0gX18oJ0xvYWRpbmcgUG9zdHMnKTtcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lICs9ICcgbG9hZGluZyc7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsb2FkaW5nID0gX18oJ1dlIGhhdmUgJWQgcG9zdHMuIENob29zZSBvbmUuJyk7XG4gICAgICAgIG91dHB1dCA9IGxvYWRpbmcucmVwbGFjZSgnJWQnLCB0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHMuZm9yRWFjaChmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh7IHZhbHVlOiBwb3N0LmlkLCBsYWJlbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBfXygnTm8gcG9zdHMgZm91bmQuIFBsZWFzZSBjcmVhdGUgc29tZSBmaXJzdC4nKTtcbiAgICAgIH1cbiAgICAgIC8vIENoZWNraW5nIGlmIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIG9iamVjdFxuICAgICAgaWYgKHRoaXMuc3RhdGUucG9zdC5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSkge1xuICAgICAgICBvdXRwdXQgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdwb3N0JyB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgIHsgaHJlZjogdGhpcy5zdGF0ZS5wb3N0LmxpbmsgfSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaDInLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogdGhpcy5zdGF0ZS5wb3N0LnRpdGxlLnJlbmRlcmVkIH0gfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncCcsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0aGlzLnN0YXRlLnBvc3QuZXhjZXJwdC5yZW5kZXJlZCB9IH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lICs9ICcgaGFzLXBvc3QnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUgKz0gJyBuby1wb3N0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiBbISF0aGlzLnByb3BzLmlzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgeyBrZXk6ICdpbnNwZWN0b3InIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7IG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlU2VsZWN0UG9zdCwgdmFsdWU6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5zZWxlY3RlZFBvc3QsIGxhYmVsOiBfXygnU2VsZWN0IGEgUG9zdCcpLCBvcHRpb25zOiBvcHRpb25zIH0pXG4gICAgICApLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfSxcbiAgICAgICAgb3V0cHV0XG4gICAgICApXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gbXlTZWxlY3RQb3N0cztcbn0oQ29tcG9uZW50KTtcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLWd1dGVuLWxvYWQtcG9zdCcsIHtcbiAgLy8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4gIHRpdGxlOiBfXygnTG9hZCBhIFBvc3QnKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdzaGllbGQnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gIGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4gIGtleXdvcmRzOiBbX18oJ2xvYWQnKSwgX18oJ0xvYWQgUG9zdCcpLCBfXygnZ3V0ZW4tbG9hZC1wb3N0JyldLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICAgIHNlbGVjdG9yOiAncCdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNlbGVjdG9yOiAnaDInXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNlbGVjdG9yOiAnYSdcbiAgICB9LFxuICAgIHNlbGVjdGVkUG9zdDoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgICpcbiAgICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgICovXG4gIGVkaXQ6IG15U2VsZWN0UG9zdHMsXG5cbiAgLyoqXG4gICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgICpcbiAgICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncG9zdCcgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICB7IGhyZWY6IHByb3BzLmF0dHJpYnV0ZXMubGluayB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaDInLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogcHJvcHMuYXR0cmlidXRlcy50aXRsZSB9IH0pXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncCcsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQgfSB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);