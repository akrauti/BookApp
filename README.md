# BookApp

BookApp is an application that you can use to manage a collection of books. In the current version it uses [MongoDB  Atlas](https://www.mongodb.com/atlas/database) as its database. I chose Atlas because it doesn't require any input from the user to get running, so no need to download or install any additional software.

The main goal and inspiration for this project was simplicity. I wanted to create a one page web app that has a REST API as its back-end and a simple and an easy to use intuitive UI. I have done applications that work similarly to this previously but I still learned something new especially in the React way of thinking.


## Dependencies
[Node version 18.15](https://nodejs.org/en/download)

[MongoDB  Atlas](https://www.mongodb.com/atlas/database)



## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the contents of both the frontend folder and backend folder and start the application with a single command.

```bash

##Go inside the folder labeled "frontend" 
##For example(...\BookApp\frontend) in your terminal using cd and run the following command

npm start


```

## Usage

**1. If no books are present create one by typing information to the form fields and press *Save new***

**2. Click a book card which displays the author and title. The form fills up with the clicked books information.**

**3. You can create a new book by filling up the form and clicking the *Save new* button**

**4. You can update the book you clicked by filling up the form and clicking the *Save* button**

**5. You can delete the book you selected by clicking the *Delete* button**

