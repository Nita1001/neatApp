import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {

    return (
        <>
            <Helmet>
                <title>NeatApp | About</title>
            </Helmet>
            <div className='introAbout'>
                <strong>NeatApp is designed for anyone who wants to improve <br /> Their productivity &amp; achieve their goals.</strong>
                <br />
                Whether you're a busy professional or a student,<br />
                With NeatApp you can manage your time more effectively,<br />
                <br />
                Feeling overwhelmed by your todo list?<br />
                You're not alone, Many people struggle with time management.<br />
                <br />
                Anyone can achieve their goals, with the right tools and support.<br />
                <br />
                <strong>NeatApp is here to provide that support.</strong><br />
                <strong>And with our fun &amp; rewarding achievement badges,<br />
                    You'll stay motivated every step of the way.</strong> <br />
                Don't just take our word for it,<br />
                <p><span>Try it out now and start making progress.</span></p><br /><br />
                <h6>Discover exciting and redeemable gifts within our badges, carefully curated to delight you.<br /> To add to the thrill, we've kept the element of surprise intact,<br /> ensuring an unforgettable experience for our valued users.</h6>
            </div>
        </>
    )
}

export default About