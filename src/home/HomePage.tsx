import MyProfile from "@/assets/img/myprofile.jpeg";

const HomePage = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full absolute left-0 top-0 right-0 bottom-0 opacity-50"
        src={MyProfile}
        alt="developer_info_profile"
      />
      <div className="absolute w-full h-full flex items-center justify-center gap-2">
        <div className="flex flex-col justify-center gap-4 text-3xl text-white">
          <div className="flex flex-col gap-2 font-bold">
            <p className="text-2xl">끝없는 배움을 즐기는 개발자</p>
            <p className="text-4xl">노기훈 입니다.</p>
          </div>
          <div className="flex flex-col gap-2 text-xl">
            <p>유연하게 일하는 프론트엔드 개발자입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
