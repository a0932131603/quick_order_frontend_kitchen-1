import CounterOrderList from "../containers/CounterOrderList";
import { useCallback, useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ORDERS } from "../graphql/queries";
import { CREATE_ORDER, SUBSCRIPTION_ORDER } from "../graphql";

    // const { loading, error, data, subscribeToMore } = useQuery(QUERY_ORDERS, { variables: { restaurantId: "s001" } });
    // const [addOrder] = useMutation(CREATE_ORDER);
    // const [orderList, setOrderList] = useState([])
    // useEffect(()=>{
    //     if (!loading){
    //         console.log("data.todayOrders", data.todayOrders)
    //         setOrderList(data.todayOrders)
    //         subscribeToMore({
    //             document: SUBSCRIPTION_ORDER,
    //             variables: { restaurantId: "restautantID" },
    //             updateQuery: (prev, {subscriptionData})=>{
    //                 console.log("subscriptionData.data.order", subscriptionData.data.order)
    //                 setOrderList(subscriptionData.data.order)
    //             }
    //         })
    //     }
    // }, [loading])
    // useEffect(() => {
    //     try {
    //         subscribeToMore({
    //             document: SUBSCRIPTION_ORDER,
    //             variables: { restautantId: "s001" },
    //             updateQuery: (prev, { subscriptionData }) => {
    //                 if (!subscriptionData.data) return prev;
    //                 const newOrder = subscriptionData.data;

    //                 console.log(newOrder);
    //                 console.log(prev.todayOrders);

    //                 return {
    //                     ...prev,
    //                     todayOrders: [newOrder, ...prev.todayOrders],
    //                 };
    //             },
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, [subscribeToMore]);

    // const handleCreate = useCallback(
    //     (e) => {
    //         addOrder({
    //             variables: {
    //                 order: {
    //                     id: "order668",
    //                     tableNo: "10",
    //                     totalPrice: 180,
    //                     time: new Date(),
    //                     items: [
    //                         {
    //                             id: "item888",
    //                             name: "測試",
    //                             price: 120,
    //                             quantity: 1,
    //                             note: "",
    //                             status: "RAW"
    //                         }
    //                     ]
    //                 },
    //             }
    //         });
    //     }, [addOrder]
    // );

// const Counter = () => {
//     const { loading, error, data, subscribeToMore } = useQuery(QUERY_ORDERS);
//     const [addOrder] = useMutation(CREATE_ORDER);

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
//             }).catch((e) => console.log("error" + e));
//     }

//     return (
//         <div>
//             {/* <Button variant="outlined"      onClick={handleCreate}>mutation</Button> */}
//             <Grid container direction='column-reverse' spacing={3}>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : error ? (
//                     <p>Error ^U^</p>
//                 ) : (
//                     orderList.map(order =>
//                     (<Grid item key={order.id}>
//                         <CounterOrderList order={order} />
//                     </Grid>))
//                 )}
//             </Grid>
//         </div>
//     );
// }

const Counter = () =>{

const {data, subscribeToMore } = useQuery(QUERY_ORDERS, { variables: { restaurantId: "1" } });
useEffect(()=>{ 
    // console.log(data)
}, [data])

useEffect(() => {
    try {
        subscribeToMore({
            document: SUBSCRIPTION_ORDER,
            variables: { restaurantId: "1" },
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newOrder = subscriptionData.data;

                console.log(newOrder);
                console.log(prev.todayOrders);

                return {
                    ...prev,
                    todayOrders: [newOrder, ...prev.todayOrders],
                };
            },
        });
    } catch (e) {
        console.log(e);
    }
}, [subscribeToMore]);

}

export default Counter;
