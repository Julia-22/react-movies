import './ReviewList.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ReviewList({ reviews }) {

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
  }

  return (
    <ul className="reviewsList_container">
      {reviews.map(el => (
        <li key={el.id}>
          {console.log(new Date(el.created_at))}
          <div className="flex_container">
            <AccountCircleIcon style={{ width: '50px', height: '50px', marginRight: '20px'}}/>
            
            <div className="review_info">
              <p className="author">{el.author}</p>
              <p className="date">{convertDate(new Date(el.created_at))}</p>
            </div>
          </div>
          <p className="review">{el.content}</p>
        </li>
      ))}
    </ul>
  );
}



export default ReviewList;