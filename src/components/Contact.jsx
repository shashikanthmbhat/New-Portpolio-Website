// contact me sction
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Contact = ( {darkMode} ) => {
  return (
    <section
        id="contact"
        className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:py-8 ">

                {/* get in touch and disc */}
                <div className="text-center mb-8 sm:mb-10 md:md-12"
                     data-aos='fade-up'>
                        {/* Get In Touch text */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                            style={{color: darkMode ? 'white' : '#1f2937'}}>
                                Get In <span style={{
                                            background: 'linear-gradient(to right, #3b82f6, #06d6b4)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color:'transparent'
                                            }}> Touch
                                        </span>
                        </h2>
                        <p className="text-base sm:text-lg md-text-xl "
                            style={{ color: darkMode ? 'd1d5db' : '6b7280'}}>
                            Lets work together on your next projct
                        </p>
                     </div>
                     {/* Contact Info section */}
                     <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4">
                        {/* Contact Info (1st half)*/}
                        <div data-aos='fade-right'
                        style={{
                                background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='col-span-2 rounded-2xl border p-4'>
                             <h3 className="text-2xl font-bold mb-6"
                                style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                Contact Information
                            </h3>

                            {/* Parent container for all items with consistent spacing */}
                            <div className="flex flex-col space-y-6 indent-4"> 
        
                            {/* Email */}
                            <div className="border rounded-2xl px-4 py-4"
                                style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}>
                                <div className="flex items-center gap-4 justify-start px-4 py-4">
                                    <FaEnvelope className="w-12 h-12"
                                                style={{color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)'}}/>
                                    <div>
                                        <p className="font-semibold" style={{ color: darkMode ? 'white' : '#1f2937' }}>Email</p>
                                        <p style={{ color: darkMode ? 'white' : '#1f2937' }}>shashikanthmbhat@gmail.com</p>
                                    </div>
                                </div>
                                <a href="mailto:yourname@://gmail.com">
                                <button
                                    type='submit'
                                    style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}
                                    className='w-full px-6 py-2 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'>
                                    Send Message
                                </button>
                                </a>                              
                                
                                
                            </div>

                            {/* WhatsApp */}
                            <div className="border rounded-2xl px-4 py-4"
                                style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}>
                                <div className="flex items-center gap-4 justify-start px-4 py-4">
                                    <FaWhatsapp className="w-12 h-12"
                                                style={{color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)'}}/>
                                    <div>
                                        <p className="font-semibold" style={{ color: darkMode ? 'white' : '#1f2937' }}>WhatsApp</p>
                                        <p style={{ color: darkMode ? 'white' : '#1f2937' }}>+91 9886226207</p>
                                    </div>
                                </div> 
                                <button
                                    type='submit'
                                    style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}
                                    className='w-full px-6 py-2 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'>
                                    Send Message
                                </button>
                            </div>

                            {/* Linked In */}
                            <div className="border rounded-2xl px-4 py-4"
                                style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}>
                                <div className="flex items-center gap-4 justify-start px-4 py-4">
                                    <FaLinkedin className="w-12 h-12"
                                                style={{color :darkMode ? 'rgb(59, 130, 246)' : 'rgb(6, 182, 212)'}}/>
                                    <div>
                                        <p className="font-semibold" style={{ color: darkMode ? 'white' : '#1f2937' }}>Linked In</p>
                                        <p style={{ color: darkMode ? 'white' : '#1f2937' }}>Shashikanth Bhat</p>
                                    </div>
                                </div>   
                                <button
                                    type='submit'
                                    style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}
                                    className='w-full px-6 py-2 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'>
                                    Send Message
                                </button>
                            </div>    
                        </div>
                    </div> 
                    {/* End of contact info section */}

                    {/* contact form */}
                    <div data-aos='fade-left'
                    className='col-span-3'>
                        <form className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
                        data-aos='fade-left'
                            style={{
                                background: darkMode
                                ? 'linear-gradient(to right, #1f2937, #111827)'
                                : 'linear-gradient(to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            >
                            {/* First Name & second Name*/}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {/* First Name */}
                                    <input 
                                        type='text'
                                        placeholder='first Name'
                                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4'
                                        style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}
                                        required/>

                                    {/* Last Name */}
                                    <input 
                                        type='text'
                                        placeholder='Last Name'
                                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4'
                                        style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}
                                        required/>
                                
                            </div>

                            {/* Email */}
                                    <input 
                                        type='text'
                                        placeholder='Email'
                                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4'
                                        style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}
                                        required/>

                            {/* Phone No */}
                                    <input 
                                        type='tel'
                                        placeholder='Phone Number'
                                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4'
                                        style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}
                                        required/>

                            {/* Message */}
                                    <textarea 
                                        rows='10'
                                        placeholder='Your Message'
                                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-6 resize-none'
                                        style={{
                                            color: darkMode ? '#ffffff' : '#1f2937',
                                            backgroundColor: darkMode ? '#374151' : '#dbeafe',
                                            borderColor: darkMode ? '#4b5563' : '#d1d5db'
                                        }}
                                        required/>

                                {/* Send message Button */}
                                <button
                                    type='submit'
                                    style={{ background: 'linear-gradient(to right, #3b82f6, #06b6d4)'}}
                                        className='w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'
                                        >
                                    Send Message
                                </button>

                        </form>
                    </div>

                     </div>
                     

            </div>
    </section>
  );
};

export default Contact