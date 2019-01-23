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
import Firestore from '../../FirebaseUtils/firestore';

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
        // response.docs
        Firestore.collection("publication").get().then(response => {
            const galleryItems = response.docs.map(item => item.data());
            this.setState({galleryItems});
        });
    }
    render() {
        const {
            classes
        } = this.props;
        const {
            galleryItems
        } = this.state;
        console.log("Gallery State: ", {state: this.state})
        return galleryItems.map((item, index) => 
            <Card key={index} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        src={"img"}
                        image={item.imgUrl}
                        title={item.title} />
                    {/* <img src={item.imgUrl} /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                        <Typography component="p">{item.content}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(Gallery);
