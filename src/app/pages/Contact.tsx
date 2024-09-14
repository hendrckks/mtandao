import Container from '../../components/Container';
import FlexibleBadge from '../../components/TitleBadge';

const Contact = () => {
  return (
    <div className="min-h-[100vh] w-full bg-white">
      <Container className="flex-col md:py-48 py-40 text-black md:items-start items-center">
        <div className="mb-5 md:px-0 px-4">
          <FlexibleBadge
            text="Contact us"
            iconClassName="hidden"
            textClassName="text-[#787878] text-sm"
            className="bg-[#f2f2f2]"
          />
          <h2 className="text-5xl mt-4">Talk to us</h2>
          <p className="mt-4">
            Do you have questions? Contact us and let us know.
            <br /> We will get back to you fast.
          </p>
        </div>
        <div className="md:w-1/2 w-full md:p-0 p-6">
          <form>
            <label className="text-sm mt-4 text-[#787878]">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 mt-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none"
            />
            <label className="text-sm mt-4 text-[#787878]">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border-2 mt-2 border-gray-300 p-2 w-full rounded-lg focus:outline-none"
            />
            <label className="text-sm mt-4 text-[#787878]">Message</label>
            <input
              type="text"
              placeholder="Message"
              className="border-2 mt-2 border-gray-300 p-20 w-full rounded-lg focus:outline-none"
            />
            <button className="bg-black mt-5 text-white rounded-lg focus:outline-none flex h-10 items-center justify-center w-full">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
