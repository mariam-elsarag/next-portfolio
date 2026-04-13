import Spinner from "@/app/_components/feadback/Spinner";

const Loading = () => {
  return (
    <div className=" pt-24 fixed bg-[#2D344966] z-50 inset-0 backdrop-blur-sm flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
