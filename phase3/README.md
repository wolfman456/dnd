# Goals :

| Step                                                         | status  |
|--------------------------------------------------------------|---------|
| creat search function                                        |         |
| Generate random table                                        |         |
| bootstrap for CSS                                            | done    |
| creat header with tabs                                       | done    |
| display return object for different topics                   | done    |
| ~~allow restriction on classification of monster for table~~ | removed |

## Lessons learned :

This is not possible "allow restriction on classification of monster for table" with the api being used at this time.
Without a large amount of modification to the data being received.

React router has some high limitations when using to pass information and is not always the best choice for changing display.
Instead of using react router for returning information after the first call to get the class name, spell name, monster name and so on,
I learned how to use bootstrap to create a collapse button to return another component and return prop information.  

## Challenges :

1. issue with react-router url coming from API as starting / in it, which is creating issues when trying to use router
   to pass information

### Resources

* <a target="_blank" href="https://icons8.com/icon/37737/dragon">Dragon</a> icon
  by <a target="_blank" href="https://icons8.com">Icons8</a>
* Dragon image : https://www.freepik.com