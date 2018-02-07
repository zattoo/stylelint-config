module.exports = {
    plugins: [
        'stylelint-scss',
    ],
    rules: {
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-pattern': '^[a-z]+([a-zA-Z0-9]+[a-z0-9]+)?$',
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension-blacklist': ['scss'],
        'scss/at-mixin-pattern': '^[a-z]+([a-zA-Z0-9]+[a-z0-9]+)?(__([A-Z0-9]+([A-Z][a-z0-9])*)+)?$',
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-pattern': [
            '^(([a-z0-9]+([A-Z][a-z0-9])*)*)+(_([a-z0-9]+([A-Z][a-z0-9])*)+){0,2}(__([a-z0-9]+([A-Z][a-z0-9])*)+)?$',
            {
                message:
                    'Should be in this format [block_element]_property__modifier!',
            },
        ],
        'scss/percent-placeholder-pattern': [
            '^$',
            {
                message: 'Placeholders should not be used, use mixin instead!',
            },
        ],
        'scss/operator-no-unspaced': true,
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
