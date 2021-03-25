import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Styles } from './Styles';

const useStyles = Styles;

export default function ImageUpload() {
  const classes = useStyles();
  const inputFile = useRef(null);
  const [urlImage, setUrlImage]: any = useState('#');
  const handleUploadClick = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => setUrlImage(reader.result);
  };

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key="Imagem"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '40%',
        }}
        onClick={() => inputFile.current.click()}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${urlImage})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            Upload
            <input
              ref={inputFile}
              accept="image/*"
              hidden
              onChange={handleUploadClick}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}
