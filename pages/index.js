import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function IndexPage() {
	const [message, setMessage] = useState(false); // set kondisi untuk pesan
	const [button, setButton]   = useState(false); // set kondisi untuk tombol 

	// Fungsi saat form di submit
	function sendEmail(e) {
		e.preventDefault();
	
		emailjs.sendForm('service_name', 'template_name', e.target, 'user_id')
			.then((result) => {
				// Pesan yang muncul saat sukses
				setMessage(<div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-indigo-500">
					<span className="inline-block align-middle mr-8">
				  		Your message has been sent!	
					</span>
			  	</div>)
                setButton("SEND MESSAGE")
			}, (error) => {
				// Pesan yang muncul saat error
				setMessage(<div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-indigo-500">
					<span className="inline-block align-middle mr-8">{error.text}</span>
			  	</div>)
                setButton("SEND MESSAGE")
			});
	  }

	return (
		<div>
			<section className="text-gray-600 body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
					</div>
					<form onSubmit={sendEmail}>
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-1/2">
									<div className="relative">
										<label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
										<input type="text" id="from_name" name="from_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
										<input type="email" id="from_email" name="from_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
										<textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
									</div>
								</div>
								<div className="p-2 w-full">
									<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{!button ? "SEND MESSAGE" : button}</button>
								</div>
							</div>
						</div>
					</form>

					<div id="form-result" className="lg:w-1/2 md:w-2/3 mx-auto mt-10">{message}</div>
				</div>
			</section>
		</div>
	);
}
