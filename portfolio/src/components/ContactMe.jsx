import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ContactMe() {
  return (
    <div id="ContactMe" className="h-[70vh] md:h-screen bg-[#dcffd2]">
      <div className="pt-10 md:pt-20">
        <div data-aos="zoom-in">
          <h1 className="light-text text-4xl text-center font mb-2">
            Contact Me?
          </h1>
          <p className="text-center text-2xl mb-16 xsm:w-4/5 md:w-2/3 mx-auto">
            I am always open to new opportunities and collaborations. If you
            have a project in mind or just want to chat about the latest in
            tech, feel free to reach out!
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center text-3xl gap-4 mb-16"
        >
          <p className="flex items-center gap-2">
            <MdEmail style={{ color: "green" }} />
            shijiaa.04@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MdCall style={{ color: "green" }} />
            +91 8129244883
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot style={{ color: "green" }} />
            Kochi , Kerala
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
