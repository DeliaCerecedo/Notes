import { Back } from "../components/Back";
import { HeaderAndBackground } from "../components/HeaderAndBackground";


function NotFound({ buttonBack }) {
  return (
    <>
      <HeaderAndBackground />
      <Back buttonBack={()=>buttonBack()} />
      <h1>¡404!</h1>
    </>
  );
}

export default NotFound;
