module.exports = function (grunt) {

    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            options: {
                namespace: 'JST',
                // amd: true,
                // node: true,
                partialsUseNamespace: true,
                processName: function (filename) {
                    var parts = filename.split('/');
                    return parts[parts.length - 1].split('.')[0];
                }
            },
            dev: {
                files: {
                    "bin/public/js/templates.js": "shared/views/**/*.hbs"
                }
            }
        }
    });

    grunt.registerTask('default', ['handlebars:dev']);

    grunt.loadNpmTasks('grunt-contrib-handlebars');
}
