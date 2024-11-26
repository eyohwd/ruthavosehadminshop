import { Send } from "@material-ui/icons";
import "./newsLetter.css"

const NewsLetter = () => {
  return (
    <div className="newsLetterContainer">
        <div className="emailWrapper">
      <h2 className="emailTitle">NEWS LETTER</h2>
      <p className="emailDesc">Send Your Email To Subscribe To Our Newsletter.</p>
      <div className="emailContainer">
        <input placeholder="Your Email" className="emailInput"/>
        <button className="emailButton" >
            <Send style={{fontSize: "30px"}}/>
        </button>
      </div>
      </div>
    </div>
  );
}

export default NewsLetter;
