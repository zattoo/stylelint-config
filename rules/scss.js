module.exports = {
    overrides: [{
        files: ['**/*.scss'],
        customSyntax: 'postcss-scss',
        plugins: ['stylelint-scss'],
        rules: {
            'scss/at-extend-no-missing-placeholder': true,
            'scss/at-function-pattern': '^[a-z]+([a-zA-Z0-9]+[a-z0-9]+)?$',
            'scss/load-no-partial-leading-underscore': true,
            'scss/at-import-partial-extension-disallowed-list': ['scss'],
            'scss/at-mixin-pattern': '^[a-z]+([a-zA-Z0-9]+[a-z0-9]+)?(__([a-zA-Z0-9])+)?$',
            'scss/dollar-variable-pattern': [
                '^(([a-z0-9]+([A-Z][a-z0-9])*)*)+(_([a-z0-9]+([A-Z][a-z0-9])*)+){0,2}(__([a-zA-Z0-9])+)?$',
                {
                    message:
                        'Should be in this format [block_element]_property__modifier!',
                },
            ],
            'scss/percent-placeholder-pattern': ['^$', {
                message: 'Placeholders should not be used, use mixin instead!',
            }],
            'scss/selector-no-redundant-nesting-selector': true,
        },
    }],
};
