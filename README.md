![giphy-fun](https://media.giphy.com/media/26xBKJclSF8d57UWs/giphy.gif)

### :sunny: Cheer App!
 
Let's build a react giphy app!

#### Your task is:
* Go the Giphy API sign up page [here](https://developers.giphy.com/) and create an account.
* Click the Create An App button in the header. They will ask you for a name and a description for your app. After inputting that, you will get an API key - save that for later
* Go the API Explorer page [here](https://developers.giphy.com/explorer/) this shows you some sample URLs that correspond to the data that you want to get. For our purposes, go to the Choose An Endpoint dropdown and select Random
* The Request URL field should have been updated. Look for the part in the URL that says `api_key=`. Place your API key right after that. This is the URL that you will use to make the API call to in your React application.
* Create an app the starts out with a button and when the user clicks the button a random gif appears

### Install Axios
- run 
    ```
    npm install --save axios
    ```
    from your root directory.

- add this line to the top of App.js
```js
import axios from 'axios';
```

#### 🚀 Completion looks like:

* The app should show a "loading..." message until the fetch call has been completed (optional)
* You have an application that renders a button on page load.
* When a user clicks the button, 
    - the GIF's title appears at the top
    - The display of the user who uploaded the gif appears on the screen
    - a random Gif appears on the screen.

*HINT*: Start by finding these 3 bits of data in the JSON response


#### HW Submission

* Commit messages should be made often!!
* Create a pull request 


#### BONUS 1: Favorite GIF:
* On the side of the page (or wherever) there should be a "favorite" box, that starts out empty. Give the users a "favorite" button under the GIFs, which, when clicked, displays gif's title in the favorite box; the title should remain there until another GIF is clicked.


#### BONUS 2: Gifs Searching

* Add an input field that allows the user to add a search term


