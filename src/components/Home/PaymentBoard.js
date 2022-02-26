// TODO: implement the payment component (exclusive to residents)
import styles from "./PaymentBoard.module.css";
import React, {useState, useEffect} from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { getAccount } from "../../utils";
const PaymentBoard = () => {
    const [due, setDue] = useState(9999);
    const [loading, setLoading] = useState(false);

    // useEffect( async () => {
    //     const userId = localStorage.getItem("userId");
    //     try {
    //         const account = await getAccount(userId);
    //         setDue(account.balance);
    //     } catch (error) {
    //         message.error(error.message);
    //     }
    // });

    const handlePayment = () => {
        setDue(0);
        message.success("Payment succeed");
    }

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Payment</h1>
            <div style={{marginBottom: "20px", fontSize: "large"}}>
                your payment amount is $ <strong style={{font: "fantasy"}}>{due}</strong>
            </div>
            <Form>
                <Form.Item>
                    <Input placeholder="Card Number"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Expiration Date"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="CVV"/>
                </Form.Item>
                <Form.Item>
                    <Checkbox>Terms Agreement</Checkbox>
                </Form.Item>
                <Form.Item>
                    <button className={styles.submitButton} loading={loading} onClick={handlePayment}>Make Payment</button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default PaymentBoard;