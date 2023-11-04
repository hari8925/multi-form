import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
    address: "",
    district: "",
    stateName: "",
    postal: "",
  });
  const inputHandle = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && state.name && state.email && state.password) {
      setFormNo(formNo + 1);
      console.log(state);
    } else if (
      formNo === 2 &&
      state.phonenumber &&
      state.date &&
      state.address
    ) {
      setFormNo(formNo + 1);
      console.log(state);
    } else {
      toast.error("Please fillup all input field");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (state.district && state.stateName && state.postal) {
      toast.success("form submit success");
      axios
        .post("http://localhost:3001/posts/", state)
        .then((res) => toast.success("form submit on post  success"))
        .catch((err) => {
          console.log(err);
        });
      console.log(state);
    } else {
      toast.error("Please fillup all input field");
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMDQ4NDM3NXx8ZW58MHx8fHx8')",
      }}
      className="w-screen h-screen bg-slate-300 flex justify-center items-center"
    >
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className="flex justify-center items-center">
          {formArray.map((v, i) => (
            <>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? "bg-red-500"
                    : "bg-slate-400"
                } h-[35px] flex justify-center items-center`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? "bg-blue-500"
                      : "bg-slate-400"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>
        {formNo === 1 && (
          <div>
            <div className="flex flex-col mb-2">
              <label htmlFor="name">Name</label>
              <input
                value={state.name}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="name"
                placeholder="name"
                id="name"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="dept">Email</label>
              <input
                value={state.email}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="batch">password</label>
              <input
                value={state.password}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-green-400"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div className="flex flex-col mb-2">
              <label className="text-slate-500" htmlFor="varsity">
                phoneNumber
              </label>
              <input
                value={state.phonenumber}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                type="text"
                name="phonenumber"
                placeholder="phonenumber"
                id="phonenumber"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-slate-500" htmlFor="session">
                Date of birth
              </label>
              <input
                value={state.date}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                type="date"
                name="date"
                placeholder="date of birth"
                id="date"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-slate-500" htmlFor="address">
                Address
              </label>
              <textarea
                value={state.address}
                onChange={inputHandle}
                row="10"
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                type="number"
                name="address"
                placeholder="address"
              ></textarea>
            </div>
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-green-400"
              >
                Previous
              </button>
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-green-400"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <div className="flex flex-col mb-2">
              <label htmlFor="district">District</label>
              <input
                value={state.district}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="district"
                placeholder="district name"
                id="district"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="thana">State</label>
              <input
                value={state.stateName}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="stateName"
                placeholder="StateName"
                id="stateName"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="post">Postal</label>
              <input
                value={state.postal}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="postal"
                placeholder="postal"
                id="postal"
              />
            </div>
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-green-400"
              >
                Previous
              </button>
              <button
                onClick={finalSubmit}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-green-400"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
