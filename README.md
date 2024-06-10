# National Geographic Articles App

* Overview

  The National Geographic Articles App is a React and Vite-based application that
  offers a collection of articles from the National Geographic magazine.
  The app includes both an admin interface and a user. 

* interface:
  
    * Admin Interface: Allows administrators to create, edit, and delete articles using the QuillEditor.
      
    * User Interface: Enables users to read articles and browse through different categories.

* Features:
  
    * Article Management: Admins can manage articles by creating, editing, and deleting content.

    * Article Reading: Users can read articles sorted into four categories:
      Animals, History and Culture, Science, and Environment.

    * Authentication: Users can register and log in to access the app's features.

    * Protected Routes: Certain routes are protected and require authentication to access.

* Technologies Used:
  
    * React: A JavaScript library for building user interfaces.

    * Vite: A build tool that provides a faster and leaner development experience for modern web projects.

    * React Hooks: Used for managing state and side effects in functional 
    components.

   * Tailwind CSS: A utility-first CSS framework for designing responsive and modern interfaces.

   * Bootstrap: A CSS framework for building responsive, mobile-first projects.
    
   * React Icons: A collection of popular icons as React components.
      ZodResolver: Used for schema validation and form validation.
    
   * Project Structure
      The application is divided into the following categories:
      Animals
      History and Culture
      Science
      Environment

     Usage:
    
     Admin Interface:  
        * Admins can access the admin interface to manage articles:
          Create Article: Fill in the form and use the QuillEditor to create new articles.
          
        * Edit Article: Modify existing articles using the QuillEditor.
          
        * Delete Article: Remove articles from the collection.
    
    User Interface:
      Users can read articles by navigating through the categories:
      Animals: Articles related to wildlife and animal behavior.
      History and Culture: Articles about historical events and cultural topics.
      Science: Articles covering various scientific disciplines and discoveries.
      Environment: Articles focusing on environmental issues and conservation efforts.
    
    * Authentication
      Registration Form: New users can create an account.
      Login Form: Existing users can log in to access protected routes and features.
    
    * Protected Routes
      Certain routes within the application are protected and require users to be authenticated.
      This ensures that only authorized admin can access the admin interface and perform article management tasks.


