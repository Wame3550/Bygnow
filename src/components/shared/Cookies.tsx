import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getLocalStorage, setLocalStorage } from "../../lib/storageHelper";

export const Cookies: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`fixed z-30 ${
        cookieConsent != null ? "hidden" : "flex"
      } items-center justify-center w-full h-full bg-black bg-opacity-60`}
    >
      <div className="flex w-full h-full px-5 py-10 bg-white xs:rounded-lg xs:w-96 xs:h-auto">
        <div className="flex flex-col items-center my-auto space-y-3">
          <div>
            <Image width={100} height={100} src="/assets/cookie.svg" alt="" />
          </div>
          <span className="text-xl text-center font-semibold font-quicksand text-csblack">
            Cookies Consent
          </span>
          <span className="font-light text-center font-quicksand text-csblack">
            This website uses cookies to ensure you get the best experience.
          </span>
          <div className="flex items-center space-x-4">
            <button
              className="px-6 py-2 text-white rounded-md font-semibold bg-cookie font-quicksand"
              onClick={() => setCookieConsent(false)}
            >
              Reject
            </button>
            <button
              className="px-6 py-2 text-white rounded-md font-semibold bg-cookie font-quicksand"
              onClick={() => setCookieConsent(true)}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
