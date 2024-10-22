import { useState } from "react";
import "../assets/img/아기새0.jpg";
import "../assets/img/아기새1.jpg";
import "../assets/img/아기새2.jpg";
import "../assets/img/아기새3.jpg";
import "../assets/img/아기새4.jpg";

const profile = async () => {
  const [picture, setPicture] = useState({
    memberImg: null,
  });
};

if (!isOpen) return null;

const upload = async () => {
  const formData = new FormData();
  formData.append("memberImg", member.memberImg);
};

const response = await AdditiveAnimationBlendMode(formData);

console.log(response.data);
onUpload(response.data);
onClose();

export default profile;
