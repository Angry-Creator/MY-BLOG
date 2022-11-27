//Each Array would return an array of three set of data, One for the first column, Two for the second column and third fo the third column

const Posts = [
    { "title": "Created my blog", "description": "I'm working on my blog. I create my blog using React js, Bootstrap. Although I did the blog there are still some features I still need to work on. Like for example the database for managing my post. Current I'm using a static javascript file to store my post and whenever I want to upload a new blog I just have to add new post to the array set. Also please take note that I will be posting my day to day programming activities on my database.", "date": "20/11/2022", "time": "8:00 PM", "image": "/images/WorkingonBlogProject.PNG" },
    { "title": "Working on the page to show blogs", "description": "Yesterday I worked on the creation of the blog but I did not touch the aspect of making each blog display it's own full page of description. Today I'm working on that aspect. Also I added some addition features which allows each individual blog to have a date and a nigerian time (That is I literally added a new data to the blog posts).", "date": "20/11/2022", "time": "8:00 PM", "image": "/images/StillWorkingonBlog.PNG" },
    {
        "title": "I'm done working with the blog creation", "description": "Today I finished my blog page and although the page is solely build on front-end with no backend works. It's still managable. I used React component to make it automatically renders the blog post. Now, what I have next to do in mind is to create a chat application, hotel booking application, and also an ecommerce application. Also, I will still work on the UI of the blog site.", "date": "27/11/2022", "time": "11:30 PM", "image": "/images/DoneWorkingWithBlogs.png"
    },
    {
        "title": "Added Lazy Loading", "description": "The lazy loading I added to the blog allows the web page to load faster and also minimize the data of the client that enters the website. Not just that I also added lazy loading to my route page component so that it doesn't load all the page the moment the person enters home page.", "date": "27/11/2022", "time": "12:00 AM", "image": "/images/AddedLazyLoading.png"
    }
]

export default Posts;