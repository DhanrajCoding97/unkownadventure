import React from 'react'
import {FiMapPin} from 'react-icons/fi'
import {IoMdBusiness} from 'react-icons/io'
import {BsTelephone} from 'react-icons/bs'
const Contact = () => {
  return (
    <section className='max-w-[1400px] m-auto py-20'> 
        <h1 className='pb-12 text-center text-5xl md:text-6xl font-bold text-[#1CBE12]'>Contact <span className='text-[#F7D311]'>Us</span></h1>
        <div id="google-map" className='w-[90%] m-auto'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.945103013828!2d73.09427807614884!3d19.02214055365923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e92014dbd393%3A0xdecbf668e8c62be9!2sUnknown%20Adventures!5e0!3m2!1sen!2sin!4v1685979753725!5m2!1sen!2sin" 
                    width='100%'
                    height={400}
                    loading="lazy"
                    className='rounded-xl'
                ></iframe>    
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
            <form
            //   ref={form}
            id="contact-form"
            className="p-5 max-w-[300px]"
            >
            <div>
              <h3 className='font-bold text-3xl p-4'>Get in Touch</h3>
            </div>
            <div id="form-control" className="mb-3 pb-5 relative">
                <input
                id="name"
                type="text"
                placeholder="Name"
                name="user_name"
                className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl bg-[#1CBE12]"
                />
            </div>
            <div id="form-control" className="mb-3 pb-5 relative">
                <input
                id="email"
                type="email"
                placeholder="emailid@gmail.com"
                name="user_email"
                className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl bg-[#1CBE12]"
                />
            </div>
            <div id="form-control" className="mb-3 pb-5 relative">
                <input
                id="subject"
                type="text"
                placeholder="subject"
                name="subject"
                className="block w-full p-3 border-2 border-stone-900 text-sm placeholder:text-black placeholder:font-bold rounded-xl bg-[#1CBE12]"
                />
            </div>
            <div id="form-control" className="mb-4 relative">
                <textarea
                id="message"
                placeholder="Message"
                name="message"
                className="resize-none border-2 border-stone-900 p-3 placeholder:text-black placeholder:font-bold rounded-xl w-full bg-[#1CBE12]"
                />
            </div>
            <div className="flex items-center justify-center pb-4 ">
                <button
                className="px-5 py-2 bg-[#1CBE12] font-bold text- hover:text-black cursor-pointer rounded-full"
                
                >
                Submit
                </button>
            </div>
            </form>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='font-bold text-3xl text-center'>Contact Info</h2>
                <div className='flex items-center gap-2'>
                    <FiMapPin/>
                    <h3>Address : </h3>
                </div>
                    <address>Flat No- B/103, Maruti Tower, Plot No- 09
                        <br /> Sector 5, Kamothe
                        <br /> Maharashtra 410209
                        <br /> India
                    </address>
                <div className='pt-5 flex items-center gap-2'> 
                    <IoMdBusiness/>
                    <h3>Business Hours :</h3>
                </div>
                    <ol>
                        <li>Mon - Sat: 10:00 AM to 10:00 PM</li>
                        <li>Sun: 12:00 PM to 10:00 PM</li>
                    </ol>
                <div className='pt-5 flex items-center gap-2'>
                    <BsTelephone />
                    <h3>Phone :</h3>
                </div>
                    <a href="tel:+098671 70214">098671 70214</a>
            </div>
        </div>
    </section>
  )
}

export default Contact