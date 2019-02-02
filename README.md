# Zattoo's Stylelint Config

Extensible Stylelint Config, aggregates a various Stylelint rules from different plugins.

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
stylelint '{APP_FOLDER}/**/*.scss'
```

To autofix styles issues


```bash
stylelint '{APP_FOLDER}/**/*.scss' --fix
```
