module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/*.js'],
        dest: 'script.js'
      }
    },
	uglify: {
        dist: {
        src: ['script.js'],
        dest: 'script.min.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','uglify']);
  grunt.registerTask('con', ['concat']);
  grunt.registerTask('ug', ['uglify']);

};