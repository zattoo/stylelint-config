# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [5.0.0] – Unreleased

[breaking change] Add `declaration-block-no-shorthand-property-overrides` rule

## [4.0.0] – 12.05.2020

Dependencies update

### Changed
- [breaking change] `stylelint` dependency raised to v13
- [breaking change] `stylelint-order` dependency raised to v4

### Removed
- `stylelint` as peer dependency

## [3.3.0] – 27.01.2020

Added `font-family-no-missing-generic-family-keyword` rule, to assure always present fallback to system font.

## [3.2.1] – 04.11.2019

### Fixed
- `zploy` appearance in dependecies

## [3.2.0] – 22.09.2019

### Changed
- updated all dependencies
- declared support of multiple major versions of Stylelint peer

## [3.1.0] – 02.02.2018

First public npm release

### Changed
- `stylelint` is listed in peerDependencies now
- dependencies updated

## [3.0.0] – 09.04.2018

### Added
- css grid definitions to `properties-order`

### Changed
- [breaking change] put `at-rule` without `block` before `defintions`

### Removed
- `order/order` from general settings

## [2.1.0] – 01.03.2018

Remove stylelint as peer and update other dependencies to latest versions

## [2.0.2] – 08.02.2018

### Fixed
- at mixin and variables regexp bug

## [2.0.1] – 08.02.2018

### Changed
- Allow upper case in modificators for mixins and variables

## [2.0.0] – 07.02.2018

### Added
- [breaking change] define order of block mixins, variables, custom properties, and inline declarations

## [1.2.0] – 01.02.2018

### Changed
- [breaking change] `selector-class-pattern` and `scss/dollar-variable-pattern` fixed regex to prevent `__`
- [breaking change] scss rules are added to global rule set

## [1.1.0] - 30.01.2018

### Added
- [breaking change] `selector-max-empty-lines` rule
- [breaking change] `declaration-empty-line-before` rule

### Removed
- [breaking change] `addEmptyLineBefore` function and all mentioning of it

### Changed
- `rule-empty-line-before` rule

## [1.0.0] – 29.01.2018

Initial bootstrap from React Shop project

### Changed (compare with origin)
- decomposed rules
- `number-leading-zero` rule `never` → `always`
