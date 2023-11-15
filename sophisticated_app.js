/*
filename: sophisticated_app.js

This code represents a sophisticated and elaborate JavaScript application that simulates a social media platform.
It includes features such as user authentication, creating and deleting posts, liking and commenting on posts, and displaying user profiles.

Disclaimer: This code is for illustrative purposes only and does not include complete error handling or security measures.
*/

// Define the User class
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(content, this.username);
    this.posts.push(post);
  }

  deletePost(postId) {
    const index = this.posts.findIndex(post => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}

// Define the Post class
class Post {
  constructor(content, author) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.content = content;
    this.author = author;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  comment(user, text) {
    const comment = new Comment(user, text);
    this.comments.push(comment);
  }
}

// Define the Comment class
class Comment {
  constructor(user, text) {
    this.user = user;
    this.text = text;
  }
}

// Simulating user authentication
const user1 = new User("john_doe", "john@example.com", "123456");
const user2 = new User("jane_smith", "jane@example.com", "abcdef");

// Create some posts
user1.createPost("Hello, everyone! This is my first post.");
user1.createPost("I'm loving this social media platform!");
user1.posts[0].like();

user2.createPost("Hey there! Excited to join this community.");

// Add comments to posts
user1.posts[1].comment(user2, "Welcome, Jane!");

// Output user profiles and posts
console.log("USER PROFILES");
console.log(user1);
console.log(user2);

console.log("POSTS");
console.log(user1.posts);
console.log(user2.posts);