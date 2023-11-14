import { portfolio } from '../assets';

const Preview = () => {
  return (
    <div className="w-screen h-fit flex justify-center items-center cursor-pointer">
      <img
        src={portfolio}
        alt="link"
        className="w-[1200px] h-[600px] object-contain"
      />
    </div>
  );
};
export default Preview;
