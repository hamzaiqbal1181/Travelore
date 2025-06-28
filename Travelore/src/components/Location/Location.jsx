import React from "react";

const Location = () => {
  return (
    <>
      <div>
        <div>
          <div className="container px-12 pb-10">
            <h1 className="inline-block border-l-8 border-blue-500 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
              Location to visit
            </h1>
            <div className="rounded-xl ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.021021996586!2d74.30821037561114!3d31.55070227420455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190223a63e2c31%3A0x28a64dc38e217154!2sBadshahi%20Mosque!5e0!3m2!1sen!2sus!4v1672583870651!5m2!1sen!2sus"
                width="100%"
                height="360"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
