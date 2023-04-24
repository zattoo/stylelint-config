module.exports = {
    rules: {
        'at-rule-disallowed-list': ['debug'],
        'at-rule-no-vendor-prefix': true,
        'block-no-empty': true,
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,
        'declaration-property-value-disallowed-list': {
            '/^border/': ['none'],
        },
        'font-family-name-quotes': 'always-where-required',
        'font-weight-notation': 'numeric',
        'font-family-no-missing-generic-family-keyword': true,
        'function-url-quotes': 'always',
        'function-name-case': ['lower', {
            ignoreFunctions: ['/^(#{)?[a-z]+([a-zA-Z0-9]+[a-z0-9]+)?$/'],
        }],
        'length-zero-no-unit': true,
        'max-nesting-depth': 3,
        'media-feature-name-no-vendor-prefix': true,
        'property-no-unknown': [true, {
            ignoreProperties: ['composes'],
        }],
        'property-no-vendor-prefix': true,
        'rule-empty-line-before': ['always-multi-line', {
            except: ['first-nested'],
            ignore: ['after-comment'],
        }],
        'selector-class-pattern': [
            '^(([a-z0-9]+([A-Z][a-z0-9])*)*)+(_([a-z0-9]+([A-Z][a-z0-9])*)+)?(__([a-z0-9]+([A-Z][a-z0-9])*)+)?$',
            {
                resolveNestedSelectors: true,
                message: 'Should be in this format block_element__modifier!',
            },
        ],
        'selector-max-compound-selectors': 3,
        'selector-max-id': 0,
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: 'global',
        }],
        'selector-pseudo-element-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'value-no-vendor-prefix': true,
        'declaration-empty-line-before': 'never',
    },
};
