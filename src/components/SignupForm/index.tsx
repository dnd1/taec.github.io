import * as React from "react";
import "./styles.scss";

const SignupForm: React.FC = () => {
  return (
    <form
      action="https://assets.mailerlite.com/jsonp/733625/forms/107649145365333893/subscribe"
      data-code=""
      method="post"
      className="w-full z-10"
      target="_blank"
    >
      <div className="flex flex-row justify-center items-center xs:flex-wrap z-10 mb-20">
        <input
          type="email"
          name="fields[email]"
          className="bg-gray-200 rounded-md p-2 w-full xs:text-sm  text-md z-10"
          placeholder="Email"
          id="mce-EMAIL"
          required
        />

        <input type="hidden" name="ml-submit" value="1" />

        <input
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="bg-red-500 text-center cursor-pointer xs:w-full xs:min-w-full min-w-[180px] p-2 ml-2 xs:mt-2 xs:ml-0 rounded-md text-xl xs:text-xs text-gray-200 z-10"
          value="Subscribirme"
        />
      </div>

      <input type="hidden" name="anticsrf" value="true" />
    </form>
  );
};

export default SignupForm;
