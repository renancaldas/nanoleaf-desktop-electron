import React, { useState, useEffect } from "react";

const Teste = (props) => {
  const [value, setValue] = useState(''); // rendering twice

  useEffect(() => {
    console.log(":: Teste :: props: ", props);

  }, []);

  return (
    <div>blah</div>
  );
};

export default Teste;
