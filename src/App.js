
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header/index';
import ErrorModalComponent from './ErrorModal';
import ContantComponent from './Body/Contact';
import ContantSchoolComponent from './Body/ContactSchool';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<><NewsGroupComponent /><PaginationComponent /></>} />
        <Route path="/:q" element={<><NewsGroupComponent /><PaginationComponent /></>} />
        <Route path="/lang/:lang" element={<><NewsGroupComponent /><PaginationComponent /></>} />
        <Route path="/contact/school" element={<ContantSchoolComponent />} />
        <Route path="/contact" element={<ContantComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;