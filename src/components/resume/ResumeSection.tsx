import React from 'react'
import { RESUME_CONTENT, FILE_PATHS } from '../../assets/constants';
import { ResumeConverter } from './ResumeConverter'
import { handleDownload } from '../../assets/module/ResumeDownload';
import styles from "../../assets/style/resume.module.css";

const ResumeSection: React.FC = () => {
  return (
    <div id="resume" className={styles["resume-container"]}>
      <div className={styles["resume-wrapper"]}>
        
        {/* Left-Section */}
        <div className={styles["resume-content-left"]}>
          <h1 className={styles["resume-title"]}>
            <span className={styles["resume-span"]}>
              {RESUME_CONTENT.h1}
            </span>
            &nbsp;{RESUME_CONTENT.h1_span}
          </h1>
          <h2 className={styles["resume-subtitle"]}>
            {RESUME_CONTENT.h2}
          </h2>
          <p className={styles["resume-text"]}>
            {RESUME_CONTENT.p}
          </p>
          <button 
          onClick={handleDownload}
          className={styles["resume-button"]}
          >
            {RESUME_CONTENT.btn_DownResume}
          </button>
        </div>
        
        {/* Right-Section */}
        <div className={styles["resume-preview"]} role="img" aria-label="Resume Preview">
          <ResumeConverter file={FILE_PATHS.RESUME_PDF} />
        </div>

      </div>
    </div>
  )
}

export default ResumeSection