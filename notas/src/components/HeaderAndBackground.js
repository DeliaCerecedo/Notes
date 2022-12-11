import header from "../images/header.png";

export function HeaderAndBackground() {
  
    <img src={header} className="logo" alt="imagen del header" />

  return (
  <>
    <div className="backgroundExterior">
      <div className="backgroundInterior">
          <img src={header} className="logo" alt="imagen del header" />
      </div>
    </div>
  </>
  );
}
