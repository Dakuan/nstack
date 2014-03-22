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
                    "bin/public/js/templates.js": "common/views/**/*.hbs"
                }
            }
        },

        watch: {
            templates: {
                files: ['common/views/**/*.hbs'],
                tasks: ['handlebars:dev'],
                options: {
                    livereload: true
                }
            },
            mocha: {
                files: ['server/**/*.js', 'tests/specs/server/**/*-spec.js'],
                tasks: ['mochaTest']
            },
            less: {
                files: ['client/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            client: {
                files: ['client/js/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['tests/specs/server/**/*-spec.js']
            }
        },

        less: {
            dev: {
                files: {
                    "bin/public/css/style.css": "client/less/style.less"
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);


    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
}
