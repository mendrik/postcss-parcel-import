var postcss = require('postcss');
var fs = require('fs');
var path = require('path');

module.exports = postcss.plugin('postcss-parcel-import', function (opts) {
    opts = opts || {};
    return function (root, result) {
        root.walkAtRules('parcel-import', function(rule) {
            var relativeFile = rule.params.substr(1, rule.params.length - 2);
            var file = path.join(path.dirname(rule.source.input.file), relativeFile);
            var content = fs.readFileSync(file, 'utf-8');
            if (content.indexOf('@parcel-import') !== -1) {
                throw Error('Recursive @parcel-import detected in ' + file);
            }
            rule.replaceWith(content);
        });
    };
})
