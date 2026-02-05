import React, { useState } from 'react';
import StarRating from '../../shared/StarRating.jsx';
import Swal from 'sweetalert2';
import Q2Image from './assets/feedBack.png';
import '../../shared/feedBack.css';

function FeedBack() {

  const [rated, setRated] = useState(false);

  const handleSubmit = () => {
    Swal.fire({
      icon: 'success',
      title: 'You did a great job!',
      text: 'Click on the next lesson below to continue.',
      confirmButtonText: 'Done',
      confirmButtonColor: '#4a79bd',
    });
  };

  return (
    <div id="p4" className="paper-feedback animate__animated animate__backInDown">


      <img src={Q2Image} alt="Feedback background" className="feedback-bg-img" />

      <div
        className="stars-container absolute left-[47%] transform -translate-x-1/2 flex flex-col gap-12"
        style={{ top: '59%' }}
      >
        <StarRating value={0} onChange={() => setRated(true)} />
        <StarRating value={0} onChange={() => setRated(true)} />
        <StarRating value={0} onChange={() => setRated(true)} />
      </div>

      <button
        type="button"
        id="feedBtn"
        disabled={!rated}
        onClick={handleSubmit}
        className={`mt-4 px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all sm:px-4 sm:py-2 absolute transform -translate-x-1/2
        ${!rated
            ? "bg-gray-400 cursor-not-allowed opacity-50"
            : "bg-purple-600 hover:scale-105"}`}
      >
        Finish
      </button>
    </div>
  );
}

export default FeedBack;
