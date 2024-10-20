function SkillList({ src, h3 }) {
  return (
    <span>
      <img src={src} alt="Checkmark Icon" />
      <h3>{h3}</h3>
    </span>
  );
}

export default SkillList;
