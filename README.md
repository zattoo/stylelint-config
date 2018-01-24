# Zattoo's Stylelint Config

Extensible shared Zattoo's Stylelint Config (ZSC)

## Introduction

ZSC aggregates a various Stylelint rules from different plugins

## Install

```shell
npm install --save-dev --save-exact @zattoo/stylelint-config
```

Since ZEC depends on plugins and extensions, to be available run it you need to install them all.

check:

```shell
npm info "@zattoo/stylelint-config@latest" peerDependencies
```

install all as dev dependencies:

```shell
npm install --save-exact --save-dev 
```

## Configuration

add `zattoo stylelint config` to your Stylelint configuration file under extends:

```json
{
  "extends": ["@zattoo"]
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