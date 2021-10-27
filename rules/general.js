module.exports = {
    rules: {
        'at-rule-disallowed-list': ['debug'],
        'at-rule-no-vendor-prefix': true,
        'at-rule-empty-line-before': [
            'always',
            {
                ignore: [
                    'after-comment',
                ],
                except: [
                    'first-nested',
                    'blockless-after-same-name-blockless',
                ],
                ignoreAtRules: [
                    'import',
                ],
            },
        ],
        'block-no-empty': true,
        'block-opening-brace-space-before': 'always',
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: [
                    'if',
                    'else',
                ],
            },
        ],
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-property-value-disallowed-list': {
            '/^border/': ['none'],
        },
        'font-family-name-quotes': 'always-where-required',
        'font-weight-notation': 'numeric',
        'font-family-no-missing-generic-family-keyword': true,
        'function-comma-space-after': 'always-single-line',
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        'function-name-case': [
            'lower',
            {
                ignoreFunctions: ['/^(#{)?[a-z]+([a-zA-Z0-9]+[a-z0-9]+)?$/'],
            },
        ],
        indentation: 2,
        'length-zero-no-unit': true,
        'max-nesting-depth': 3,
        'max-empty-lines': 1,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-parentheses-space-inside': 'never',
        'no-missing-end-of-source-newline': true,
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes'],
            },
        ],
        'property-no-vendor-prefix': true,
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-class-pattern': [
            '^(([a-z0-9]+([A-Z][a-z0-9])*)*)+(_([a-z0-9]+([A-Z][a-z0-9])*)+)?(__([a-z0-9]+([A-Z][a-z0-9])*)+)?$',
            {
                resolveNestedSelectors: true,
                message:
                    'Should be in this format block_element__modifier!',
            },
        ],
        'selector-list-comma-newline-after': 'always',
        'selector-max-compound-selectors': 3,
        'selector-max-id': 0,
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: 'global',
            },
        ],
        'selector-pseudo-element-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'single',
        'value-no-vendor-prefix': true,
        'selector-max-empty-lines': 0,
        'declaration-empty-line-before': 'never',
    }
};
