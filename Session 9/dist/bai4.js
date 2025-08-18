"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withDefault(value) {
    if (value === undefined) {
        return "default";
    }
    return value;
}
const a = withDefault();
const b = withDefault("hello");
const c = withDefault(123);
const d = withDefault();
