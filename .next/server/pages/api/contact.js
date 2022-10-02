"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact/index.js":
/*!************************************!*\
  !*** ./pages/api/contact/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nfunction handler(req, res) {\n    const mailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = mailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: process.env.MAIL,\n            pass: process.env.PASS\n        },\n        secure: true\n    });\n    let mailData = {\n        from: \"Moe's Portfolio page\",\n        to: \"mosesnwigberi@gmail.com\",\n        subject: `You have a message from ${req.body.firstName} in your portfolio page`,\n        text: req.body.message + \"| Sent from: \" + req.body.email,\n        html: `<div>\n        ${req.body.message}\n        </div><p>Sent from: ${req.body.email} <br />\n        Sender's phone: ${req.body.phone}\n        `\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        let status;\n        if (err) {\n            status = err;\n            console.log(err);\n            res.status(500).json(status);\n        } else {\n            status = info;\n            console.log(info);\n            res.status(200).json(status);\n        }\n    });\n    res.status(200).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLG9EQUF3QixFQUFFO0FBQ1gsU0FBU0UsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxNQUFNLEdBQUdMLG1CQUFPLENBQUMsOEJBQVksQ0FBQztJQUVwQyxNQUFNTSxXQUFXLEdBQUdELE1BQU0sQ0FBQ0UsZUFBZSxDQUFDO1FBQ3ZDQyxJQUFJLEVBQUMsR0FBRztRQUNSQyxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtZQUN0QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSTtTQUN6QjtRQUNEQyxNQUFNLEVBQUUsSUFBSTtLQUNmLENBQUM7SUFFRixJQUFJQyxRQUFRLEdBQUc7UUFDWEMsSUFBSSxFQUFFLHNCQUF1QjtRQUM3QkMsRUFBRSxFQUFFLHlCQUF5QjtRQUM3QkMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUVsQixHQUFHLENBQUNtQixJQUFJLENBQUNDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztRQUMvRUMsSUFBSSxFQUFFckIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDRyxPQUFPLEdBQUcsZUFBZSxHQUFHdEIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDSSxLQUFLO1FBQ3pEQyxJQUFJLEVBQUUsQ0FBQztRQUNQLEVBQUV4QixHQUFHLENBQUNtQixJQUFJLENBQUNHLE9BQU8sQ0FBQzs0QkFDQyxFQUFFdEIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDSSxLQUFLLENBQUM7d0JBQ3JCLEVBQUV2QixHQUFHLENBQUNtQixJQUFJLENBQUNNLEtBQUssQ0FBQztRQUNqQyxDQUFDO0tBQ0o7SUFFRHRCLFdBQVcsQ0FBQ3VCLFFBQVEsQ0FBQ1gsUUFBUSxFQUFFLFNBQVNZLEdBQUcsRUFBQ0MsSUFBSSxFQUFFO1FBQzlDLElBQUlDLE1BQU07UUFDVixJQUFJRixHQUFHLEVBQUU7WUFDTEUsTUFBTSxHQUFHRixHQUFHO1lBQ1pHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUM7WUFDaEIxQixHQUFHLENBQUM0QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQ0gsTUFBTSxDQUFDO1FBQ2hDLE9BQU87WUFDSEEsTUFBTSxHQUFHRCxJQUFJO1lBQ2JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7WUFDakIzQixHQUFHLENBQUM0QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQ0gsTUFBTSxDQUFDO1FBQ2hDLENBQUM7SUFFTCxDQUFDLENBQUM7SUFFRjVCLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxFQUFFO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2UtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2NvbnRhY3QvaW5kZXguanM/ZmIxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IG1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKVxuICAgIFxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIHBvcnQ6NDY1LFxuICAgICAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BSUwsXG4gICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5QQVNTXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3VyZTogdHJ1ZVxuICAgIH0pXG5cbiAgICBsZXQgbWFpbERhdGEgPSB7XG4gICAgICAgIGZyb206ICdNb2VcXCdzIFBvcnRmb2xpbyBwYWdlJyxcbiAgICAgICAgdG86ICdtb3Nlc253aWdiZXJpQGdtYWlsLmNvbScsXG4gICAgICAgIHN1YmplY3Q6IGBZb3UgaGF2ZSBhIG1lc3NhZ2UgZnJvbSAke3JlcS5ib2R5LmZpcnN0TmFtZX0gaW4geW91ciBwb3J0Zm9saW8gcGFnZWAsXG4gICAgICAgIHRleHQ6IHJlcS5ib2R5Lm1lc3NhZ2UgKyBcInwgU2VudCBmcm9tOiBcIiArIHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICBodG1sOiBgPGRpdj5cbiAgICAgICAgJHtyZXEuYm9keS5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj48cD5TZW50IGZyb206ICR7cmVxLmJvZHkuZW1haWx9IDxiciAvPlxuICAgICAgICBTZW5kZXIncyBwaG9uZTogJHtyZXEuYm9keS5waG9uZX1cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCBmdW5jdGlvbihlcnIsaW5mbykge1xuICAgICAgICBsZXQgc3RhdHVzXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IGVyclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oc3RhdHVzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gaW5mb1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmVuZCgpXG59XG5cblxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIk1BSUwiLCJwYXNzIiwiUEFTUyIsInNlY3VyZSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImJvZHkiLCJmaXJzdE5hbWUiLCJ0ZXh0IiwibWVzc2FnZSIsImVtYWlsIiwiaHRtbCIsInBob25lIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact/index.js"));
module.exports = __webpack_exports__;

})();