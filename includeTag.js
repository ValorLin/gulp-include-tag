var fs = require('fs');
var path = require('path');

var REG_EXP = /<include.+?src="(.*?)".*?><\/include>/gi;

module.exports = function includeTag(cwd, contents) {
    return contents.replace(REG_EXP, function ($0, innerFile) {
        var filePath = path.join(cwd, innerFile);
        var result = fs.readFileSync(filePath).toString();
        if (REG_EXP.test(result)) {
            return includeTag(path.dirname(filePath), result);
        } else {
            return result;
        }
    });
};

function log(str) {
    console.log('--------------------');
    console.log(str);
    console.log('--------------------');
}