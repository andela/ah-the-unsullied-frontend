import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShareIcons from './shareContainer';


class SocialShareIcons extends Component {

  render() {
    const {title, slug} = this.props;
    const shareURL = process.env.REACT_APP_BASE_URL_FRONTEND + slug;
    return(
      <ShareIcons shareURL={shareURL} title={title}/>
    )
  }
}

SocialShareIcons.propTypes ={
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default SocialShareIcons
