import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import TeacherSingleCard from './TeacherSingleCard';

const TeachersCard = ({ teachers }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {teachers.map((item) => (
        <TeacherSingleCard key={item._id} teacher={item} />
      ))}
    </div>
  );
};

export default TeachersCard;
