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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nasync function handler(req, res) {\n    const mailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = mailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: process.env.MAIL,\n            pass: process.env.PASS\n        },\n        secure: true\n    });\n    let mailData = {\n        from: \"Moe's Portfolio page\",\n        to: \"mosesnwigberi@gmail.com\",\n        subject: `You have a message from ${req.body.firstName} in your portfolio page`,\n        text: req.body.message + \"| Sent from: \" + req.body.email,\n        html: `<div>\n        ${req.body.message}\n        </div><p>Sent from: ${req.body.email} <br />\n        Sender's phone: ${req.body.phone}\n        `\n    };\n    await new Promise((resolve, reject)=>{\n        // verify connection configuration\n        transporter.verify(function(error, success) {\n            if (error) {\n                console.log(error);\n                reject(error);\n            } else {\n                console.log(\"Server is ready to take our messages\");\n                resolve(success);\n            }\n        });\n    });\n    await new Promise((resolve, reject)=>{\n        // send mail\n        transporter.sendMail(mailData, (err, info)=>{\n            if (err) {\n                console.error(err);\n                reject(err);\n            } else {\n                console.log(info);\n                resolve(info);\n            }\n        });\n    });\n    res.status(200).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLG9EQUF3QixFQUFFO0FBQ1gsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNQyxNQUFNLEdBQUdMLG1CQUFPLENBQUMsOEJBQVksQ0FBQztJQUVwQyxNQUFNTSxXQUFXLEdBQUdELE1BQU0sQ0FBQ0UsZUFBZSxDQUFDO1FBQ3ZDQyxJQUFJLEVBQUMsR0FBRztRQUNSQyxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTtZQUN0QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSTtTQUN6QjtRQUNEQyxNQUFNLEVBQUUsSUFBSTtLQUNmLENBQUM7SUFFRixJQUFJQyxRQUFRLEdBQUc7UUFDWEMsSUFBSSxFQUFFLHNCQUF1QjtRQUM3QkMsRUFBRSxFQUFFLHlCQUF5QjtRQUM3QkMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUVsQixHQUFHLENBQUNtQixJQUFJLENBQUNDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztRQUMvRUMsSUFBSSxFQUFFckIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDRyxPQUFPLEdBQUcsZUFBZSxHQUFHdEIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDSSxLQUFLO1FBQ3pEQyxJQUFJLEVBQUUsQ0FBQztRQUNQLEVBQUV4QixHQUFHLENBQUNtQixJQUFJLENBQUNHLE9BQU8sQ0FBQzs0QkFDQyxFQUFFdEIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDSSxLQUFLLENBQUM7d0JBQ3JCLEVBQUV2QixHQUFHLENBQUNtQixJQUFJLENBQUNNLEtBQUssQ0FBQztRQUNqQyxDQUFDO0tBQ0o7SUFFRCxNQUFNLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sR0FBSztRQUNuQyxrQ0FBa0M7UUFDbEN6QixXQUFXLENBQUMwQixNQUFNLENBQUMsU0FBVUMsS0FBSyxFQUFFQyxPQUFPLEVBQUU7WUFDekMsSUFBSUQsS0FBSyxFQUFFO2dCQUNQRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7Z0JBQ25CRixNQUFNLENBQUNFLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLE9BQU87Z0JBQ0hFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7Z0JBQ3BETixPQUFPLENBQUNJLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBR0gsTUFBTSxJQUFJTCxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7UUFDbkMsWUFBWTtRQUNaekIsV0FBVyxDQUFDK0IsUUFBUSxDQUFDbkIsUUFBUSxFQUFFLENBQUNvQixHQUFHLEVBQUVDLElBQUksR0FBSztZQUMxQyxJQUFJRCxHQUFHLEVBQUU7Z0JBQ0xILE9BQU8sQ0FBQ0YsS0FBSyxDQUFDSyxHQUFHLENBQUMsQ0FBQztnQkFDbkJQLE1BQU0sQ0FBQ08sR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTztnQkFDSEgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO2dCQUNsQlQsT0FBTyxDQUFDUyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUNIbkMsR0FBRyxDQUFDb0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vZS1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvY29udGFjdC9pbmRleC5qcz9mYjEzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gICAgXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgcG9ydDo0NjUsXG4gICAgICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuTUFJTCxcbiAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1NcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdXJlOiB0cnVlXG4gICAgfSlcblxuICAgIGxldCBtYWlsRGF0YSA9IHtcbiAgICAgICAgZnJvbTogJ01vZVxcJ3MgUG9ydGZvbGlvIHBhZ2UnLFxuICAgICAgICB0bzogJ21vc2VzbndpZ2JlcmlAZ21haWwuY29tJyxcbiAgICAgICAgc3ViamVjdDogYFlvdSBoYXZlIGEgbWVzc2FnZSBmcm9tICR7cmVxLmJvZHkuZmlyc3ROYW1lfSBpbiB5b3VyIHBvcnRmb2xpbyBwYWdlYCxcbiAgICAgICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZSArIFwifCBTZW50IGZyb206IFwiICsgcmVxLmJvZHkuZW1haWwsXG4gICAgICAgIGh0bWw6IGA8ZGl2PlxuICAgICAgICAke3JlcS5ib2R5Lm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PjxwPlNlbnQgZnJvbTogJHtyZXEuYm9keS5lbWFpbH0gPGJyIC8+XG4gICAgICAgIFNlbmRlcidzIHBob25lOiAke3JlcS5ib2R5LnBob25lfVxuICAgICAgICBgXG4gICAgfVxuXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyB2ZXJpZnkgY29ubmVjdGlvbiBjb25maWd1cmF0aW9uXG4gICAgICAgIHRyYW5zcG9ydGVyLnZlcmlmeShmdW5jdGlvbiAoZXJyb3IsIHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBpcyByZWFkeSB0byB0YWtlIG91ciBtZXNzYWdlc1wiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gc2VuZCBtYWlsXG4gICAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCAoZXJyLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKClcbn1cblxuXG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0IiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTCIsInBhc3MiLCJQQVNTIiwic2VjdXJlIiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiYm9keSIsImZpcnN0TmFtZSIsInRleHQiLCJtZXNzYWdlIiwiZW1haWwiLCJodG1sIiwicGhvbmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZlcmlmeSIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact/index.js\n");

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