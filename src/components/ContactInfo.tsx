import React, { useState } from "react";
import "./Contact.css";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { motion } from "framer-motion";


const slidingVariants = {
  hidden: { y: "-100vw" },
  visible: { y: 0, transition: { duration: 0.5 } }
};

const ContactInfo = () => {
  const [expanded, setExpanded] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  return (
    <div className="contact-container">
      {!expanded ? (
        <button
          className="contact-button"
          onClick={() => setExpanded(true)}
          style={{ maxHeight: "2rem" }}
        >
          Contact Me
        </button>
      ) : (
        <>
          <motion.div variants={slidingVariants}
            initial="hidden"
            animate="visible">
            <div onClick={(e) => { e.stopPropagation(); copyToClipboard("priyanka@example.com"); }} style={{ display: "flex", cursor: "pointer", marginRight: "10px", alignItems: "center" }}>
              <EmailIcon sx={{ marginRight: "5px" }} /> priyanka@example.com
            </div>
            <div onClick={(e) => { e.stopPropagation(); copyToClipboard("+1234567890"); }} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
              <LocalPhoneIcon sx={{ marginRight: "5px" }} /> +1234567890
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ContactInfo;
