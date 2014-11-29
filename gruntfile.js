'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    grunticon: {
      development: {
        files: [{
          expand: true,
          cwd: 'images/icons',
          src: ['*.svg'],
          dest: "icons",
        }],
        options: {
          previewhtml: "icons.html",
          defaultWidth: "64px",
          defaultHeight: "64px",
          colors: {
            grey: '#006DAF',
            main: '#2090B4',
          },
          customselectors: {
            "drupal": [".drupal"],
            "drupal-grey": [".drupal:hover"],
            "github": [".github"],
            "github-grey": [".github:hover"],
            "linkedin": [".linkedin"],
            "linkedin-grey": [".linkedin:hover"],
            "twitter": [".twitter"],
            "twitter-grey": [".twitter:hover"],
          }
        }
      }
    },

//    svgmin: {
//      dist: {
//        files: [{
//          expand: true,
//          cwd: '_images',
//          src: '**/*.svg',
//          dest: 'img'
//        }]
//      }
//    },
  });

//  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-grunticon');

  // grunt icons: This will ensure all of our icons are created properly.
  grunt.registerTask('icons', [
    'grunticon:development',
  ]);
};
