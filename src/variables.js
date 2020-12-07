var undef

export const UID = '_base' + Date.now(),
  ATTR_FEATURES_SEPARATOR = ',',
  ATTR_FEATURES = 'data-feature',
  ATTR_FEATURES_IGNORE = 'data-feature-ignore',
  ATTR_EXTERNAL_SCRIPT = 'data-feature-dependency',
  FEATURES_MAIN_BUNDLE = 'main',
  T_STRING = 'string',
  T_UNDEF = 'undefined',
  T_OBJECT = 'object',
  T_NUMBER = 'number',
  T_FUNCTION = 'function',
  EMPTY_DEFINITIONS = [undef, null, false, 0, '', '0']
