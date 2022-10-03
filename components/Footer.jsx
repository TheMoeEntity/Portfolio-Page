import React from 'react'
import { useState } from 'react'
import styles from '../styles/footer.module.css'
import mainstyles from '../styles/Home.module.css'

export const Footer = () => {

	const allStatus = {
		pending: "Message is being sent.....",
		error:"There was an error sending message: Error: ",
		success: "Message sent successfully, I would respond to you as soon as possible"
	}

	const [statusMessage,setStatus] = useState("")


	const handlesubmit = e => {
		e.preventDefault()
		const FName = e.target[0].value
		const LName = e.target[1].value
		const mail = e.target[2].value
		const Phone = e.target[3].value
		const msg = e.target[4].value
		const userDetails = {
			firstName: FName,
			lastName: LName,
			email: mail,
			phone:Phone,
			message: msg
		}

	
		if (FName === "") {
			setStatus("Your Name is required sir/ma'am ;)")
			return
		} else if (mail === "") {
			setStatus("A valid email for feedback is required ;)")
			return
		} else if (Phone === "") {
			setStatus("Your phone Number is equally required ;)")
			return
		} else if (msg === "" || msg.length <= 10) {
			setStatus("Message really cannot be empty or short ;)")
			return
		} else {
			setStatus(allStatus.pending)
		}

		fetch('./api/contact/', {
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
			  setStatus(allStatus.error +error)
			  return Promise.reject(error)
			
			} else if (res.ok) {
				
				setStatus(allStatus.success)
				setTimeout(() => {
					setStatus("")
				}, 15000);
				e.target.reset()
			}
		})
		.catch(err => {
			setStatus(allStatus.error+err)
			setTimeout(() => {
				setStatus("")
			}, 15000);
		})

		console.log(userDetails)
		
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
                <form onSubmit={handlesubmit}>
                    <input required type="text" placeholder='First Name' />
                    <input required type="text" placeholder='Last Name' />
                    <input required type="email" placeholder='Your Email' />
                    <input required type="phone" placeholder='Your Phone' />
                    <textarea required name="" id="" placeholder='Your Message' cols="30" rows="10"></textarea>
                    <button type="submit">SUBMIT</button>
					<p
					style={{
						color: statusMessage === allStatus.error ? "red" :
						statusMessage === allStatus.success ? "green":
						statusMessage === allStatus.pending ? "orange": "rgba(0,0,0,0.7)"
					}}
					>{statusMessage}</p>
                </form>
            </div>

		</section>
		</>
  )
}

