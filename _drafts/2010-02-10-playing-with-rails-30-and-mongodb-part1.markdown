--- 
layout: post
title: Playing with Rails 3.0 and MongoDB part1
date: 10/02/2010
---
Rails 3.0.beta is here, let's play with it!
My first Rails 3 project is an Instapaper clone backed by MongoDB.
In this first part, I'll go through the setup of the app.

Note that my Ruby stack is based on [RVM](http://rvm.beginrescueend.com/ "RVM") and Ruby 1.9.1.

First we need to install Rails 3.0.beta:

`$ gem install i18n tzinfo builder memcache-client rack rack-test rack-mount erubis mail text-format thor bundler`

`$ gem install rails --pre`

At this point I tried to create a new project and got this error:

`/Library/Ruby/Site/1.8/rubygems.rb:384:in 'bin_path': can't find executable rails for rails-3.0.0.beta (Gem::Exception)
from /usr/bin/rails:19`

To fix it:

`$ gem install railties --pre`

Next step is installing [Mongoid](http://mongoid.org "Mongoid") a nice API to work with MongoDB. We need to use the 2.0.0.pre version which has Rails 3.0 compatibility:

`$ gem install jeweler`

`$ git clone git://github.com/durran/mongoid.git`

`$ cd mongoid`

`$ git co prerelease`

`$ rake install`

Now we can:

`$ rails app && cd app`

I found some nice MongoDB generators here: [http://github.com/kristianmandrup/mongo_rails3_gen](http://github.com/kristianmandrup/mongo_rails3_gen "Rails 3 MongoDB generators")

To use them, in the app folder:

`$ cd lib`

`$ git clone git://github.com/kristianmandrup/mongo_rails3_gen.git`

`$ cp -r mongo_rails3_gen/lib/* .`

In the Gemfile we need to add:

`gem "mongoid", "2.0.0.pre"`

> Note: it's not possible to use the mongo_ext gem [yet](http://www.mongodb.org/display/DOCS/Rails+3+-+Getting+Started "mongo_ext gem & Rails 3") so just ignore the warning regarding the driver performances.

The generators are now available:

`$ rails g mongoid:setup`

This command creates two files config/database.mongo.yml and config/initializers/mongoid.rb.
Edit the config/database.mongo.yml to reflect your MongoDB configuration.

To generate our models:

`$rails g mongoid:model`

That's it for the first part, stay tuned!