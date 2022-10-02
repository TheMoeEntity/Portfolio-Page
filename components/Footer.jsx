import React from 'react'
import { useState,useRef } from 'react'
import styles from '../styles/footer.module.css'
import mainstyles from '../styles/Home.module.css'
// import { motion } from 'framer-motion'
// import { useInView } from "react-intersection-observer"
// import { useEffect } from "react"
// import { useAnimation } from "framer-motion"

export const Footer = () => {

	// const {ref, inView} = useInView()
	// const animation = useAnimation()

	// useEffect(()=> {
	// 	if (inView) {
	// 	  animation.start({
	// 		  y:0,
	// 		  transition: {
	// 			type: "spring",
	// 			duration: 2,
	// 			delay:0.5,
	// 			bounce: 0.6
	// 		  },
	// 	  })
	// 	} 
		
	// 	if (!inView) {
	// 	  animation.start({
	// 		  y:"100vh",
	// 	  })
	// 	}
	//   },[inView])

	const [userDetails,setUserDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone:"",
		message: ""
	})
	const [submitted,setSubmitted] = useState(false)
	const [statusMessage,setStatus] = useState("")
	const Messagefield = useRef(null)
	const fName = useRef(null)
	const lName = useRef(null)
	const email = useRef(null)
	const phone = useRef(null)

	const setuser = (value,field)=> {
 
		switch (field) {
			case "firstName":
				setUserDetails(prevDetails => {
					return {
						...prevDetails,
						firstName: value
					}
				})
				break
			case "lastName":
				setUserDetails(prevDetails => {
					return {
						...prevDetails,
						lastName: value
					}
				})
				break
			case "email":
				setUserDetails(prevDetails => {
					return {
						...prevDetails,
						email: value
					}
				})
				break
			case "phone":
				setUserDetails(prevDetails => {
					return {
						...prevDetails,
						phone: value
					}
				})
				break
			case "message":
				setUserDetails(prevDetails => {
					return {
						...prevDetails,
						message: value
					}
				})
				break
		}

	}

	const handlesubmit = e => {
		e.preventDefault()
		
		if (userDetails.firstName === "") {
			setStatus("Your Name is required sir/ma'am ;)")
			return
		} else if (userDetails.email === "") {
			setStatus("A valid email for feedback is required ;)")
			return
		} else if (userDetails.phone === "") {
			setStatus("Your phone Number is equally required ;)")
			return
		} else if (userDetails.message === "" || userDetails.message.length <= 10) {
			setStatus("Message really cannot be empty or short ;)")
			return
		} else {
			setStatus("Message is being sent.....")
		}

		fetch('/api/contact/contact', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userDetails)
		})
		.then(async res => {
			const isJson = res.headers.get('content-type')?.includes('application/json')
			const data = isJson ? await res.json() : null
	  
			if (!res.ok) {
				
			  const error = (data && data.message) || res.status;
			  setStatus("There was an error sending message: Error: "+error)
			  return Promise.reject(error)
			
			} else if (res.status === 200) {
				
				setSubmitted(true)
				setStatus("Message sent successfully, we will respond to you shortly")
				setTimeout(() => {
					setStatus("")
				}, 15000);
				Messagefield.current.value = ""
				fName.current.value = ""
				lName.current.value = ""
				email.current.value = ""
				phone.current.value = ""
				setUserDetails(()=> {
					return {
						firstName: "",
						lastName: "",
						email: "",
						phone:"",
						message: ""
					}
				})
			}
		})
		.catch(err => {
			alert("An error occured while trying to send message")
			setStatus("There was an error sending message. Error: "+err)
			setTimeout(() => {
				setStatus("")
			}, 15000);
		})
		
	}

  return (

		<>
		<section className={mainstyles.about}>
              <h5>CONTACTS</h5>
              <h3>GET IN TOUCH WITH ME!</h3> <br />
              <p id='contact'>
                {`Thank you for going through my page. Got a project you'd like me on? do reach out to me let's get you up and running. You could also buy me coffee
                or just say hello. I am active on my socials, you may reach via any of them. `}
              </p> <br />
              <div className={mainstyles.socials}>
                  <a target={`_blank`} rel="noopener noreferrer" href="https://twitter.com/NMoses_"><i className='fa-brands fa-twitter'></i></a>
                  <a target={`_blank`} rel="noopener noreferrer" href="https://instagram.com/NC_Moses"><i className='fa-brands fa-instagram'></i></a>
                  <a target={`_blank`} rel="noopener noreferrer" href="https://wa.me/+2348075489362"><i className='fa-brands fa-whatsapp'></i></a>
                  <a target={`_blank`} rel="noopener noreferrer" href="https://github.com/TheMoeEntity"><i className='fa-brands fa-github'></i></a>
                  <a target={`_blank`} rel="noopener noreferrer" href="https://web.facebook.com/Moses.Nwigberi/"><i className='fa-brands fa-facebook'></i></a>
              </div>
		</section>
		<section id={styles.footer}>
            
			<div className={styles.first}>
                <div>
                    <span className={styles.zzlogo}>
                    <h2>ZZ</h2>
                    <span>DIGITAL</span>
                    </span>
                    
                </div>
                <div>
                    <div>
                        <h2>HOME</h2>
                        <span>
                            <h2>HOURS</h2>
                            <h4>Mon-Sat</h4>
                            <h4>10AM-6PM</h4>
                            <h4>Sun</h4>
                            <h4>12PM</h4>
                        </span>
                        <h2>About Me</h2>
                    </div>
                    <div>
                    <h2>OUR PROCESS</h2>
                    <span>
                        <h2>NEWS</h2>
                        <h4>Mon-Sat</h4>
                    </span>
                    <button>
                        INQUIRE
                    </button>
                    </div>
                </div>
                <div>
                    <span>
                        <i className='fa-solid fa-phone'></i>
                        (+234) 807-548-9362
                    </span>
                    <span>
                        <i className='fa-solid fa-envelope'></i>
                        mosesnwigberi@icloud.com
                    </span>
                    <span>
                        <i className='fa-solid fa-envelope'></i>
                        mosesnwigberi@gmail.com
                    </span>
                </div>
            </div>
            
            <div>
                <h2>Inquire/Contact me</h2>
                Reach out for a project or just say Hi
                <form>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="phone" placeholder='Your Phone' />
                    <textarea name="" id="" placeholder='Your Message' cols="30" rows="10"></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>

		</section>
		</>
  )
}

