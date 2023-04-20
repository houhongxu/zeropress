"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_ENTRY_PATH = exports.DEFAULT_HTML_PATH = exports.PACKAGE_ROOT_PATH = void 0;
const path = require("path");
exports.PACKAGE_ROOT_PATH = path.join(__dirname, '..', '..', '..');
exports.DEFAULT_HTML_PATH = path.join(exports.PACKAGE_ROOT_PATH, 'template.html');
exports.CLIENT_ENTRY_PATH = path.join(exports.PACKAGE_ROOT_PATH, 'src', 'runtime', 'client-entry.tsx');
