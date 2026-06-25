import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './baseNode';
import { extractVariables } from '../lib/extractor';
import { computeTextHandles } from '../lib/computeHandles';
import styles from '../assets/styles/specific/TextNode.module.css';

export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const textAreaRef = useRef(null);

  const variables = extractVariables(currText);
  const handles = computeTextHandles(id, variables);

  useEffect(() => {

    if (!textAreaRef.current) return;

    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;

  }, [currText]);

  return (
    <BaseNode title="TextNode" handles={handles}>
      <label className={styles["label"]}>
        Text:
        <textarea ref={textAreaRef} value={currText} rows={1} className={`${styles["textarea"]}`}
          onChange={(e) => setCurrText(e.target.value)} />
      </label>
    </BaseNode>
  );
};