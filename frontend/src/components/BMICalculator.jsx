import React ,{useState} from 'react'
import {toast} from 'react-toastify';
function BMICalculator() {
  const [height,setHeight]= useState("");
  const [weight,setWeight]= useState("");
  const [gender,setGender]= useState("");
  const [bmi,setBmi]= useState("");
  const calculateBMI =(e)=>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please enter valid height weight and gender");
      return;
    }
    const heightInMeters=(height)/100;

    const bmiValue= (weight/(heightInMeters*heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    if(bmiValue<18.5)
    {
      toast.warning("You are underweight.Consider seeking advise from a Health Care Provider.");

    }
    else if(bmiValue>=18.5 && bmiValue< 24.9)
    {
       toast.success("You have a normal weight.Keep maintaining a healthy lifestyle.");
    }
    else if(bmiValue>=25 && bmiValue< 29.9)
    {
      toast.warning("You are overweight.Consider seeking advise from a Health Care Provider.");
    }
    else
    {
      toast.error("You are in the obese range.It is recommended to seek advise from a Health Care Specialist.");
    }

  }
  return (
    <section className="bmi">
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor="">Height (cm)</label>
              <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} required/>
            </div>

            <div>
              <label htmlFor="">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
            </div>
           
            <div>
              <label htmlFor="">Gender</label>
              <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
             <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
