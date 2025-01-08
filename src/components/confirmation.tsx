import Image from "next/image";
import IconThankYou from "../../public/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-8 my-8 text-center">
      <Image src={IconThankYou} alt="Thank you" width={60} />
      <h2 className="text-2xl font-bold">Thank You!</h2>
      <p className="text-lg text-cool-gray">
        Thanks for confirming your subscription! <br />
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirmation;
