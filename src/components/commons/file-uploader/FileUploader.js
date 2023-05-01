import React from 'react';

export default function FileUploader(props) {
  const { onChange } = props;

  const handleUpload = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  return (
    <input type="file" accept="image/*" onChange={handleUpload} />
  );
}