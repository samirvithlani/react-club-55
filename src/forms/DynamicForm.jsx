import axios from "axios";
import React, { useEffect, useState } from "react";

export const DynamicForm = () => {
  const [form, setform] = useState();

  const getFormData = async () => {
    const res = await axios.get("http://localhost:3001/form");
    console.log("res...", res);
    setform(res.data.data);
  };
  useEffect(() => {
    getFormData();
  }, []);

  return (
    <div>
      DynamicForm
      <form>
        {form?.map((f) => {
          return (
            <div>
              <label>{f?.fieldName}</label>
              <input type={f?.fieldType} />
            </div>
          );
        })}
      </form>
    </div>
  );
};
