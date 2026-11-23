import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const formSubmit = (data) => {
        alert('Thanks ' + data.name + '     ! Your message has been sent.')
        reset();
    }

    return (
        <div className="page-scroll">
            <section className="info-page contact-layout">
                <div className="contact-info">
                    <h1>Contact us</h1>
                    <p>Have a question or feedback about Maverick AI? Send us a message.</p>

                    <p><i className="fa-solid fa-envelope"></i> hello@maverickai.demo</p>
                    <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
                    <p><i className="fa-solid fa-location-dot"></i> Pune, Maharashtra, India</p>

                    <div className="social-links">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <form className="form-card" onSubmit={handleSubmit(formSubmit)}>
                    <h2>Send a message</h2>

                    <div className="field">
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register('name', {
                                required: 'Name is required'
                            })}
                        />
                        {errors.name && <p className="field-error">{errors.name.message}</p>}
                    </div>

                    <div className="field">
                        <input
                            type="email"
                            placeholder="Email address"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Za-z0-9]+@gmail\.com$/,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                        />
                        {errors.email && <p className="field-error">{errors.email.message}</p>}
                    </div>

                    <div className="field">
                        <select defaultValue="" {...register('subject', {
                            required: 'Please choose a subject'
                        })}>
                            <option value="" disabled>Select a subject</option>
                            <option>General question</option>
                            <option>Feedback</option>
                            <option>Report a bug</option>
                            <option>Other</option>
                        </select>
                        {errors.subject && <p className="field-error">{errors.subject.message}</p>}
                    </div>

                    <div className="field">
                        <textarea
                            rows="4"
                            placeholder="Your message"
                            {...register('message', {
                                required: 'Message is required',
                                minLength: {
                                    value: 10,
                                    message: 'Message must be at least 10 characters'
                                },
                                maxLength: {
                                    value: 300,
                                    message: 'Message can be at most 300 characters'
                                }
                            })}
                        />
                        {errors.message && <p className="field-error">{errors.message.message}</p>}
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="primary-btn">Send message</button>
                        <button type="button" className="secondary-btn" onClick={() => reset()}>Clear</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact