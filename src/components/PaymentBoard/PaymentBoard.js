import styles from "./PaymentBoard.module.css";
import React, { useState, useRef } from "react";
import { Checkbox, Form, Input, message } from "antd";

const PaymentBoard = () => {
    // TODO: use ref to validate form items upon submission
    // const ref = useRef(null);
    const [due, setDue] = useState(100);
    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        if (due === 0) {
            message.warning("Your statement balance is 0!");
        } else {
            setDue(0);
            message.success("Your payment was successful!");
        }
    }

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Payment Board</h1>
            <div style={{ marginBottom: "20px", fontSize: "large" }}>
                Your payment amount is $ <strong style={{ font: "fantasy" }}>{due}</strong>
            </div>
            <Form>  
                <Form.Item>
                    <Input placeholder="Card Number" required="true" name="card-number" disabled={loading} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Expiration Date" required="true" name="expiration-date" disabled={loading} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="CVV" required="true" name="cvv" disabled={loading} />
                </Form.Item>
                <Form.Item>
                    <Checkbox required="true" name="terms-agreement" disabled={loading}>Terms Agreement</Checkbox>
                </Form.Item>
                <Form.Item>
                    <button className={styles.submitButton}
                        loading={loading}
                        onClick={handlePayment}>Make Payment</button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default PaymentBoard;
