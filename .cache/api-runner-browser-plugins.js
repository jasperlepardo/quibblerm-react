module.exports = [{
      plugin: require('../node_modules/gatsby-omni-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"enableListener":true,"preconnect":["https://fonts.googleapis.com","https://fonts.gstatic.com"],"web":[{"name":"Quicksand","file":"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n            "},{"name":"Commissioner","file":"    <link href=\"https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800&family\" rel=\"stylesheet\">\n"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
