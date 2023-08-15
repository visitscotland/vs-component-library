# Introduction

Thank you for considering contributing to VisitScotland. We're always striving to improve our code and sites so please get in touch if you have any suggestions.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

All communication should follow the rules set out in our [Code of Conduct](CODE_OF_CONDUCT.md), please ensure that this is respected.


# Contributing guidelines

## Responsibilities
* Ensure cross-platform compatibility for every change that's accepted. Windows, Mac, modern mobile devices.
* Ensure a minimum of [AA accessibility standards](https://www.w3.org/WAI/WCAG2AA-Conformance) are respected
* Unit tests should be added for all new functionality. We use vue-test-utils.
* Keep feature versions as small as possible, preferably one new feature per version.
* Be welcoming to newcomers and encourage diverse new contributors from all backgrounds.  
  
  
  
# Getting started

## How to report a bug
Any security issues should be submitted directly to XXXX
In order to determine whether you are dealing with a security issue, ask yourself these two questions:
* Can I access something that's not mine, or something I shouldn't have access to?
* Can I disable something for other people?

If the answer to either of those two questions are "yes", then you're probably dealing with a security issue. Note that even if you answer "no" to both questions, you may still be dealing with a security issue, so if you're unsure, just email us at XXXX.

### How to file a bug report.
You can even include a template so people can just copy-paste (again, less work for you).

When filing an issue, make sure to answer these five questions:

1. What version of the component library are you using?
2. What operating system and processor architecture are you using?
3. What did you do?
4. What did you expect to see?
5. What did you see instead?

## How to suggest a feature
Please [send a GitHub Pull Request to visitscotland](https://github.com/visitscotland/vs-component-library/compare/master) with a clear list of what you've done ([read more about pull requests](http://help.github.com/pull-requests/)). Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).


# Code review process
The core team looks at Pull Requests on a regular basis and your change will be reviewed by a member of this team.

After feedback has been given we expect responses within two weeks. After two weeks we may close the pull request if it isn't showing any activity.

### Code style

Please use an IDE that is capable of Prettier integration. This will ensure that preferred code style is maintained and any deviation is highlighted.

### Commit messages

When committing code, use the `yarn commit` command in your terminal and follow the instructions. The best commit messages use the imperative tense and are to the point.
