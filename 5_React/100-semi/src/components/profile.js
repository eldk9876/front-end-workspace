import { useState } from "react";

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
