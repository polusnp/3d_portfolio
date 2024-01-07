import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import Map from "../components/Map"
import Alert from "../components/Alert"
import useAlert from "../hooks/useAlert"

function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Pavlo",
          from_email: form.email,
          to_email: "polusnp@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false)
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        })

        setTimeout(() => {
          hideAlert()
        }, [3000])

        setForm({ name: "", email: "", message: "" })
        //todo: show success message and hide the alert
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
        showAlert({
          show: true,
          text: "I didnt receive your message",
          type: "danger",
        })
      })
  }

  return (
    <div className="bg-[url('./assets/bg-contact.jpg')] bg-cover sm:h-[100vh] h-full sm:px-20">
      <section className="max-container relative flex sm:flex-row flex-col justify-between">
        {alert.show && <Alert {...alert} />}

        <div className="sm:w-1/2 w-full flex flex-col font-sans pt-16 sm:pt-36 px-10 sm:px-0 ">
          <h1 className="head-text">Get in touch</h1>
          <form
            ref={formRef}
            className="w-full flex flex-col sm:gap-3 gap-1 sm:mt-8 mt-4 text-base"
            onSubmit={handleSubmit}
          >
            <label className="text-white font-semibold text-base">
              Name
              <input
                type="text"
                name="name"
                className="input text-base"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="text-white font-semibold text-base">
              Email
              <input
                type="email"
                name="email"
                className="input text-base"
                placeholder="john@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label className="text-white font-semibold text-base">
              Your message
              <textarea
                name="message"
                rows={window.innerWidth < 640 ? 2 : 4}
                className="textarea text-base"
                placeholder="Let me know how I can help you"
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="btn text-base"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="sm:flex sm:w-1/2 w-full sm:pt-52 pt-10 sm:ml-0 ml-[-20px] ">
          <Map />
        </div>
      </section>
    </div>
  )
}

export default Contact
