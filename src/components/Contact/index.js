import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.prevenDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_YeJhZkgb', // <-----------
                form.current,
                'your-token' // <----
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                '',
                                'm',
                                'e',
                            ]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially
                        on ambitious or large projects. However, if you have any
                        other requests or questions, don't hesitate to contact
                        me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>

                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>

                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>

                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>

                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

            <div className='info-map'>
                    Dat Nguyen,
                    <br/>
                    Vietnam,
                    <br/>
                    35 Lê Đình Thám, Hải Châu, Đà Nẵng <br/>
                    <span>ncdat2610@gmail.com</span>
            </div>
            <div className='map-wrap'>
                    <MapContainer center={[16.050039064049496, 108.2163527635671]} zoom={13}>
                        <TileLayer url=""/>
                        <Marker position={[16.050039064049496, 108.2163527635671]} >
                            <Popup>Dat lives here, come over for a cup of beer :-* </Popup>
                        </Marker>
                    </MapContainer>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
