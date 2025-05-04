


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       studentId: null,
//       faculty: null,
//     };
//   }

//   handleRegistered = () => {
//     // Optionally navigate to login view or auto-login
//   };

//   handleLoggedIn = (studentId) => {
//     this.setState({ studentId });
//   };

//   handleFacultySelect = (faculty) => {
//     this.setState({ faculty });
//   };

//   render() {
//     const { studentId, faculty } = this.state;

//     if (!studentId) {
//       return (
//         <>
//           <Register onRegistered={this.handleRegistered} />
//           <Login onLoggedIn={this.handleLoggedIn} />
//         </>
//       );
//     }

//     if (!faculty) {
//       return <FacultySearch onSelect={this.handleFacultySelect} />;
//     }

// App.js
// App.js
import React from 'react';
import FacultyFeedbackForm from './components/FacultyFeedbackForm';

function App() {
  return (
    <div className="app">
      <FacultyFeedbackForm />
    </div>
  );
}

export default App;
   
  
