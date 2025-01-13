import React, { useRef } from 'react'
import  './Testimonials.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef()
    let tx = 0

 const slideForward = () => {
     if(tx > -50){
        tx -= 25
     }

     slider.current.style.transform  = `translateX(${tx}%)`
 }


  let ty = 0
  const slideBackward = () => {
    if(ty > 50){
        ty += 25
     }

     slider.current.style.transform  = `translateX(${ty}%)`
 }



  return (
    <div className='testimonials'>
      <img src={Next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={Back_icon} alt="" className='back-btn' onClick={slideBackward }/>
      <div className="slider">
         <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Educity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias soluta cum eius minus dolorum quos obcaecati ea cupiditate, eligendi, earum hic adipisci maxime iusto aliquam. Temporibus, reprehenderit nobis repellat alias quis quos </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Educity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias soluta cum eius minus dolorum quos obcaecati ea cupiditate, eligendi, earum hic adipisci maxime iusto aliquam. Temporibus, reprehenderit nobis repellat alias quis quos </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Educity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias soluta cum eius minus dolorum quos obcaecati ea cupiditate, eligendi, earum hic adipisci maxime iusto aliquam. Temporibus, reprehenderit nobis repellat alias quis quos </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Educity, USA</span>
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias soluta cum eius minus dolorum quos obcaecati ea cupiditate, eligendi, earum hic adipisci maxime iusto aliquam. Temporibus, reprehenderit nobis repellat alias quis quos </p>
                </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials