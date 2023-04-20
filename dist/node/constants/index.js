"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_ENTRY_PATH = exports.CLIENT_ENTRY_PATH = exports.DEFAULT_HTML_PATH = exports.PACKAGE_ROOT_PATH = void 0;
const path_1 = __importDefault(require("path"));
exports.PACKAGE_ROOT_PATH = path_1.default.join(__dirname, '..', '..', '..');
exports.DEFAULT_HTML_PATH = path_1.default.join(exports.PACKAGE_ROOT_PATH, 'template.html');
exports.CLIENT_ENTRY_PATH = path_1.default.join(exports.PACKAGE_ROOT_PATH, 'src', 'runtime', 'client-entry.tsx');
exports.SERVER_ENTRY_PATH = path_1.default.join(exports.PACKAGE_ROOT_PATH, 'src', 'runtime', 'server-entry.tsx');
