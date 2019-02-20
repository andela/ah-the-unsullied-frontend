
  export const getImage = (props) => {
    if (!props.image) {
      props.image = '../assets/images/profile.png'
    }else{
      return props.image
    }
  };
  