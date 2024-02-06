import * as React from "react";
import "./styles.scss";

const SignupForm: React.FC = () => {
  return (
    <form
      action="https://dndtech.us8.list-manage.com/subscribe/post?u=3e43830f28e088056107984ef&amp;id=a50870a666&amp;f_id=003601e0f0"
      method="post"
      // id="mc-embedded-subscribe-form"
      className="w-full z-10"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <div className="flex flex-row justify-center items-center xs:flex-wrap">
        <input
          type="email"
          name="EMAIL"
          className="bg-gray-200 rounded-md p-2 w-full xs:text-sm  text-md"
          placeholder="Email"
          id="mce-EMAIL"
          required
        />
        {/* <span id="mce-EMAIL-HELPERTEXT" className="helper_text" /> */}
        <input
          type="text"
          name="b_3e43830f28e088056107984ef_a50870a666"
          className="hidden"
          tabIndex={-1}
        />
        <input
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="bg-red-500 text-center cursor-pointer xs:w-full xs:min-w-full min-w-[180px] p-2 ml-2 xs:mt-2 xs:ml-0 rounded-md text-xl xs:text-sm text-gray-200"
          value="Subscribirme"
        />
      </div>
    </form>
  );
};

export default SignupForm;
