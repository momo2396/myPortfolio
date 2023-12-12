const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Email Sent Successfully");
  };
  return (
    <div
      id="ContactMe"
      className="mt-20  flex flex-col justify-center max-w-[800px] mx-auto"
    >
      <div className="text-center">
        <div className="text-lg font-semibold">Get in Touch</div>
        <div className="text-3xl font-semibold">Contact</div>
      </div>
      <div className="mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Type Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Type Subject"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Type Message"
            className="textarea textarea-bordered w-full"
            required
          />
          <input
            type="submit"
            name=""
            id=""
            value="Submit"
            className="btn bg-black text-white w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
