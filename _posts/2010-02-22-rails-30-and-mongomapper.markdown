--- 
layout: post
title: Rails 3.0 and MongoMapper
date: 22/02/2010
---
Here is some notes regarding MongoMapper usage in a Rails 3 application.

First install Rails 3:
<script src="http://gist.github.com/314473.js?file=Rails+installation"> </script>

Create config/initializers/mongo.rb file:
<script src="http://gist.github.com/314473.js?file=config_initializers_mongo.rb"> </script>

Append Gemfile, for the edge version:
<script src="http://gist.github.com/314473.js?file=Gemfile"> </script>

UPDATE: For a more stable version (as Jacques Crocker mentioned in the comments):
<script src="http://gist.github.com/314473.js?file=MongoMapper_Rails3"> </script>

Run "bundle install" start your Mongo server and that's all! You can now play with MongoMapper and Rails 3.

Example model app/model/paper.rb:
<script src="http://gist.github.com/314473.js?file=app_models_paper.rb"> </script>