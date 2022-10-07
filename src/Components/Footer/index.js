import React from 'react';


const Footer = ()=> {
    return (
    <footer className="flex-row space-between">
        <section>
        <header>email</header>
        <a href="mailto:mcsalazar122@gmail.com">mcsalazar122@gmail.com</a>
        </section>
        <section>
<header>Linkedin</header>
<a href="https://www.linkedin.com/in/christy-salazar-719a1849?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzmXQ7gtcT5qMb%2F4K7URWDg%3D%3D" class="fa fa-linkedin"></a>

</section>
<section>
<header>phone</header>
<p>210.286.7086</p>
</section>
<div>
<h4> &copy;{new Date().getFullYear()} ~cs creation</h4>
</div>       
    </footer>
    )  

} 

export default Footer