// import React from 'react';
// import PERSON1 from "../../../img/person1.png";
// import PERSON2 from "../../../img/person2.png";
// import PERSON3 from "../../../img/person3.png";
// import PERSON4 from "../../../img/person4.png";
// import './fillform.css'
// const FillForm1 = (props) => {
//     function DisplayFillForm1  (props) {
//         const peopList = props.peopleList;
//         const listElements = peopList.map((peop) =>
//             <FillForm1 key={peop.Id} data={peop}/>
//         return (<DisplayFillForm1  peopList={People}/>)
//         );
//         return (
//             <div>
//                 {listElements}
//             </div>
//         )
//     }
//     const People = [
//         {Id: 1, Image: PERSON1, Name: 'Albina', Role: 'Deep cleaning expert', Rating: 'Rating: 4.6', Salary: '$50 per service', TimeHour1: '09:00 ', TimeHour2:  '12:00 ', TimeHour3: '15:00 ', TimeHour4: '17:00 ' },
//         {Id: 2, Image: PERSON2, Name: 'Kate', Role: 'Window cleaning expert', Rating: 'Rating: 4.2', Salary: '$50 per service',TimeHour1: '09:00 ', TimeHour2:  '12:00 ', TimeHour3: '15:00 ', TimeHour4: '17:00 ' },
//         {Id: 3, Image: PERSON3, Name: 'Giselle', Role: 'Regular cleaning expert', Rating: 'Rating: 3.8', Salary: '$50 per service', TimeHour1: '09:00 ', TimeHour2:  '12:00 ', TimeHour3: '15:00 ', TimeHour4: '17:00 ' },
//         {Id: 4, Image: PERSON4, Name: 'Megan', Role: 'Office cleaning expert', Rating: 'Rating: 3.3', Salary: '$50 per service', TimeHour1: '09:00 ', TimeHour2:  '12:00 ', TimeHour3: '15:00 ', TimeHour4: '17:00 ' },
//     ];
//     // function FillForm1() {
//     //     return (<DisplayFillForm1  peopList={People}/>)
//     // }
//
//     return (
//         <div className="ff">
//             <form >
//                 <table className="form01">
//                     <tr>
//                         <td>
//                             <div className="person1">
//                                 <img src={props.data.Image} className="person01" alt="person1"/>
//
//                             </div>
//                             <a className="albina">{props.data.Name}</a>
//                             <a className="dp_clean">{props.data.Role} {props.data.Rating}</a>
//                             <table className="form001">
//                                 <tr>
//                                     <td>{props.data.TimeHour1}</td>
//                                     <td>{props.data.TimeHour2}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{props.data.TimeHour3} </td>
//                                     <td>{props.data.TimeHour4}</td>
//                                 </tr>
//                                 <p>{props.data.Rating}</p>
//                             </table>
//                         </td>
//                     </tr>
//                 </table>
//             </form>
//         </div>
//     );
//
//
// };
// export default FillForm1;