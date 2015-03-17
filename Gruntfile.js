'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		clean: {
			build: {
				src: ['build/']
			}
		}, 
		copy: {
			build: {
				expand: true,
				cwd: 'app/',
				src: '**/*.html',
				dest: 'build/',
				flatten: false,
				filter: 'isFile'
			}
		},
		browserify: {
			dev: {
				src: ['app/js/**/*.js'],
				dest: 'build/bundle.js'
			},
			options: {
				transform: ['reactify']
			}
		}
	});

	grunt.registerTask('build', ['clean', 'browserify', 'copy']);
};