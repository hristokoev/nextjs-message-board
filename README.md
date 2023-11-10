## Message Board

This is a simple message board application that shows posts feed and individual posts with comments. The application is built using Next.js and uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to fetch data.

### Main page

#### Each post contains the following data:

* Title
* Shortened text
* The name of the author obtained from the Users endpoint
* Number of comments

Upon clicking the post, the user is taken to the post detail page.

### Post detail page

* Title
* Author information
* The whole text of the post
* List of all comments, each of which shows the following data:
    * The title of the comment
    * The author of the comment
    * The text of the comment

