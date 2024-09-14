import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassList from './components/ClassList';
import LectureDetail from './components/LectureDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={ClassList} />
        <Route path="/lecture-detail" element={<LectureDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
