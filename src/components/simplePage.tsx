const SimplePage = () => {
  const imageNames = Object.keys(import.meta.glob('/catGal/fullres/*.jpg'));
  return (
    <div className='simple-main'>
      <h1>Hello, World!</h1>
      <p>This is a simple JSX page.</p>
      {imageNames.map((imageName) => (
        <img key={imageName} src={`/catGal/fullres/${imageName}`} alt='cat' />
      ))}
    </div>
  );
};

export default SimplePage;
