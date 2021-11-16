// import React, { useState, useEffect, useRef } from 'react';
// import './Accordion.css';
// import Chevron from '../pictures/chevron.png';

// export default function Accordion() {
//   const [toggle, setToggle] = useState(false);
//   const [heightEl, setHeightEl] = useState();

//   const refHeight = useRef();

//   useEffect(() => {
//     setHeightEl(`${refHeight.current.scrollHeight}px`);
//   }, []);

//   const toggleState = () => {
//     setToggle(!toggle);
//   };

//   //////////////      2       ////////////////////
//   const [toggle2, setToggle2] = useState(false);
//   const [heightEl2, setHeightEl2] = useState();

//   const refHeight2 = useRef();

//   useEffect(() => {
//     setHeightEl2(`${refHeight2.current.scrollHeight}px`);
//   }, []);

//   const toggleState2 = () => {
//     setToggle2(!toggle2);
//   };

//   ///   FORM   ////

//   const [theForm, setTheForm] = React.useState(false);

//   function handleClickForm() {
//     setTheForm(!theForm);
//   }

//   return (
//     <>
//       <div className="accordion">
//         <button onClick={toggleState} className="accordion-visible">
//           <span>Preferences</span>
//           <img className={toggle && 'active'} alt="chevron" src={Chevron} />
//         </button>

//         <div className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'} style={{ height: toggle ? `${heightEl}` : '0px' }} ref={refHeight}>
//           <p aria-hidden={toggle ? 'true' : 'false'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
//         </div>
//       </div>

//       {/* second Accordion */}

//       <div className="accordion">
//         <button onClick={toggleState2} className="accordion-visible">
//           <span>Contactez-nous</span>
//           <img className={toggle2 && 'active'} alt="chevron" src={Chevron} />
//         </button>

//         <div
//           className={toggle2 ? 'accordion-toggle animated' : 'accordion-toggle'}
//           style={{ height: toggle2 ? `${heightEl2}` : '0px' }}
//           ref={refHeight2}
//         >
//           <div aria-hidden={toggle2 ? 'true' : 'false'} className={theForm ? 'form' : 'notform'}>
//             <form id="contact-form">
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" className="form-control" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Email</label>
//                 <input type="email" className="form-control" aria-describedby="emailHelp" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea className="form-control" rows="5"></textarea>
//               </div>
//               <div className="button">
//                 <button className="btn" type="submit" onClick={handleClickForm}>
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
