import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'
import play_icon from'../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img onClick={()=>{setPlayState(true)}} src={play_icon} alt="" className='play-icon'/>
        </div>

        <div className="about-right">
  <h3>About University</h3>
  <h2>Nurturing Tommorow's Leaders Today</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum illum architecto animi voluptatibus omnis necessitatibus repellendus laboriosam nam! Voluptatem, earum. Cum quae delectus et hic quos aut similique. At, commodi repellat quasi similique exercitationem a quidem ut, suscipit illum quia sequi earum nesciunt, saepe unde dolorem! Harum, placeat magnam provident fuga est voluptatem exercitationem, corporis consequatur doloribus, ipsum ipsa? Quasi.</p>
        </div>
    </div>
  )
}

export default About