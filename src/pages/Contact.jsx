import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import Map from "../components/Map"

function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)

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
        setForm({ name: "", email: "", message: "" })
        //todo: show success message and hide the alert
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
        // todo: show error message
      })
  }

  //Animation
  const handleFocus = () => {}
  const handleBlur = () => {}

  return (
    <section className="relative flex sm:flex-row flex-col justify-between sm:h-screen bg-[url('./assets/bg-contact.jpg')] bg-cover">
      <div className="lg:w-3/4 sm:w-1/2 w-full flex flex-col font-sans p-12 pt-28">
        <h1 className="head-text">Get in touch</h1>
        <form
          ref={formRef}
          className="w-full flex flex-col gap-3 mt-4 text-xs"
          onSubmit={handleSubmit}
        >
          <label className="text-white font-semibold text-xs">
            Name
            <input
              type="text"
              name="name"
              className="input text-sm"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold text-xs">
            Email
            <input
              type="email"
              name="email"
              className="input text-sm"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold text-xs">
            Your message
            <textarea
              name="message"
              rows={4}
              className="textarea text-xs"
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn text-xs"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="sm:flex sm:w-1/2 w-full pb-10">
        <Map />
      </div>
    </section>
  )
}

export default Contact
