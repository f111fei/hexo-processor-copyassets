var pathFn = require('path');

var config = hexo.config;
var processor = hexo.extend.processor,
  rHiddenFile = /^[^_](?:(?!\/_).)*$/,
  rTmpFile = /[~%]$/,
  postDir = '_posts/',
  postDirLength = postDir.length;
  
var rule = function(path){
  if (!config.copyAssets) return false;
  var array = config.copyAssets.split(",");
  for(var i in array)
  {
	  if(path.substring(0,array[i].length) === array[i])
	  {
		  return true;
	  }
  }
  return false;
}
processor.register(rule , require('./copyAsset'));