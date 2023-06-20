const blob = document.getElementById('bg-blob');

const moveBlob = (event: PointerEvent) => {
  const { clientX, clientY } = event;
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 40000, fill: 'forwards' }
  );
};

document.body.addEventListener('pointermove', moveBlob);
