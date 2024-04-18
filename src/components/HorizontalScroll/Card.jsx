import { PinContainer } from "./3d-pin.jsx";

function Card({ title, subTitle, img, to }) {
  // const bgClass = `bg-[url('${img}')] `;
  console.log(img);
  return (
    <>
      <PinContainer
        containerClassName={"w-80 "}
        className={"w-80 px-2 pb-2 "}
        to={to}
      >
        <h1 className="text-4xl  text-center pt-2 pb-1 font-bold">{title}</h1>
        <p className="text-xl  text-center pb-4 opacity-85">{subTitle} </p>
        {/* <div
          // style={{ background: `url(${img})` }}
          className={bgClass}
        ></div> */}
        <img
          className="rounded-md w-full h-64 object-cover object-center"
          src={img}
        ></img>
      </PinContainer>
      {/* bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 */}
    </>
  );
}

export default Card;