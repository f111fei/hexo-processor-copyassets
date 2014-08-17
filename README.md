# Processor CopyAssets Plugin

This is a processor copyAssets plugin for Hexo.You can customize what files are not rendered but can direct copy while executing `hexo generate`.

## Install

``` bash
$ npm install hexo-processor-copyassets --save
```

## Options

You can configure this plugin in `_config.yml`. ForExample:

    copyAssets: project

or

    copyAssets: CNAME,project,resource/img

- **copyAssets** - The files or folders path in source folder that you want to direct copy to public folder.  


---

这是一个Hexo的文件处理插件，能自定义source中的指定文件或文件夹，在执行generate命令的时候能直接复制到public文件夹中而不经过渲染。比如，这个文件source/project/index.html，我不想被渲染，那么你就可以使用这个插件。

## 安装

``` bash
$ npm install hexo-processor-copyassets --save
```

## 配置插件


你可以在_config.yml中配置这个插件，例如:

    copyAssets: project  #表示project文件夹中的文件不被渲染，直接复制到public文件夹。

或者

    copyAssets: CNAME,project,resource/img #可以指定文件和文件夹，用","号隔开