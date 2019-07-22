var undef

export const UID = '_base' + Date.now(),
  ATTR_FEATURES_SEPARATOR = ',',
  ATTR_FEATURES = 'data-feature',
  ATTR_FEATURES_IGNORE = 'data-feature-ignore',
  T_STRING = 'string',
  T_UNDEF = 'undefined',
  T_OBJECT = 'object',
  T_NUMBER = 'number',
  T_FUNCTION = 'function',
  EMPTY_DEFINITIONS = [undef, null, false, 0, '', '0']
