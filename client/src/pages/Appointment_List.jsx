import React, { useState, useEffect } from 'react'
import moduleName from 'module';
import { useSelector } from "react-redux";
import { Table, Input } from 'antd';
const Appointment_List = () => {

    const [searchState, setsearchState] = useState("")

    const [dataset, setdataset] = useState(null)
    const Patient_data = useSelector((state) => state.Patient_data.personal_data)

    // Database call
    const get_Appointment_data = async () => {
        try {
            const res = await fetch(`/api/get_appointment_detail/${Patient_data.email}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();
            setdataset(data);
            console.log(data);
            console.log(typeof (dataset));

            if (res.status != 200) {
                const error = new error(res.error)
                throw error;
            }
            else {
                console.log(data[0].name);
            }
        } catch (error) {
            console.log("cannot find the data");
        }
    }

    // function calling
    useEffect(() => {
        if (dataset === null) {
            get_Appointment_data()
        }
    }, []);

    // colums for table
    const colums = [
        {
            key: "1",
            title: "Name",
            dataIndex: "name",
            filteredValue: [searchState],
            render: (record) => {
                const val = String(record).substring(0,1).toUpperCase()+String(record).substring(1)
                return (
                    <h1>{val}</h1>
                )
            },
            onFilter: (value, record) => {
                return (
                    String(record.name).toLowerCase().
                        includes(value.toLowerCase()) ||
                    String(record.email).toLowerCase().
                        includes(value.toLowerCase()) ||
                    String(record.date).toLowerCase().
                        includes(value.toLowerCase()) ||
                    String(record.time_of_meeting).toLowerCase().
                        includes(value.toLowerCase()) ||
                    String(record.doctor_name).toLowerCase().
                        includes(value.toLowerCase()) ||
                    String(record.time_of_booking).toLowerCase().
                        includes(value.toLowerCase())
                )
            },
        },
        {
            key: "2",
            title: "Email",
            dataIndex: "email",
            render: (_, record) => {
                return (
                    <h1 style={{ color: "green", textAlign: "center" }}>{record.email}</h1>
                )
            }
        },
        {
            key: "3",
            title: "Date Of Appointment",
            dataIndex: "date",
            render: (_, record) => {
                const val = String(record.date).substring(0, 10)
                return (
                    <h1 style={{ color: "green", textAlign: "center" }}>{val}</h1>
                )
            }
        },
        {
            key: "4",
            title: "Meeting Time",
            dataIndex: "time_of_meeting",
            render: (_, record) => {
                let time = String(record.time_of_meeting)
                let settime = parseInt(time.substring(0, 2));
                // console.log(settime)

                let last = "";
                if(settime>=12){
                    last = " PM"
                }
                else{
                    last = " AM"
                }

                if (settime != 12) {
                    settime = parseInt(settime % 12);
                }
                settime = String(settime);
                // console.log(settime.length)
                if(settime.length==1) {
                    settime = "0"+settime;
                }
                // console.log((settime))
                const finaltime = String(settime) + time.substring(2)+last

                return (
                    <div>
                        <h1 style={{ color: "green", textAlign: "center" }}>{finaltime}</h1>
                    </div>

                )
            }
        },
        {
            key: "5",
            title: "Doctor's Name",
            dataIndex: "doctor_name",
            render: (record) => {
                const val = String(record).substring(0,1).toUpperCase()+String(record).substring(1)
                return (
                    <h1>Dr. {val}</h1>
                )
            },
        },
        {
            key: "6",
            title: "Booking Date",
            dataIndex: "time_of_booking",
            render: (_, record) => {
                console.log(record.time_of_booking)
                const date = String(record.time_of_booking).substring(0, 10)
                let time = String(record.time_of_booking).substring(11)
                let settime = parseInt(time.substring(0, 2));
                let last = "";
                if(settime>=12){
                    last = " PM"
                }
                else{
                    last = " AM"
                }
                if (settime != 12) {
                    settime = parseInt(settime % 12);
                }
                settime = String(settime);
                if(settime.length==1) {
                    settime = "0"+settime;
                }
                const finaltime = String(settime) + time.substring(2,8)+last

                return (
                    <div>
                        <h1 style={{ color: "orange", textAlign: "center" }}>{date}</h1>
                        <h1 style={{ color: "orange", textAlign: "center" }}>{finaltime}</h1>
                    </div>

                )
            }
        },
    ]

    return (
        
        <div className='flex  flex-col space-y-3 items-center ml-[5vw]'>
            <Input.Search
                onSearch={(value) => {
                    setsearchState(value)
                }}
                onChange={(e) => {
                    setsearchState(e.target.value);
                }}
                size='large'
                placeholder='Search here ....'
                style={{margin: "2vh", width: "300px", position:""}}
            />
            <Table
                style={{ textAlign: "center",marginLeft:"3vw" }}
                columns={colums}
                dataSource={dataset}
            >
            </Table>
        </div>
    )
}

export default Appointment_List