import { useState } from "react";
import Experience from "./Experience";

function GeneralInfo() {
  const [general, setGeneral] = useState({
    name: "john doe",
    email: "johndoe@john.com",
    phone: "7185555555",
  });
  const [display, setDisplay] = useState(false);

  function toggleInputs() {
    setDisplay((prevDisplay) => !prevDisplay);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setGeneral((prevGeneral) => ({
      ...prevGeneral,
      [name]: value,
    }));
  }
  return (
    <>
      <button onClick={toggleInputs}>{display ? "save" : "edit"}</button>
      {display && (
        <div className="container">
          <label>
            name:
            <input
              type="text"
              name="name"
              placeholder="name"
              value={general.name}
              onChange={handleChange}
            ></input>
          </label>

          <label>
            email:
            <input
              type="email"
              name="email"
              placeholder="email"
              value={general.email}
              onChange={handleChange}
            ></input>
          </label>

          <label>
            phone:
            <input
              type="number"
              name="phone"
              placeholder="phone"
              value={general.phone}
              onChange={handleChange}
            ></input>
          </label>
        </div>
      )}
      <div className="grid-container">
        <h1 className="header title">{general.name}</h1>
        <div className="contact">
            <h2 className="title">Contact Info</h2>
          <h4>{general.email}</h4>
          <h4>{general.phone}</h4>
        </div>
        <div className="experience">
          <Experience />
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
