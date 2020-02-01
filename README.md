# scraping

Recipe Importer
Intro
Jumbo relies to a large degree on inspecting and interacting with the DOM.
This exercise is meant to have a well-defined scope and yet be similar to the type of work we do on an every-day basis.

Exercise
While our javascript code runs on users' mobile devices, for the purpose of this exercise, we want you to expose this work as an API endpoint. Use any web-framework you wish.

Create an API endpoint that takes a single parameter url and returns JSON data representing the recipe of the passed parameter.

Request
This is the request that your server should handle.

Method: GET
Path: /recipe
Parameters:
url: string
Thus a fully formed url would look similar to localhost:8080/recipe?url=http%3A%2F%2Fwww.google.com

Response
A JSON object with ingredients and steps lists based on the contents of the url page requested. Other parameters may be interesting to include.

Example:
{
  "name": "Barbecue Corn on the Cob",
  "ingredients": [
  {
    "name": "Corn",
    "quantity": 2
  },
  {
    "name": "Butter",
    "quantity": 2,
    "unit": "tbsp"
  }
  ],
  "steps": [
    "Preheat grill to 400°F",
    "Once heated, scrub to clean off any encrusted pieces",
    "Grill corn on high heat for 2 minutes",
    "..."
  ]
}
Notes
The endpoint should work with the following examples:

https://cooking.nytimes.com/recipes/1017518-panzanella-with-mozzarella-and-herbs (Should be possible despite pay-wall)
https://www.eatthelove.com/cookies-and-cream-cookies/
https://www.maangchi.com/recipe/bugeopo-gochujang-muchim
http://www.laurainthekitchen.com/recipes/croque-madam/
You are welcome to use external libraries.

Our whole codebase is based on typescript.
Feel free to use it if you're familiar with it or would like to learn.
It's not required, and it's not a bad thing if you use pure javascript. We're confident you can pick up typescript in no time if you join us.

Deliverables
Send us your source code to start@jumboprivacy.com (zip, GitHub, etc)
We document quite a few things internally for our own benefit. A readme.md with documentation of the architecture, decisions made, and challenges is quite helpful for us to understand your thought process.
What we look for
Does it work with the examples given
Your code should be prepared for website DOM changes
Architecture of the code
Tests. We don't do test-driven-development, but we do like code which is written in a way that it's easily testable. Make a decision which code should be tested, and how. We don't aim for 100% test-coverage, but want to be smart about what we test.
Documentation. Both in the code (in a file, for functions, and for special cases,) as well documentation as an overview of your choices and how the system works as a whole make it easy for us to evaluate your work, and give us a sense of how you think about the problem, and the decisions you made -- this can just be the readme.md mentioned above.
Timeline
Take as long as you like. And do it when you have the time. We would expect that this can be done in as little as 2 hours, but you could also spend a week on it.

Find a balance: Perfection comes at a high cost, so make reasonable decisions where to invest your time and how much time to invest.
Not choosing to spend time on something can be a positive indicator of good decision making.
Find the details that are worth paying attention to.

If you're in doubt about anything, ask.