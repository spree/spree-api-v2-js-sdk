// Based on https://github.com/ljharb/qs/blob/master/lib/stringify.js

const serializeDate = (date: Date) => date.toISOString()

const isBuffer = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return false
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj))
}

const isNonNullishPrimitive = (v) =>
  typeof v === 'string' ||
  typeof v === 'number' ||
  typeof v === 'boolean' ||
  typeof v === 'symbol' ||
  typeof v === 'bigint'

const hexTable = (() => {
  const array = []

  for (let i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase())
  }

  return array
})()

const encode = (str, charset): string => {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str
  }

  let string = str
  if (typeof str === 'symbol') {
    string = Symbol.prototype.toString.call(str)
  } else if (typeof str !== 'string') {
    string = String(str)
  }

  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B'
    })
  }

  let out = ''
  for (let i = 0; i < string.length; ++i) {
    let c = string.charCodeAt(i)

    if (
      c === 0x2d || // -
      c === 0x2e || // .
      c === 0x5f || // _
      c === 0x7e || // ~
      (c >= 0x30 && c <= 0x39) || // 0-9
      (c >= 0x41 && c <= 0x5a) || // a-z
      (c >= 0x61 && c <= 0x7a) // A-Z
    ) {
      out += string.charAt(i)
      continue
    }

    if (c < 0x80) {
      out = out + hexTable[c]
      continue
    }

    if (c < 0x800) {
      out = out + (hexTable[0xc0 | (c >> 6)] + hexTable[0x80 | (c & 0x3f)])
      continue
    }

    if (c < 0xd800 || c >= 0xe000) {
      out = out + (hexTable[0xe0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3f)] + hexTable[0x80 | (c & 0x3f)])
      continue
    }

    i += 1
    c = 0x10000 + (((c & 0x3ff) << 10) | (string.charCodeAt(i) & 0x3ff))
    out +=
      hexTable[0xf0 | (c >> 18)] +
      hexTable[0x80 | ((c >> 12) & 0x3f)] +
      hexTable[0x80 | ((c >> 6) & 0x3f)] +
      hexTable[0x80 | (c & 0x3f)]
  }

  return out
}

const isArray = Array.isArray

const push = Array.prototype.push

const pushToArray = (arr, valueOrArray) => {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray])
}

const rfc3986Formatter = (value): string => {
  return String(value)
}

const generateBracketsArrayPrefix = (prefix: string, _key: string): string => prefix + '[]'

const charset = 'utf-8'

const stringify = (source: unknown, prefix: string) => {
  if (source instanceof Date) {
    source = serializeDate(source)
  }

  if (source === null) {
    source = ''
  }

  if (isNonNullishPrimitive(source) || isBuffer(source)) {
    const keyValue = encode(prefix, charset)

    return [rfc3986Formatter(keyValue) + '=' + rfc3986Formatter(encode(source, charset))]
  }

  const values = []

  if (typeof source === 'undefined') {
    return values
  }

  const objKeys = Object.keys(source)

  for (let i = 0; i < objKeys.length; ++i) {
    const key = objKeys[i]
    const value = source[key]

    const keyPrefix = isArray(source) ? generateBracketsArrayPrefix(prefix, key) : prefix + ('[' + key + ']')

    pushToArray(values, stringify(value, keyPrefix))
  }

  return values
}

/**
 * Serializes object into a query string understood by Spree.
 * Spree uses the "brackets" format for serializing arrays which
 * is a different format than used by URLSearchParams.
 */
const objectToQuerystring = (source: Record<string, any>): string => {
  const topLevelKeys = []

  const objKeys = Object.keys(source)

  for (let i = 0; i < objKeys.length; ++i) {
    const key = objKeys[i]

    pushToArray(topLevelKeys, stringify(source[key], key))
  }

  return topLevelKeys.join('&')
}

export { objectToQuerystring }
