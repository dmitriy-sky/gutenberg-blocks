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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: custom-card\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText;\nvar Button = wp.components.Button;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-custom-card', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Custom Card'), // Block title.\n  icon: 'heart', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('Custom Card'), __('CGB Example'), __('create-guten-block')],\n  attributes: {\n    title: {\n      source: 'text',\n      selector: '.card__title'\n    },\n    body: {\n      type: 'array',\n      source: 'children',\n      selector: '.card__body'\n    },\n    imageAlt: {\n      attribute: 'alt',\n      selector: '.card__image'\n    },\n    imageUrl: {\n      attribute: 'src',\n      selector: '.card__image'\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Component.\n   */\n  edit: function edit(props) {\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n\n\n    var getImageButton = function getImageButton(openEvent) {\n      if (attributes.imageUrl) {\n        return wp.element.createElement('img', {\n          src: attributes.imageUrl,\n          onClick: openEvent,\n          className: 'image'\n        });\n      } else {\n        return wp.element.createElement(\n          'div',\n          { className: 'button-container' },\n          wp.element.createElement(\n            Button,\n            {\n              onClick: openEvent,\n              className: 'button button-large'\n            },\n            'Pick an image'\n          )\n        );\n      }\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(MediaUpload, {\n        onSelect: function onSelect(media) {\n          setAttributes({ imageAlt: media.alt, imageUrl: media.url });\n        },\n        type: 'image',\n        value: attributes.imageID,\n        render: function render(_ref) {\n          var open = _ref.open;\n          return getImageButton(open);\n        }\n      }),\n      wp.element.createElement(PlainText, {\n        onChange: function onChange(content) {\n          return setAttributes({ title: content });\n        },\n        value: attributes.title,\n        placeholder: 'Your card title',\n        className: 'heading'\n      }),\n      wp.element.createElement(RichText, {\n        onChange: function onChange(content) {\n          return setAttributes({ body: content });\n        },\n        value: attributes.body,\n        multiline: 'p',\n        placeholder: 'Your card text'\n      })\n    );\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Frontend HTML.\n   */\n  save: function save(props) {\n    var attributes = props.attributes;\n    var imageUrl = attributes.imageUrl,\n        imageAlt = attributes.imageAlt,\n        title = attributes.title,\n        body = attributes.body;\n\n\n    var cardImage = function cardImage(src, alt) {\n      if (!src) return null;\n\n      if (alt) {\n        return wp.element.createElement('img', {\n          className: 'card__image',\n          src: src,\n          alt: alt\n        });\n      }\n\n      // No alt set, so let's hide it from screen readers\n      return wp.element.createElement('img', {\n        className: 'card__image',\n        src: src,\n        alt: '',\n        'aria-hidden': 'true'\n      });\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: 'card' },\n      cardImage(imageUrl, imageAlt),\n      wp.element.createElement(\n        'div',\n        { className: 'card__content' },\n        wp.element.createElement(\n          'h3',\n          { className: 'card__title' },\n          title\n        ),\n        wp.element.createElement(\n          'div',\n          { className: 'card__body' },\n          body\n        )\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGN1c3RvbS1jYXJkXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dDtcbnZhciBCdXR0b24gPSB3cC5jb21wb25lbnRzLkJ1dHRvbjtcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1jdXN0b20tY2FyZCcsIHtcbiAgLy8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG4gIHRpdGxlOiBfXygnQ3VzdG9tIENhcmQnKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdoZWFydCcsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cbiAgY2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cbiAga2V5d29yZHM6IFtfXygnQ3VzdG9tIENhcmQnKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgc291cmNlOiAndGV4dCcsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX190aXRsZSdcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX19ib2R5J1xuICAgIH0sXG4gICAgaW1hZ2VBbHQ6IHtcbiAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcbiAgICB9LFxuICAgIGltYWdlVXJsOiB7XG4gICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxuICAgICAgc2VsZWN0b3I6ICcuY2FyZF9faW1hZ2UnXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgICpcbiAgICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgICovXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuICAgIHZhciBnZXRJbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCkge1xuICAgICAgaWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgIHNyYzogYXR0cmlidXRlcy5pbWFnZVVybCxcbiAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1dHRvbi1jb250YWluZXInIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1BpY2sgYW4gaW1hZ2UnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmltYWdlSUQsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYub3BlbjtcbiAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VCdXR0b24ob3Blbik7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwge1xuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1lvdXIgY2FyZCB0aXRsZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hlYWRpbmcnXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYm9keSxcbiAgICAgICAgbXVsdGlsaW5lOiAncCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnWW91ciBjYXJkIHRleHQnXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgICpcbiAgICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcbiAgICB2YXIgaW1hZ2VVcmwgPSBhdHRyaWJ1dGVzLmltYWdlVXJsLFxuICAgICAgICBpbWFnZUFsdCA9IGF0dHJpYnV0ZXMuaW1hZ2VBbHQsXG4gICAgICAgIHRpdGxlID0gYXR0cmlidXRlcy50aXRsZSxcbiAgICAgICAgYm9keSA9IGF0dHJpYnV0ZXMuYm9keTtcblxuXG4gICAgdmFyIGNhcmRJbWFnZSA9IGZ1bmN0aW9uIGNhcmRJbWFnZShzcmMsIGFsdCkge1xuICAgICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAoYWx0KSB7XG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdjYXJkX19pbWFnZScsXG4gICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgYWx0OiBhbHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICBjbGFzc05hbWU6ICdjYXJkX19pbWFnZScsXG4gICAgICAgIHNyYzogc3JjLFxuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2NhcmQnIH0sXG4gICAgICBjYXJkSW1hZ2UoaW1hZ2VVcmwsIGltYWdlQWx0KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY2FyZF9fY29udGVudCcgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoMycsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjYXJkX190aXRsZScgfSxcbiAgICAgICAgICB0aXRsZVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjYXJkX19ib2R5JyB9LFxuICAgICAgICAgIGJvZHlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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