import React, { useState } from 'react';
import '../css/FacultyFeedbackForm.css';

const FacultyFeedbackForm = () => {
  const feedbackQuestions = [
    { id: 1, text: "How clear was the faculty member's teaching?" },
    { id: 2, text: "How knowledgeable was the faculty member about the subject?" },
    { id: 3, text: "How well did the faculty member respond to questions?" },
    { id: 4, text: "How fair was the faculty member's grading?" },
    { id: 5, text: "How well-organized were the lectures?" },
    { id: 6, text: "How accessible was the faculty member outside of class?" },
    { id: 7, text: "How engaging were the teaching methods?" },
    { id: 8, text: "How relevant were the assignments to the course material?" },
    { id: 9, text: "How timely was the feedback on assignments and exams?" },
    { id: 10, text: "Overall, how would you rate this faculty member?" }
  ];

  const ratingOptions = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleRatingChange = (questionId, value) => {
    setRatings(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const unanswered = feedbackQuestions.filter(q => !ratings[q.id]);
    if (unanswered.length > 0) {
      alert('Please answer all questions before submitting.');
      return;
    }

    console.log({
      faculty: selectedFaculty,
      ratings,
      comments
    });

    alert('Form submitted successfully!');
    // Form values are not cleared, they remain the same
  };

  const handleClear = () => {
    setSelectedFaculty('');
    setRatings({});
    setComments('');
    setSearchTerm('');
  };

  return (
    <div className="feedbackContainer d-flex row justify-content-center">
      <h1 className="header " >Anonymous Faculty Feedback Form</h1>

      <form onSubmit={handleSubmit} className="feedbackForm ">
        {/* <div className="searchSection">
          <label htmlFor="searchFaculty" className="label">
            Search Faculty Member:
          </label>
          <input
            id="searchFaculty"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search faculty..."
            className="searchInput"
          />
        </div> */}

        <div className="selectSection">
          <label htmlFor="selectFaculty" className="label">
            Select Faculty Member:
          </label>
          <select
            id="selectFaculty"
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
            className="selectInput"
            required
          >
            <option value="">  Select a faculty member  </option>
            <option value="professor1">Mukhtiar Zamin Sir</option>
            <option value="professor2">Waqar Khurshed Sir</option>
            <option value="professor3">Yashir Ali Sir</option>
          </select>
        </div>

        <div className="ratingsSection">
          <h2 className="sectionTitle">Please rate the following aspects:</h2>

          {feedbackQuestions.map((question) => (
            <div key={question.id} className="ratingQuestion">
              <p className="questionText">{question.id}. {question.text}</p>
              <div className="ratingOptions">
                {ratingOptions.map((option, index) => (
                  <label key={index} className="ratingLabel">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={ratings[question.id] === option}
                      onChange={() => handleRatingChange(question.id, option)}
                      className="ratingInput"
                      required={question.id === feedbackQuestions.length} // Only require last question (overall)
                    />
                    <span className="ratingText">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="commentsSection">
          <h2 className="sectionTitle">Additional Comments or Suggestions (Optional):</h2>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Please share any additional feedback you have for this faculty member..."
            className="commentsInput"
          />
        </div>

        <div className="buttonGroup">
          <button type="button" onClick={handleClear} className="clearButton">
            Clear Form
          </button>
          <button type="submit" className="submitButton">
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyFeedbackForm;

