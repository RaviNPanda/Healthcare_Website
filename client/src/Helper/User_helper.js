import { useSelector, useDispatch } from "react-redux";
import * as Patient_data_Actions from '../redux/Patient_data';
const dispatch = useDispatch();

export const callAboutPage = async () => {
    try {
        const res = await fetch('/api/Home', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        const data = await res.json();
        dispatch(Patient_data_Actions.collectdata(data));
        if (!res.status === 200) {
            const error = new error(res.error)
            throw error;
        }
    } catch (error) {
        navigate('/')
        window.alert("Please Login First.")
    }
}