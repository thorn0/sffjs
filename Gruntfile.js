module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var pkg = require('./package.json');
    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
    grunt.initConfig({
        clean: {
            build: 'build'
        },
        copy: {
            build: {
                options: {
                    process: function(content) {
                        return content.replace(/%VERSION%/g, pkg.version);
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: 'sffjs.js',
                    dest: 'build/',
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    dest: 'build/sffjs.min.js',
                    src: 'build/sffjs.js'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: 'cultures/*.js',
                    dest: 'build/'
                }]
            }
        }
    });
};