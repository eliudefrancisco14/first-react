function SeuNome({ setName }) {
  return (
    <>
      <input
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default SeuNome;
