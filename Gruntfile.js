module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var pkg = require('./package.json');
    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
    grunt.initConfig({
        buildcontrol: {
            options: {
                dir: 'build',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
                tag: pkg.version
            },
            build: {
                options: {
                    remote: '../',
                    branch: 'build'
                }
            }
        },
        clean: {
            build: ['build/**/*', '!build/.git/**/*']
        },
        copy: {
            src: {
                src: 'src/sffjs.js',
                dest: 'build/sffjs.js',
                options: {
                    process: function(content) {
                        return content.replace(/%VERSION%/g, pkg.version);
                    }
                }
            },
            extras: {
                files: [{
                    flatten: true,
                    expand: true,
                    src: ['bower.json', 'package.json', 'readme.md', 'LICENSE', 'changelog.txt'],
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