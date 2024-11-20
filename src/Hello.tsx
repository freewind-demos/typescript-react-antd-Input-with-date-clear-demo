import { Button, Input } from 'antd';
import React, { FC, useRef, useState } from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const [date, setDate] = useState<string>('');
  const inputRef = useRef<any>(null);

  const handleClear = () => {
    setDate('');
    if (inputRef.current) {
      inputRef.current.input.value = '';
    }
  };

  return <div className={'Hello'}>
    <h1>Date Input Demo</h1>
    <div>
      <Input
        ref={inputRef}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ width: 200, marginRight: 8 }}
      />
      <Button onClick={handleClear}>Clear</Button>
    </div>
  </div>;
}
