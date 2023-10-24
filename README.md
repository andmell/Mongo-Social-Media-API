# Mongo-Social-Media-API

## Description
This is a social-media API built with NoSQL via MongoDB.

This project was built to demonstrate route functionality through MongoDB, and to experiment using NoSQL as a non-relational database. This API was built around a social-media esque prototype, where a developer can test Get, Post, Put, and Delete routes on various database items related to a social media application, such as Users, Thoughts, Friends and Reactions. These methods are similar to those used in MySQL and Sequelize, but with differing relational techniques. 

## Installation
Installation for this API is generally not necessary, as it's purely for dev testing purposes. However, feel free to clone this repository to your own device, and test the various methods using Insomnia, or your preferred API development platform.

Once cloned, run
```
node /index.js
```
to initialize the application.

## Usage
Once initialized, various routes can be tested. Routes that create or update the database will generally require JSON body text to function properly. 

```
Users
- Get all users: http://localhost:3001/api/users
- Get user by ID: http://localhost:3001/api/users/ID
- Create user: http://localhost:3001/api/users
- Update user by ID: http://localhost:3001/api/users/ID
- Delete user by ID: http://localhost:3001/api/users/ID
Thoughts
- Get all thoughts: http://localhost:3001/api/thoughts
- Get thought by ID: http://localhost:3001/api/thoughts/ID
- Create new thought: http://localhost:3001/api/thoughts
- Update thought by ID: http://localhost:3001/api/thoughts/ID
- Delete thought by ID: http://localhost:3001/api/thoughts/ID
Reactions
- New reaction: http://localhost:3001/api/thoughts/thoughtID/reactions
- Delete reaction: http://localhost:3001/api/thoughts/thoughtID/reactions/reactionID
Friends
- Add friend by ID: http://localhost:3001/api/users/SourceUser/friends/TargetUser
- Remove friend by ID: http://localhost:3001/api/users/SourceUser/friends/TargetUser
```
An instructional video on how to use insomnia to test these routes can be found [here.](https://youtu.be/7emmBSxHY1)

## Credits
