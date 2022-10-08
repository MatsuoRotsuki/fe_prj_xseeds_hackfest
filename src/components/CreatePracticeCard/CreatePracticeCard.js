import styles from "./CreatePracticeCard.module.scss";
function CreatePracticeCard({ index }) {
  return (
    <div className={styles.createrCard}>
      <div className={styles.file}>
        <label>
          <input type="file" className={styles.custom_file_input} />
          <i className="ti ti-upload"></i>
          <span>Upload image</span>
        </label>
        <label>
          <input type="file" className={styles.custom_file_input} />
          <i className="ti ti-upload"></i>
          <span>Upload listening file</span>
        </label>
      </div>
      <h1>Question {index}:</h1>
      <textarea placeholder="Nhập câu hỏi"></textarea>
      <div className={styles.groupAnswer}>
        <div className={styles.answer}>
          <h1>A </h1>
          <textarea placeholder="Nhập câu hỏi"></textarea>
        </div>
        <div className={styles.answer}>
          <h1>B </h1>
          <textarea placeholder="Nhập câu hỏi"></textarea>
        </div>
        <div className={styles.answer}>
          <h1>C </h1>
          <textarea placeholder="Nhập câu hỏi"></textarea>
        </div>
        <div className={styles.answer}>
          <h1>D </h1>
          <textarea placeholder="Nhập câu hỏi"></textarea>
        </div>
      </div>
    </div>
  );
}

export default CreatePracticeCard;