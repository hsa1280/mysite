module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				// A single entry point for our app
				src: 'app/js/app.js',
				dest: 'app/appbuild.js',
			}
		// },
		// copy: {
		// 	all: {
		// 		expand: true,
		// 		cwd: 'app/',
		// 		src: ['**/*.html', '**/*.css'],
		// 		dest: 'dist/',
		// 	},
		},
	});
	grunt.loadNpmTasks('grunt-browserify');
	// grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['browserify']);
	// grunt.registerTask('default', ['browserify','copy']);
};