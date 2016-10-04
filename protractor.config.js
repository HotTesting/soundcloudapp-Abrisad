"use strict";

exports.config = {
    specs: ['*_spec.js'],
    directConnect: true,         //work w/o selenium server
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome',
    },
    useAllAngular2AppRoots: true
};