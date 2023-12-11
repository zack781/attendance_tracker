import NavBar from "./NavBar";
import React, { useEffect, useState } from 'react';

import { CSSProperties } from "react";

import getDay from 'date-fns/getDay'
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import { getDate } from "date-fns";
import getMonth from 'date-fns/getMonth';
import sub from 'date-fns/sub'

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { listeners } from "process";

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = today.getMonth() + 1
// var yyyy = today.getFullYear();

// var res = mm + '/' + dd + '/' + yyyy;
// console.log(res);
// console.log(today.getMonth() + 1)
// const first = new Date(yyyy, today.getMonth(), 1)

// const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

// console.log(days[getDay(first)])

// // const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

// let listDays: any = []

// const last = lastDayOfMonth(new Date(2022, 7)) 
// var selectedDate

// var months: number[] = []

// for (let i=getDay(first)-1; i>=0; i--){
//     selectedDate = sub(last, {days: i})
//     listDays.push(selectedDate.getDate())
//     months.push(getMonth(selectedDate) + 1)

// }


// console.log(listDays)

// for (let i=1; i<lastDayOfMonth(new Date(2022, 8)).getDate()+1; i++){
//     listDays.push(i)
//     months.push(mm);
// }

// console.log("months = ", months)


// console.log(listDays)

// if (listDays.length % 7 != 0){
//     const max = 7 - (listDays.length%7)
//     for (let i=0; i<max; i++){
//         console.log(i)
//         listDays.push(i+1);
//         months.push(mm + 1);
//     }
// }

// console.log(listDays)

// var listDays2D: any = []


// for (let i=0; i<(listDays.length/7); i++){
//     let temp = []
//     for (let j=0; j<7; j++){
//         temp.push(listDays[j + 7*i])
//     }
//     listDays2D.push(temp)
// }

// console.log(listDays2D)

const thStyle: CSSProperties = {
    width: "50px"
}

const tableStyle: CSSProperties = {
    paddingLeft: "20%",
    paddingRight: "20%"
}

const tdStyle: CSSProperties = {
    height: "105px",
}

