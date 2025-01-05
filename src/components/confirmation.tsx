import Image from "next/image";
import IconThankYou from "../../public/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8 text-centersss">
      <Image src={IconThankYou} alt="Thank you" />
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming your subscription! <br />
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@example.com.
      </p>
    </div>
  );
};

export default Confirmation;
