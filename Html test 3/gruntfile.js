module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/script.js'
      }
    },
	uglify: {
        dist: {
        src: ['js/script.js'],
        dest: 'js/script.min.js'
      }
    },
	sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css', //папка исходных файлов
        src: ['style.scss'],
        dest: 'css', //папка целевая
        ext: '.css' //целевое расширение (имя автоматически будет то же)
      }]
    }
  },
   watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/style.scss'],
      tasks: ['sass'],
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
