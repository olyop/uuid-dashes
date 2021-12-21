"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDashesToUUID = exports.removeDashesFromUUID = void 0;
const removeDashesFromUUID = (val) => val.split("-").join("");
exports.removeDashesFromUUID = removeDashesFromUUID;
const h = (v, f, s) => v.substr(f, s);
const addDashesToUUID = (x) => `${h(x, 0, 8)}-${h(x, 8, 4)}-${h(x, 12, 4)}-${h(x, 16, 4)}-${h(x, 20)}`;
exports.addDashesToUUID = addDashesToUUID;
