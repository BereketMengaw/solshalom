import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall, IoIosMail, IoIosPin, IoIosTime } from "react-icons/io";
import company, { whatsappLink } from "../company";
import { contact } from "../data";
import SectionHeading from "./SectionHeading";

const field =
	"w-full border border-line rounded px-4 py-3 text-sm bg-white outline-none focus:border-accent transition-colors";

// No backend: the form composes a WhatsApp message (or an email) the visitor sends themselves.
const buildMessage = ({ name, organisation, phone, message }) =>
	[
		"Hello Sol Shalom,",
		message.trim(),
		"",
		`Name: ${name.trim()}`,
		organisation.trim() && `Company: ${organisation.trim()}`,
		phone.trim() && `Phone: ${phone.trim()}`,
	]
		.filter((line) => line !== false && line !== "")
		.join("\n");

const Contact = () => {
	const [form, setForm] = useState({ name: "", organisation: "", phone: "", message: "" });
	const [error, setError] = useState("");
	const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

	const send = (channel) => (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.message.trim()) {
			setError("Please add your name and what you need.");
			return;
		}
		setError("");
		const text = buildMessage(form);
		const url =
			channel === "whatsapp"
				? whatsappLink(text)
				: `mailto:${company.email}?subject=${encodeURIComponent(
						`Quote request from ${form.name.trim()}`
				  )}&body=${encodeURIComponent(text)}`;
		window.open(url, "_blank", "noopener");
	};

	const details = [
		{ icon: <IoIosCall />, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
		{ icon: <FaWhatsapp />, label: "WhatsApp", value: `+${company.whatsapp}`, href: whatsappLink() },
		{ icon: <IoIosMail />, label: "Email", value: company.email, href: `mailto:${company.email}` },
		{ icon: <IoIosPin />, label: "Address", value: company.address, href: company.mapUrl || undefined },
	];

	return (
		<section id='contact' className='section bg-brand-tint'>
			<div className='container mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16'>
				<div>
					<SectionHeading eyebrow='Contact us' title={contact.title} subtitle={contact.subtitle} />

					<ul className='space-y-3'>
						{details.map((d) => {
							const Tag = d.href ? "a" : "div";
							return (
								<li key={d.label}>
									<Tag
										{...(d.href ? { href: d.href, target: d.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
										className='flex items-center gap-x-4 bg-white rounded-md p-4 border border-transparent hover:border-brand transition-colors'
									>
										<span className='w-11 h-11 shrink-0 rounded-full bg-brand-tint text-accent text-xl flex items-center justify-center'>
											{d.icon}
										</span>
										<span>
											<span className='block text-xs uppercase tracking-wider text-ink-soft'>{d.label}</span>
											<span className='block font-medium text-ink break-all'>{d.value}</span>
										</span>
									</Tag>
								</li>
							);
						})}
					</ul>

					<div className='mt-6 flex gap-x-4 text-sm'>
						<IoIosTime className='text-xl text-accent shrink-0' />
						<dl className='grid grid-cols-[auto_1fr] gap-x-6 gap-y-1'>
							{contact.hours.map(([day, time]) => (
								<React.Fragment key={day}>
									<dt className='text-ink-soft'>{day}</dt>
									<dd className='font-medium'>{time}</dd>
								</React.Fragment>
							))}
						</dl>
					</div>
				</div>

				<form onSubmit={send("whatsapp")} className='bg-white rounded-md p-6 sm:p-8 shadow-[0_8px_24px_rgba(26,43,44,0.06)] self-start'>
					<h3 className='text-2xl font-semibold'>Request a quote</h3>
					<p className='mt-1 text-sm text-ink-soft'>Your message opens in WhatsApp or email, ready to send.</p>

					<div className='mt-6 grid sm:grid-cols-2 gap-4'>
						<label className='block'>
							<span className='text-sm font-medium'>Your name *</span>
							<input className={`${field} mt-1`} value={form.name} onChange={update("name")} autoComplete='name' />
						</label>
						<label className='block'>
							<span className='text-sm font-medium'>Company or organisation</span>
							<input className={`${field} mt-1`} value={form.organisation} onChange={update("organisation")} autoComplete='organization' />
						</label>
						<label className='block sm:col-span-2'>
							<span className='text-sm font-medium'>Phone</span>
							<input className={`${field} mt-1`} type='tel' value={form.phone} onChange={update("phone")} autoComplete='tel' />
						</label>
						<label className='block sm:col-span-2'>
							<span className='text-sm font-medium'>What do you need? *</span>
							<textarea
								className={`${field} mt-1 h-32 resize-none`}
								value={form.message}
								onChange={update("message")}
								placeholder='e.g. 10 × Q8 ergonomic chairs and 1 × YC48 conference table'
							/>
						</label>
					</div>

					{error && <p className='mt-3 text-sm text-red-700'>{error}</p>}

					<div className='mt-5 grid sm:grid-cols-2 gap-3'>
						<button
							type='submit'
							className='flex items-center justify-center gap-x-2 bg-accent hover:bg-accent-hover text-white font-display uppercase tracking-wider font-semibold py-3 rounded transition-colors'
						>
							<FaWhatsapp className='text-xl' /> Send on WhatsApp
						</button>
						<button
							type='button'
							onClick={send("email")}
							className='flex items-center justify-center gap-x-2 border border-accent text-accent hover:bg-accent hover:text-white font-display uppercase tracking-wider font-semibold py-3 rounded transition-colors'
						>
							<IoIosMail className='text-xl' /> Send by email
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
