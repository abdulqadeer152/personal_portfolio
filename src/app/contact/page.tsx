
import React from 'react'

const Contact
 = () => {
  return (
    <div id='contact' className='contact-us'>
        <section className="text-orange-400 bg-black body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-orange-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6038.3640666030105!2d66.95238032253617!3d24.953648926983398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36b6df16512b1%3A0xde1a5f43707da28d!2sIttehad%20Town%20National%20Chowk!5e1!3m2!1sen!2s!4v1731556125821!5m2!1sen!2s"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
      />
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-extrabold text-orange-500 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Photo booth tattooed prism, portland taiyaki hoodie neutra
            typewriter
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-orange-500 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-white leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-orange-500 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-white">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-orange-500 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-orange-500 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 rounded border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-orange-500 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-orange-500 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-orange-500 bg-black- border-2px py-2 px-6 text-semibold focus:outline-none hover:bg-orange-500 hover:text-white border-orange-500 border-2 rounded text-lg">
        Button
      </button>
      <p className="text-xs text-orange-400 text-opacity-90 mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact
