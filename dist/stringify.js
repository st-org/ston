import { stringifyString } from './string';
function stringifyArray(array, { addDecorativeComma, addDecorativeSpace, indentLevel, indentTarget, useUnquotedString }) {
    addDecorativeComma = addDecorativeComma !== null && addDecorativeComma !== void 0 ? addDecorativeComma : 'never';
    indentTarget = indentTarget !== null && indentTarget !== void 0 ? indentTarget : 'none';
    indentLevel = indentLevel !== null && indentLevel !== void 0 ? indentLevel : 0;
    const out = [];
    const expand = array.length > 1 && (indentTarget === 'all' || indentTarget === 'array' || indentTarget === 'arrayInObjectAndThis');
    const nextIndentLevel = indentLevel + (expand ? 1 : 0);
    if (indentTarget === 'arrayInObjectAndThis') {
        indentTarget = 'arrayInObject';
    }
    const comma = addDecorativeSpace === 'always' || addDecorativeSpace === 'afterComma' ? ', ' : ',';
    let nextString;
    for (let i = 0; i < array.length; i++) {
        let string;
        if (nextString === undefined) {
            string = stringify(array[i], {
                addDecorativeComma,
                addDecorativeSpace,
                indentTarget,
                indentLevel: nextIndentLevel,
                useUnquotedString
            });
        }
        else {
            string = nextString;
        }
        if (i !== array.length - 1) {
            nextString = stringify(array[i + 1], {
                addDecorativeComma,
                addDecorativeSpace,
                indentTarget,
                indentLevel: nextIndentLevel,
                useUnquotedString
            });
        }
        if (expand || i === array.length - 1
            || addDecorativeComma !== 'always' && (string.endsWith("'") || string.endsWith('}') || string.endsWith(']')
                || nextString !== undefined && (nextString.endsWith("'") || nextString.endsWith('}') || nextString.endsWith(']')))) {
            out.push(string);
        }
        else {
            out.push(string + comma);
        }
    }
    if (expand) {
        let footAdd = '\n';
        for (let i = 0; i < indentLevel; i++) {
            footAdd += '    ';
        }
        let bodyAdd = footAdd;
        if (indentLevel >= 0) {
            bodyAdd += '    ';
        }
        return `[${bodyAdd}${out.join(bodyAdd)}${footAdd}]`;
    }
    return `[${out.join('')}]`;
}
function stringifyObject(object, { addDecorativeComma, addDecorativeSpace, indentLevel, indentTarget, useUnquotedString }) {
    addDecorativeComma = addDecorativeComma !== null && addDecorativeComma !== void 0 ? addDecorativeComma : 'never';
    indentTarget = indentTarget !== null && indentTarget !== void 0 ? indentTarget : 'none';
    indentLevel = indentLevel !== null && indentLevel !== void 0 ? indentLevel : 0;
    const out = [];
    const keys = Object.keys(object);
    const expand = keys.length > 1 && (indentTarget === 'all' || indentTarget === 'object');
    const nextIndentLevel = indentLevel + (expand ? 1 : 0);
    if (indentTarget === 'arrayInObject') {
        indentTarget = 'arrayInObjectAndThis';
    }
    const comma = addDecorativeSpace === 'always' || addDecorativeSpace === 'afterComma' ? ', ' : ',';
    const spaceAfterKey = addDecorativeSpace === 'always' || addDecorativeSpace === 'afterKey' ? ' ' : '';
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const result = key.match(/^[\w-]+$/);
        if (result === null) {
            continue;
        }
        const value = object[key];
        if (value === undefined) {
            continue;
        }
        const string = stringify(value, {
            addDecorativeComma,
            addDecorativeSpace,
            indentTarget,
            indentLevel: nextIndentLevel,
            useUnquotedString: key === '__' && (typeof value === 'string') ? undefined : useUnquotedString
        });
        if (string.startsWith("'") || string.startsWith('[') || string.startsWith('{')) {
            if (expand || i === keys.length - 1 || addDecorativeComma !== 'always' && addDecorativeComma !== 'inObject') {
                out.push((key === '__' ? '' : key + spaceAfterKey) + string);
            }
            else {
                out.push((key === '__' ? '' : key + spaceAfterKey) + string + comma);
            }
        }
        else if (string === 'true') {
            if (expand || i === keys.length - 1) {
                out.push(key);
            }
            else {
                out.push(key + comma);
            }
        }
        else {
            if (expand || i === keys.length - 1) {
                out.push(`${key} ${string}`);
            }
            else {
                out.push(`${key} ${string}${comma}`);
            }
        }
    }
    if (expand) {
        let footAdd = '\n';
        for (let i = 0; i < indentLevel; i++) {
            footAdd += '    ';
        }
        let bodyAdd = footAdd;
        if (indentLevel >= 0) {
            bodyAdd += '    ';
        }
        return `{${bodyAdd}${out.join(bodyAdd)}${footAdd}}`;
    }
    return `{${out.join('')}}`;
}
export function stringify(ston, beautifyOptions = {}) {
    if (Array.isArray(ston)) {
        return stringifyArray(ston, beautifyOptions);
    }
    if (typeof ston === 'object') {
        return stringifyObject(ston, beautifyOptions);
    }
    if (typeof ston === 'number') {
        return ston.toString();
    }
    if (typeof ston === 'string') {
        return stringifyString(ston, beautifyOptions.useUnquotedString);
    }
    if (ston === true) {
        return 'true';
    }
    if (ston === false) {
        return 'false';
    }
    return '';
}
