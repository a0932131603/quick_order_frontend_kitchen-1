// import { useQuery } from "@apollo/client";
// import { Button, Container, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
// import { ConstructionOutlined } from "@mui/icons-material";
// import { useState, useEffect } from 'react';
// import KitchenOrderList from "../components/KitchenOrderList";
// import { SUBSCRIPTION_ORDER } from "../graphql";
// import { QUERY_ORDERS } from "../graphql/queries";


// const useStyles = makeStyles({
//     btn: {
//         fontSize: 60,
//         // backgroundColor: 'violet',
//         '&:hover': {
//             backgroundColor: 'blue'
//         }
//     },
//     title: {
//         textDecoration: 'underline',
//         margin: 20
//     }
// });


// const Kitchen = () => {
//     const classes = useStyles();
//     const [orderList, setOrderList] = useState([])
//     const { loading, error, data, subscribeToMore } = useQuery(QUERY_ORDERS, { variables: { restaurantId: "s001" } });
//     useEffect(() => {
//         if (!loading) {
//             console.log("data.todayOrders", data.todayOrders)
//             setOrderList(data.todayOrders)
//             subscribeToMore({
//                 document: SUBSCRIPTION_ORDER,
//                 variables: { restaurantId: "restautantID" },
//                 updateQuery: (prev, { subscriptionData }) => {
//                     console.log("subscriptionData.data.order", subscriptionData.data.order)
//                     setOrderList(subscriptionData.data.order)
//                 }
//             })
//         }
//     }, [loading]);

//     return (
//         <Container>
//             <Grid container spacing={3} direction="column-reverse">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : error ? (
//                     <p>Error ^U^</p>
//                 ) : (
//                     orderList.map(order =>
//                         <Grid key={order.id} item>
//                             <KitchenOrderList order={order} />
//                         </Grid>
//                     )
//                 )}
//             </Grid>
//         </Container>
//     );
// }

// export default Kitchen;

import { useQuery } from "@apollo/client";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ConstructionOutlined } from "@mui/icons-material";
import { useState, useEffect } from 'react';
import KitchenOrderList from "../components/KitchenOrderList";
import { SUBSCRIPTION_ORDER } from "../graphql";
import { QUERY_ITEMS, QUERY_ORDERS } from "../graphql/queries";


// const useStyles = makeStyles({
//     btn: {
//         fontSize: 60,
//         // backgroundColor: 'violet',
//         '&:hover': {
//             backgroundColor: 'blue'
//         }
//     },
//     title: {
//         textDecoration: 'underline',
//         margin: 20
//     }
// });




// const Kitchen = () => {

//     const [orderList, setOrderList] = useState([]);

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         fetch('http://localhost:8000/orders')
//             .then(function (response) {
//                 return response.json();
//             }).then(function (data) {
//                 setOrderList(data);
//                 console.log(data);
//             }).catch(() => console.log("error"));
//     }



//     return (

//         <Container>
//             <Grid container spacing={3} direction="column-reverse">
//                 {
//                     orderList.map(order =>
//                         <Grid key={order.id} item>
//                             <KitchenOrderList order={order} />
//                         </Grid>
//                     )
//                 }
//             </Grid>
//         </Container>
//     );
// }
const Kitchen = () =>{

    const { loading, error, data, subscribeToMore } = useQuery(QUERY_ITEMS, { variables: { restaurantId: "1" } });
    
    useEffect(()=>{ //當data狀態改變時刷新
        console.log(data)
    }, [data])
    
    }
export default Kitchen;