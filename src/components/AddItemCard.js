import { useMutation } from "@apollo/client";
import { Button, Card, CardActions, CardContent, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { CREATE_ITEM } from "../graphql/mutations";
import ImageUpload from "../pages/ImageUpload";

const AddItemCard = () => {

    const [values, setValues] = useState(
        {
            name: "",
            price: 0,
            img: ""
        }
    );

    const [createItemAPI, { data, loading, error }] = useMutation(CREATE_ITEM);

    if (error) console.log(error);

    const galleryImageList = [];

    const createItem = async () => {
        console.log(values);
        // todo: connect api => create item
        await createItemAPI({ variables: { data: values } });
        window.location.reload();
    }

    const handleChange = (prop) => (event) => {
        var value = event.target.value;
        if (prop === 'price') value = parseInt(value);
        setValues({ ...values, [prop]: value });
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }} align="center" justify="center">
                    <ImageUpload cardName="Input Image" width="100%" imageGallery={galleryImageList} justify='center' align='center' />
                </CardContent>

                <CardContent sx={{ flexGrow: 1 }}>
                    <TextField variant="outlined" onChange={handleChange('name')} value={values.name} label="名稱" />
                </CardContent>
                {/* <CardContent sx={{ flexGrow: 1 }}>
                    <TextField variant="outlined" onChange={handleChange('description')} value={values.description} label="簡介" />
                </CardContent> */}
                <CardContent>
                    <TextField type="number" variant="outlined" onChange={handleChange('price')} value={values.price} label="價格" />
                </CardContent>

                {/* <CardContent sx={{ flexGrow: 1 }} align="center" justify="center" height="50%">
                    <TextField id="ItemDescription" label="輸入餐點描述" multiline={true} rows={5} />
                  </CardContent> */}

                <CardActions>
                    <Button size="medium" variant="contained" onClick={createItem}>新增餐點</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default AddItemCard;