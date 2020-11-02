export default function Upload() {
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { url } = await res.json();

    const upload = await fetch(url, {
      method: 'PUT',
      contentType: file.type,
      data: file,
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  };

  return (
    <>
      <p>Upload a .png or .jpg image.</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
    </>
  );
}
