# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

### Added
- [breaking change] define order of block mixins, variables, custom properties, and inline declarations

## [1.2.0] – 01.02.2018

### Changed

- [breaking change] `selector-class-pattern` and `scss/dollar-variable-pattern` fixed regex to prevent `__`
- [breaking change] scss rules are added to global rule set

## [1.1.0] – 30.01.2018

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
