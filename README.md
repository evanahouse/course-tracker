# Welcome to coursefinder!

Whether it be a small private liberal arts college or a large public university, finding courses in an easy, efficient manner is a necessity for students around the world. Co-developers Brian Cheung and Evan House have formulated a solution in response to the antiquated course finding technologies found at many of today's top tier educational institutions. They've developed a beta version of a potentially scalable application that could assist Universities in course registration processes.

In order to present courses to be displayed and manipulated, the co-developers needed data to work with. Rather than generating mock data, this application utilizes web scraping via the Nokogiri Gem in Ruby. The data is scraped from the current course offerings at The College of San Mateo, and can be found online [here](http://catalog.collegeofsanmateo.edu/current/courses/). This data allows course finder to use real data to emulate a scalable application.

## Validation

When the user routes to coursefinder, they are immediately directed to the registration page. Here, the user will enter their desired username, email address, and password.

![Validation Photo](/public/images/validation2.png)
If the user does not have an account, they may register on the registration page. If they wish to proceed without making account, they may use the "x" in the top right corner of the form to browse courses. However, they may not save courses, or view their schedule without doing so.

![Validation Photo](/public/images/validation.png)
If the user has a pre-existing account they may log in using the login form.

## Browsing Courses

Once logged in, the user is able to browse courses, add courses to their schedule, delete courses from their schedule, and view their own schedule.

![Browse Photo](/public/images/browse.png)

While the user is browsing their courses, they may filter based on the subject of the course. Note that the logged in user has access to a Navigation Bar that allows them to route to different pages depending on where they want to go. While browsing courses, the
user may add courses to

## My Courses

The my courses page gives the user a modular of courses that they are enrolled in. Here, they may choose to drop courses from their schedule. These courses may be seen graphically on the schedule tab in the next section.

![My Courses Photo](/public/images/mycourses.png)

## Schedule

![Browse Photo](/public/images/schedule.png)

Once the user has selected all of their courses, they may view their schedule using the navigation "schedule" tab. The block height of each course time corresponds with the duration of class time. The user may not add a course with time conflicts. If they try to do so, the application logic prevents this behavior. At the end of the session, the user may choose to logout.
