import Link from 'next/link';
import React, { useState } from 'react';
import { Header } from '../common/component/Header';
import { SubHeader } from '../common/component/SubHeader';
import axios from 'axios';

const Signup = () => {
  
  const [checkebox, setCheckeBox] = useState(true);
  const [checkeboxmessage, setCheckeBoxMessage] = useState(true);

  const [email, setEmail] = useState();
  const [emailcheck,setEmailcheck]=useState();
  const [password, setPassword] = useState();
  const [checkpassword,setCheckpassword] = useState();
  const [name, setName] = useState();
  const[checkname,setCheckname]=useState();
  const [phone, setPhone] = useState();
  const [checkphone ,setcheckphone]=useState();
  const [userName, setUsername] = useState()
  const [checkusername,setCheckUsername]= useState();
  const [allentry, setAllentry] = useState([]);
  const [radio, setRadio] = useState()
  const [checkradio,setCheckRadio] = useState();
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password, name: name, userName: userName, phone: phone, role: radio };
    signup(newEntry);

}

const validateInputs=()=>{
    if (!radio) {
        setCheckRadio('please select personal details')
        return false;
    } else  if (!name || name.lenghth<=3){
        setCheckname("name should be 3 alpahabets");
        return false;
    }else if( !email ||  email.length <=10){
        setEmailcheck("invalid email");
        return false;
        
    }else if(!userName || userName.length <=3){
        setCheckUsername('username should be 3 alpahabets')
        return false;

    }else if (!password || password.length<8){
            setCheckpassword("password should be 8 chracters");
            return false;

    }else if(!phone || phone.length<10){
      setcheckphone("number should be 10 digits")
      return false;

    }else if(checkebox==false){
        setCheckeBoxMessage("please fill the checkbox")
        return false;

      }
    return true;
}

//  const getServerSideProps = async()=>{
   
//    const rest =  await axios.post("http://localhost:8000/api/save", newEntry);
//   console.log(rest)

//    const data = await rest.json();
//    console.log("uzair");
//   return{ 
//     props:{
//       data:data,
//     }
//   }
// }


async function signup(newEntry) {
    if(validateInputs()){

      const rest = await axios.post("http://localhost:8000/api/save", newEntry);
      setMessage(rest.data);
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        history.push('./login')
    }
}




  return(
      <> 
      <Header/>
      <SubHeader/>
        <div className="flex">
        <div className="  w-1/3 bg-center ">
          
          </div>
          <div className=" w-full bg-center items-center flex justify-center" >
          <div className="w-96 h-[36rem] shadow-2xl mt-24 rounded-xl bg-white">
            <div className="pl-6">
            <div className="text-xl mt-4">
              <span>Sign Up</span>
            </div>

            <div className="mt-4">
              <label>I am</label>
              {  !radio && <p className="validation">{checkradio}</p>}
            </div>

            <div className=" mt-2 ">
              <input type="radio" name="flexRadioDefault" value="1"
               onChange={(e) => {
                console.log(e.currentTarget.value);
                setRadio(e.currentTarget.value)
            }}
              />
                <label class="p-radios" for="name" className="pl-1">Buyer/Owner </label>
               <input type="radio" name="flexRadioDefault" value="2" className="ml-6"

               onChange={(e) => {
                   console.log(e.currentTarget.value);
                   setRadio(e.currentTarget.value)
               }}

               
               />
                 <label class="p-radios" for="name" className="pl-1"> Agent</label>
               <input type="radio" name="flexRadioDefault" value="3" className="ml-6"
               onChange={(e) => {
                console.log(e.currentTarget.value);
                setRadio(e.currentTarget.value)
            }}
               
               />
                 <label class="p-radios" for="name" className="pl-1">Builder </label>
             </div>

             <div className="mt-4 " >
                <div className="mt-6 ">
                 <input type="text"  placeholder="Name"  className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"
                 id="name"
                 name={name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                 
                 />
                  { ( !name ||  name.length <3) &&   <p className="validation">{checkname}</p>}
                </div>
              <div className="mt-6">
                   <input type="text"  placeholder="Email"  className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"
                   id="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   
                   />
                    { ( !email ||  email.length <=10) &&   <p className="validation">{emailcheck}</p>}
               </div>
               <div className="mt-6">
                    <input type="text"  placeholder="Username"  className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"
                    id="username"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    { (!userName || userName.length <=3) &&     <p className="validation">{checkusername}</p>}
                </div>
                 <div className="mt-6" >
                   <input type="password"  placeholder="Password"  className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"
                   id="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   />
                   { (!password || password.length<8) &&  <p className="validation"> {checkpassword}</p>}
                 </div>
                 <div className="mt-6">
                     <input type="text" name="phone" placeholder="Mobile Number" className="text-xl font-light border-b-2 border-b-bordergrey outline-none text-lightgrey"
                     size="37"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     
                     />
                      {  (!phone || phone.length<10) &&  <p className="validation">{checkphone}</p>}
                 </div>
                
                 <div className="mt-6"><label className="text-xs"><input type="checkbox" defaultChecked={checkebox} onChange={() => setCheckeBox(!checkebox)} /> I agree to PropNex T&amp;C, Privacy Policy, &amp; Cookie Policy</label>  { checkebox==false && <p className="validation" >{checkeboxmessage}</p>}<br/><br/></div>

             </div>
              <div  className="h-10 w-72 bg-onclick text-white rounded-full ml-4 text-center text-xl pt-1">
                 <button type="submit" onClick={submit} >Sign Up</button>
              </div>
                 
                  <div className="ml-6 pl-6 mt-4 ">Already registered? <div  className="text-red"><Link href="/loginpage"> Login Now </Link></div> </div>
            </div>
          </div>
          </div>
         
        </div>
      </>
  );
};


export default Signup;
