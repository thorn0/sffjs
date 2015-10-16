module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var pkg = require('./package.json');
    grunt.registerTask('build', ['clean', 'copy', 'uglify']);
    grunt.registerTask('control', ['build', 'buildcontrol']);
    grunt.registerTask('default', ['build']);
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
                src: 'src/stringformat.js',
                dest: 'build/sffjs.js',
                options: {
                    process: function(content) {
                        return content
                            .replace(/%VERSION%/g, pkg.version)
                            .replace(/\r/g, '');
                    }
                }
            },
            tests: {
                files: [{
                    src: 'src/tests.html',
                    dest: 'build/test/tests.html',
                }, {
                    src: 'src/stringformat.tests.js',
                    dest: 'build/test/tests.js'
                }],
                options: {
                    process: function(content) {
                        return content
                            .replace('stringformat.js', 'sffjs.js')
                            .replace('stringformat.tests.js', 'tests.js')
                            .replace(/src="(?!tests\.js)/g, 'src="../')
                            .replace(/\r/g, '');
                    }
                }
            },
            extras: {
                files: [{
                    src: ['bower.json', 'package.json', 'readme.md', 'LICENSE', 'changelog.txt'],
                    dest: 'build/',
                }],
                options: {
                    process: function(content) {
                        return content.replace(/\r/g, '');
                    }
                }
            },
            options: {
                timestamp: true
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