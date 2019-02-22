import React,{Component}from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';
import '../../assets/css/socialshare.scss';

const template = 'Highlights from Author\'s Haven';

class ShareIcons extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {
    const { shareURL, title } = this.props;
    const updatedTitle = 'I thought you would like to see this: ' + title;


  return (
    <div id="social-sharing">
            <TwitterShareButton
              url={shareURL}
              title={updatedTitle}
              className="share-icons">
              <TwitterIcon size={40} round/>

            </TwitterShareButton>

            <FacebookShareButton
              url={shareURL}
              quote={updatedTitle}
              className="share-icons">
              <FacebookIcon size={40} round/>
            </FacebookShareButton>

           <LinkedinShareButton
             url={shareURL}
             title={updatedTitle}
             className="share-icons"
           >
             <LinkedinIcon size={40} round/>
           </LinkedinShareButton>

            <EmailShareButton
              body={updatedTitle + '  ' + shareURL}
              subject={template}
              className="share-icons">
              <EmailIcon size={40} round/>
            </EmailShareButton>

    </div>
  );
};
}
ShareIcons.propTypes = {
  shareURL: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired
};

export default ShareIcons;
