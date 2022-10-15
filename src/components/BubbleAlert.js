import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#e9725a',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        position: 'relative',
        left: 12,
        top: 20

    }
}

class BubbleAlert extends Component {
    render() { 
        return(
            <span style={styles.bubbleAlert}>
                1
            </span>
        )
    }
}

export default BubbleAlert