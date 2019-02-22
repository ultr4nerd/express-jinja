const fs = require('fs');

const getKeysFromOptions = options => {
    const { settings, _locals, ...objectKeys } = options;

    return Object.keys(objectKeys);
}

const renderTemplate = (content, options) => {
    const keys = getKeysFromOptions(options);
    let contentString = content.toString();

    for (let key of keys) {
        contentString = contentString.replace(
            new RegExp(`\{{2,} *${key} *\}{2,}`, 'gi'),
            options[key]
        );
    }
    
    return contentString;
}

const jinja2 = (filepath, options, callback) => {
    fs.readFile(filepath, (err, content) => {
        if (err) {
            return callback(err);
        }

        const rendered = renderTemplate(content, options);

        console.log(rendered);

        return callback(null, rendered);
    })
}

module.exports = jinja2;