import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Upload } from '@mui/icons-material';
import FileUploader from '../file-uploader/FileUploader';

export default function FileUploaderDialog(props) {
  const { open, onClose, onFileUpload } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file)); // create image URL for preview
  };

  const handleFileUpload = () => {
    // handle file upload logic here
    onFileUpload(selectedFile);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload File</DialogTitle>
      <DialogContent>
        {selectedFile && (
          <img src={imagePreview} alt="Preview" style={{ maxWidth: "100%" }} />
        )}
        <FileUploader onChange={handleFileSelect} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleFileUpload} disabled={!selectedFile}>Upload</Button>
      </DialogActions>
    </Dialog>
  );
}
