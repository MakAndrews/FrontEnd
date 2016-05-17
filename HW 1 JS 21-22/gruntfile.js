module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/script.js'],
        dest: 'js/script.js'
      }
    },
	uglify: {
        dist: {
        src: ['js/src/script.js'],
        dest: 'js/script.min.js'
      }
    },
	sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css/src', //папка исходных файлов
        src: ['style.scss'],
        dest: 'css', //папка целевая
        ext: '.css' //целевое расширение (имя автоматически будет то же)
      }]
    }
  },
   watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/src/style.scss'],
      tasks: ['sass','concat','uglify'],
    },
    scripts: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['js/src/script.js'],
      tasks: ['concat','uglify'],
    }
   }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify','sass','watch']);
  grunt.registerTask('con', ['concat']);
  grunt.registerTask('ug', ['uglify']);
  grunt.registerTask('sa', ['sass']);
  grunt.registerTask('wa', ['watch']);

};
