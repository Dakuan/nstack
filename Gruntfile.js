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
        },

        watch: {
            templates: {
                files: ['shared/views/**/*.hbs'],
                tasks: ['handlebars:dev']
            },
            mocha: {
                files: ['server/**/*.js', 'tests/specs/server/**/*-spec.js'],
                tasks: ['mochaTest']
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['tests/specs/server/**/*-spec.js']
            }
        }
    });

    grunt.registerTask('default', ['watch']);


    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
}
