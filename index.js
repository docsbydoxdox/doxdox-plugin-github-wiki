const fs = require('fs');
const path = require('path');

const Handlebars = require('handlebars');

require('./helpers');

const admzip = require('adm-zip');

/**
 * GitHub wiki export plugin for doxdox.
 *
 * @example parseInputs(inputs, {'parser': 'dox', 'layout': 'github-wiki'}).then(buffer => console.log(buffer));
 * @param {Array} data Methods parsed using a doxdox parser.
 * @return {Promise} Promise with generated content.
 * @public
 */

const plugin = data =>
    new Promise((resolve, reject) => {

        const zip = new admzip();

        fs.readFile(
            path.join(__dirname, 'template.hbs'),
            'utf8',
            (err, contents) => {

                if (err) {

                    return reject(err);

                }

                const template = Handlebars.compile(contents);

                data.files.forEach(file => {

                    file.methods.forEach(method => {

                        zip.addFile(
                            `${file.name}/${method.name}.md`,
                            template(method)
                        );

                    });

                });

                return resolve(zip.toBuffer());

            }
        );

    });

module.exports = plugin;
