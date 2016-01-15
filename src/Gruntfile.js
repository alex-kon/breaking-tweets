module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        jshint: {
          files: ['Gruntfile.js', './src/**/*.js', './test/**/*.js']
        },
        mochaTest: {
          test: {
            options: {
              reporter: 'spec',
              quiet: false,
            },
            src: ['./test/**/*.js']
          }
        }
    });

    grunt.registerTask('default', ['jshint','mochaTest']);
};