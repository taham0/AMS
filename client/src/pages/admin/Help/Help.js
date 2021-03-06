import React from 'react';
import Navbar from './../Navbar/Navbar'
import Homebar from './../Homebar/Homebar'
import './Help.css'

const Help = () => {
    return(

<body>
    <div> 
        <Navbar></Navbar>
        <Homebar></Homebar>
        
        <div class = "heading">
            <h3> Need help? Choose from the following: </h3> 
        </div>

        <div class = "heading2">
            <h3> 1) See the <u> Demo</u>: </h3> 
        </div>

        <div class = "heading3">
            <h3> OR </h3> 
        </div>

        <div class = "heading10">
        <h3> 2) Read our extensive guide: </h3> 
        </div>

        <div class = "heading4">
            <p> At the homepage, there is a static sidebar at the left. Choosing the <b>"Help"</b> option will redirect you to this page. The remaining options are discussed below. </p>

            <p> -The <b>"Courses"</b> option at the sidebar on the homepage takes you to all the registered courses in the system. From this page, the admin can create new courses as well.</p>  
            <p> -The <b>"Announcements"</b> option will direct you to a page where you can add the announcements for all the registered courses. The announcements requests will be made by the instructor of the course.</p>  
            <p> -The <b>"Users"</b> option will direct you to a page where you can view the users of all the categories on the system. Other than viewing the users, options on this page will allow the admin to add a new user and change passwords of existing users. </p> 
            <p> -The user can <b>log out </b>by clicking on the right icon on the main header of the page</p>
                
        </div>

        <div class = "heading5">
            <h3>  For further queries, contact us at: <u> <a> ams@live.com</a> </u> </h3>
        </div>

        
    </div>
</body>
    )
}

export default Help