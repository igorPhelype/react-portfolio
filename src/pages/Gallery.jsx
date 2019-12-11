import React, {Component} from 'react';
import {
    Card,
    Button,
    withStyles,
    CardContent,
    Input,
    InputAdornment,
    CardActionArea,
    CardMedia,
    Typography
} from '@material-ui/core';
import { compose } from 'redux';
import { withGalleryAppMain } from '../containers';
import { fetchPublications } from '../utils/apiUtils';

const styles = (theme) => ({
    root: {
        width: '300px',
        margin: '0 auto'
    },
    media: {
        height: "300px"
    }
})

class Gallery extends Component {
	static propTypes = {
    }
    state={
        galleryItems: []
    }
    componentDidMount(){
        fetchPublications().then((res) =>{
            this.setState({galleryItems: res})
        }).catch((err) => {
            console.error(err)
        });
    }
    render() {
        const {
            classes
        } = this.props;
        const {
            galleryItems
        } = this.state;
        console.log("Gallery Statex: ", {state: this.state})
        return galleryItems.map((item, index) => 
            <Card key={index} className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} src={"img"} image={item.imgUrl} title={item.title} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                        <Typography component="p">{item.content}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default compose(withGalleryAppMain('Galeria'), withStyles(styles))(Gallery);