const View = () => {
    const daysStr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    const monthsStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [today, setToday] = useState<Date>(new Date());
    const [dayOfMonth_today, setDayOfMonth_today] = useState<number>(today.getDate());
    const [dayOfWeek_today, setDayOfWeek_today] = useState<number>(getDay(today) + 1);
    const [month_today, setMonth_today] = useState<number>(today.getMonth());

    // console.log("dayOfMonth_today = ", dayOfMonth_today);
    // console.log("dayOfWeek_today = ", dayOfWeek_today);
    // console.log("month_today = ", month_today);

    const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear());
    
    const [selectedMonth, setSelectedMonth] = useState<number>(month_today);
    const [selectedDay, setSelectedDay] = useState<number>(dayOfMonth_today);
    const [selectedDay_week, setSelectedDay_week] = useState<number>(dayOfWeek_today);
    
    const [listDays, setListDays] = useState<number[]> ([]);
    const [listDays2D, setListDays2D] = useState<number[][]> ([]); 
    const [months, setMonths] = useState<number[]> ([]);
    
    const last = lastDayOfMonth(new Date(selectedYear, selectedMonth - 2))

    const [initDateFlag, setInitDateFlag] = useState<boolean>(true);
    const [gen2DListFlag, set2DListFlagGen] = useState<boolean>(true);
    
    const initDateData = () => {
        let listDaysTemp: number[] = []
        let monthsTemp: number[] = []
    
        // Days before selectedMonth
        for (let i=getDay(new Date(selectedYear, selectedMonth - 1, 1))-1; i>=0; i--){
            let selectedDate = sub(last, {days: i})
            listDaysTemp.push(selectedDate.getDate())
            monthsTemp.push(getMonth(selectedDate) + 1)
        }
        
        // Days in selectedMonth
        for (let i=1; i<lastDayOfMonth(new Date(selectedYear, selectedMonth - 1)).getDate()+1; i++){
            listDaysTemp.push(i)
            monthsTemp.push(selectedMonth);
        }
    
        // Days after selectedMonth
        if (listDaysTemp.length % 7 != 0){
            const max = 7 - (listDaysTemp.length%7)
            for (let i=0; i<max; i++){
                console.log(i)
                listDaysTemp.push(i+1);
                monthsTemp.push(selectedMonth + 1);
            }
        }

        setListDays(listDaysTemp);
        setMonths(monthsTemp); 

        console.log(monthsTemp);

    }

    const generate2DList = () => {
        let listDays2D_temp: number[][] = []
        for (let i=0; i<(listDays.length/7); i++){
            let temp: number[] = []
            for (let j=0; j<7; j++){
                temp.push(listDays[j + 7*i])
            }
            listDays2D_temp.push(temp)
        }
        setListDays2D(listDays2D_temp);
        console.log("2D = ", listDays2D);
    }

    useEffect(() => {
        if (initDateFlag){
            initDateData();
            setInitDateFlag(false);
        }
        if (gen2DListFlag && listDays.length > 0){
            generate2DList();
            set2DListFlagGen(false);
        }
    })

    console.log("listDays = ", listDays)
    console.log("listMonths = ", months)
   
    const mouseOver = (e: any) => {
        e.target.style.background = '#3e81ed'
        e.target.style.color = "white"
    }

    const mouseOut = (e: any) => {
        e.target.style.background = 'white'
        e.target.style.color = "black"
    }

    const [showAttendanceModal, setAttendanceModal] = useState<boolean>(false);

    const handleAttdnModalShow = () => setAttendanceModal(true);
    const handleAttdnModalHide = () => setAttendanceModal(false);

    const [first, setFirst] = useState<string>("");
    const [middle, setMiddle] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [attendance, setAttendance] = useState<number>();

    const [selectedDate, setSelectedDate] = useState<string>("");

    const updateField = (e: any) => {
        switch (e.target.name){
            case "first":
                setFirst(e.target.value);
                break
            case "middle":
                setMiddle(e.target.value);
                break
            case "last":
                setLastName(e.target.value);
                break
            case "attendance":
                setAttendance(e.target.value);
                break
        }
    }

    const testApi = async (): Promise<void> => {
        const res = await fetch("http://localhost:8080/").then(res => {
            console.log("res = ", res.text());
        })
    }

    const handleSelectedDate = (e: any) => {
        let date = e.target.id;
        console.log(date)
        //testApi();
        setSelectedDate(e.target.id)
        handleAttdnModalShow();
    }

    const updateAttendanceAPI = () => {
        // console.log("date = ", selectedDate);
        // console.log("first = ", first);
        // console.log("middle = ", middle);
        // console.log("last = ", lastName);
        // console.log("showed_up = ", attendance);
        const res = fetch("http://localhost:8080/take_attendance", {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "date": selectedDate,
                "first": first,
                "middle": middle,
                "last": lastName,
                "showed_up": attendance
           })
        })
        handleAttdnModalHide();
    }

    return ( 

        <div>

            <Modal show={showAttendanceModal}>
                <Modal.Header>
                    <Modal.Title>Taking Attendance for {selectedDate}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Container className="d-grid gap-2 mt-2">
                        <Row>
                            <Col className="d-flex flex-row justify-content-end">
                                First
                            </Col>
                            <Col>
                                <label>
                                     <input size={13} type="text" name="first" placeholder="First Name" onChange={updateField}></input>
                                </label>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="d-flex flex-row justify-content-end">
                                Middle 
                            </Col>
                            <Col>
                                <label>
                                     <input size={13} type="text" name="middle" placeholder="Middel Name" onChange={updateField}></input>
                                </label>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="d-flex flex-row justify-content-end">
                                Last 
                            </Col>
                            <Col>
                                <label>
                                     <input size={13} type="text" name="last" placeholder="Last Name" onChange={updateField}></input>
                                </label>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="d-flex flex-row justify-content-end">
                                Showed Up? 
                            </Col>
                            <Col>
                                <label>
                                     <input size={13} type="text" name="attendance" placeholder="1:yes 0:No" onChange={updateField}></input>
                                </label>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleAttdnModalHide}>Cancel</Button>
                    <Button variant="primary" onClick={updateAttendanceAPI}>Add</Button>
                </Modal.Footer>
            </Modal>

            <NavBar></NavBar>

            <h1 className="text-center mt-4">{monthsStr[selectedMonth-1]}</h1>

            

            <div style={tableStyle}>
                <table className="table table-borderless mt-4 shadow">
                    <thead className="thead-dark">
                        <tr className="bg-secondary text-white">
                            <th className="border border-grey" style={thStyle}>Su</th>
                            <th className="border border-grey" style={thStyle}>Mo</th>
                            <th className="border border-grey" style={thStyle}>Tu</th>
                            <th className="border border-grey" style={thStyle}>We</th>
                            <th className="border border-grey" style={thStyle}>Th</th>
                            <th className="border border-grey" style={thStyle}>Fr</th>
                            <th className="border border-grey" style={thStyle}>Sa</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {listDays2D.map((week: any, index: any) => {
                            return <tr>
                                <td id={months[0 + 7*index] + "/" + week[0] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[0]}</td>
                                <td id={months[1 + 7*index] + "/" + week[1] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[1]}</td>
                                <td id={months[2 + 7*index] + "/" + week[2] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[2]}</td>
                                <td id={months[3 + 7*index] + "/" + week[3] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[3]}</td>
                                <td id={months[4 + 7*index] + "/" + week[4] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[4]}</td>
                                <td id={months[5 + 7*index] + "/" + week[5] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[5]}</td>
                                <td id={months[6 + 7*index] + "/" + week[6] + "/" + selectedYear} style={tdStyle} className="border p-2" onMouseOver={mouseOver} onMouseLeave={mouseOut} onClick={handleSelectedDate}>{week[6]}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default View;