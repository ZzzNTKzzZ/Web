import React from 'react';
import style from "../MapSection/MapSection.module.css";

function MapSection() {
    return (
        <div className={style.mapContainer}>
            <div className={style.mapBox}>
                <iframe 
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.715122209206!2d108.2533285!3d15.9743638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421088e365cc75%3A0x6648fdda14970b2c!2zNDcwIMSQxrDhu51uZyBUcuG6p24gxJDhuqFpIE5naGnDqSwgSG_DoGEgSOG6o2ksIE5nw7ogSOG6p25oIFPGoW4sIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1718306821739!5m2!1svi!2s"
                    width="100%"
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>
        </div>
    );
}

export default MapSection;