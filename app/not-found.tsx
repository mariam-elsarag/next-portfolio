import Button from "@/app/_components/ui/Button";
import Shape from "@/app/_components/ui/Shape";
import { ArrowRight } from "./_assets/icons/Icon";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center pt-20 Container">
      <Shape isAbsolute={false} size="650px" align="center" />
      <div className="flex flex-col items-center">
        <h1 className="font-inter gradient_text_main tracking-[-9px] md:tracking-[-14.4px] font-black text-[170px] md:text-[288px] ">
          404
        </h1>
        <div className=" translate-y-[-70px] md:translate-y-[-90px] flex flex-col text-center items-center justify-center gap-3 md:gap-6">
          <strong className="text-on-surface text-2xl md:text-5xl max-w-[556px] flex items-center justify-center text-center font-inter font-bold ">
            Path Not Found in the Ecosystem
          </strong>
          <p className="text-[#C7C4D7] max-w-[416px] md:text-lg">
            The architectural route you are seeking has been archived or never
            existed within this digital construct.
          </p>
          <Button
            className="min-w-[180px] "
            to="/"
            text="Back To Home"
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
