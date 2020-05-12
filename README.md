<img width="150" src="./logo/logo.png" align="right" />

# Zattoo Stylelint Configuration

Stylelint Configuration used in Zattoo. Contains base rules from [Stylelint](https://stylelint.io/) and properties ordering from [stylelint-order](https://github.com/hudochenkov/stylelint-order) for CSS and SCSS. Very opinionated.

## Install

```shell
npm install --save-dev --save-exact @zattoo/stylelint-config
```

## Configure

add to your Stylelint configuration file (could be `.stylelintrc`):

```json
{
  "extends": ["@zattoo/stylelint-config"]
}
```

## Usage

To lint

```bash
stylelint '{APP_FOLDER}/**/*.*css'
```

To autofix issues


```bash
stylelint '{APP_FOLDER}/**/*.*css' --fix
```
