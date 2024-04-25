// import React from 'react';
// import VotingBox from '../VotingBox/VotingBox';
// import '../CSS/Global.css'

// export const Review = () => {
//   const votes = JSON.parse(localStorage.getItem('votes'));

//   console.log(votes);

//   const handleSubmit = () => {
//     window.location.href = '/finishpage'; // Change the URL to the SignUpPage
//   };

//   const reviewbox = [
//     { id: 1, name: 'PRESIDENT: INSERT' },
//     { id: 2, name: 'VICE PRESIDENT: INSERT..so forth'},
// ];


//   return (
//       <div>
//         <div className='container'>
//         <header className="main-header">
//           <h1>REVIEW</h1>
//         </header>

//         <p className="sub-header">Please double check to verify all selections are correct (THIS LAYOUT CAN BE/WILL NEED TO BE CHANGED)</p>

//         <VotingBox 
//             title="PRESIDENTIAL" 
//             candidates={reviewbox} />
//         <div className='submit-container'>
//           <div className='submit-button' onClick={handleSubmit}>S U B M I T</div>   
//         </div>
//         </div>
//       </div>
//   )
// }

import React from 'react';
import VotingBox from '../VotingBox/VotingBox'; // Assuming VotingBox can be used here for display
import '../CSS/Global.css'
import ReviewBox from '../VotingBox/ReviewBox';

export const Review = () => {
  // Retrieve votes from local storage
  const votes = JSON.parse(localStorage.getItem('votes'));

  // Prepare review boxes based on votes
  const reviewbox = Object.entries(votes).map(([key, value], index) => ({
    id: index + 1,
    name: `${key.toUpperCase()}: ${value}`
  }));

  const handleSubmit = () => {
    // Final submission logic here, perhaps sending data to a server
    alert('Submitting Votes...');
  };

  // return (
  //     <div>
  //       <div className='container'>
  //         <header className="main-header">
  //           <h1>REVIEW YOUR VOTES</h1>
  //         </header>
  //         <p className="sub-header">Please double check to verify all selections are correct</p>
  //         {reviewbox.map(box => (
  //           <VotingBox 
  //             key={box.id}
  //             title={box.name.split(':')[0]} // Split to get title like "PRESIDENT"
  //             candidates={[{id: box.id, name: box.name}]} // Use name to display the vote
  //           />
  //         ))}
  //         <div className='submit-container'>
  //           <div className='submit-button' onClick={handleSubmit}>S U B M I T</div>   
  //         </div>
  //       </div>
  //     </div>
  // );
  //  return (
  //   <div>
  //     <div className='container'>
  //       <header className="main-header">
  //         <h1>REVIEW YOUR VOTES</h1>
  //       </header>
  //       <p className="sub-header">Please double check to verify all selections are correct</p>
  //       {Object.entries(votes).map(([title, data], index) => (
  //         <div key={index}>
  //           <div className="title">{title}</div>
  //           <div className="question">{data.question}</div>
  //           <ul>
  //             {data.options.map((option, idx) => (
  //               <li key={idx} className={option === data.selected ? 'selected' : ''}>
  //                 {option}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //       <div className='submit-container'>
  //         <div className='submit-button' onClick={() => alert('Submitting Votes...')}>S U B M I T</div>   
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className='container'>
      <header className="main-header">
        <h1>REVIEW YOUR VOTES</h1>
      </header>
      <p className="sub-header">Please double check to verify all selections are correct</p>
      {Object.entries(votes).map(([title, data], index) => (
        <ReviewBox
          key={index}
          title={title}
          question={data.question}
          candidates={data.options.map(name => ({ id: Math.random(), name }))} // Assign unique IDs for key props
          reviewMode={true}
          selectedOption={data.selected}
        />
      ))}
      <div className='submit-container'>
        <div className='submit-button' onClick={() => alert('Submitting Votes...')}>S U B M I T</div>   
      </div>
    </div>
  );
};

export default Review;
