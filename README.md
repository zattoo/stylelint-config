<img width="150" src="./logo/logo.png" align="right" />

# Zattoo's Stylelint Config

Stylelint Configuration used in Zattoo. Contains base rules from [Stylelint](https://stylelint.io/) and properties ordering from [stylelint-order](https://github.com/hudochenkov/stylelint-order) for CSS and SCSS. Very opionated.

## Install

```shell
npm install --save-dev --save-exact @zattoo/stylelint-config
```

## Configuration

add `zattoo stylelint config` to your Stylelint configuration file under extends:

```json
{
  "extends": ["@zattoo/stylelint-config"]
}
```

## Usage

To lint styles

```bash
stylelint '{APP_FOLDER}/**/*.*css'
```

To autofix styles issues


```bash
stylelint '{APP_FOLDER}/**/*.*css' --fix
```
