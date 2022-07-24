import React, {useEffect, useState} from 'react';
import "./BackToTop.css";


function BackToTop() {
    const [isVisible, setVisible] = useState(false);
    function toggleVisibility() {
        if (window.pageYOffset > 900){
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    function scrollToTop() {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        )
    }

    useEffect(
        () => {
            window.addEventListener("scroll", toggleVisibility);
            return (
                () => {
                    window.removeEventListener('scroll', toggleVisibility);
                }
            )
        },
        []
    );

    return (
        <div className="scroll_to_top">
            {
                isVisible && (
                    <div className="back_to_top_container" onClick={scrollToTop}>
                        Back To Top
                    </div>
                )
            }
        </div>
    );
}

export default BackToTop;